import Image from 'next/image';
import React, { useState } from 'react';
import Workbox from '../../components/newComponents/workbox';
import Testimonial from '../../components/newComponents/testimonial';
import CTA from '../../components/newComponents/cta';
import { Categories } from '../../const/works.jsx'
import InnerPages_Banner from '../../components/innerPages-banner.js';


export default function Works() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine all works into a single array for displaying when "All work" is selected
  const allWorks = Categories.flatMap((category) =>
    category.works.map((work) => ({ ...work, categoryId: category.id, category: category.category, }))
  );

  // Find works of the selected category
  const selectedWorks =
    selectedCategory !== 'All'
      ? Categories.find((category) => category.category === selectedCategory)?.works.map((work) => ({
        ...work,
        categoryId: Categories.find((cat) => cat.category === selectedCategory)?.id,
        category: Categories.find((cat) => cat.category === selectedCategory)?.category,
      })) || []
      : [];

  return (
    <main className='overflow-x-hidden'>
      <InnerPages_Banner
        title="Work"
        subtitle="The vast majority of business comes via word of mouth, repeat business, and referrals. Below is a
            selection of work we’re extra proud of."
      />
      <section className="bg-title_color md:py-[12.5rem] py-20 relative">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap md:gap-8 gap-3 justify-center mb-10">
            {/* Filter buttons */}
            <li
              className={`text-lg font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300 cursor-pointer ${selectedCategory === 'All' && 'font-bold decoration-bs_link_color'
                }`}
              onClick={() => setSelectedCategory('All')}
            >
              All work
            </li>
            {Categories.map((item) => (
              <li
                key={item.id}
                className={`text-lg font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300 cursor-pointer ${selectedCategory === item.category && 'font-bold decoration-bs_link_color'
                  }`}
                onClick={() => setSelectedCategory(item.category)}>
                {item.category}
              </li>
            ))}
          </ul>

          <div className="">
            {/* Display All Works when "All work" is selected */}
            {selectedCategory === 'All' && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
                {allWorks.map((work, idx) => (
                  <Workbox
                    key={idx}
                    data={work}
                    cstm_class={`${work.categoryId === 1
                      ? 'bg-bs_secondary'
                      : work.categoryId === 2
                        ? 'bg-bs_link_color'
                        : 'bg-bs_btn_bg'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Display Selected Category Works */}
            {selectedCategory !== 'All' && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-start">
                {selectedWorks.map((work, idx) => (
                  <Workbox
                    key={idx}
                    data={work}
                    cstm_class={`${work.categoryId === 1
                      ? 'bg-bs_secondary'
                      : work.categoryId === 2
                        ? 'bg-bs_link_color'
                        : 'bg-bs_btn_bg'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Testimonial />
      <CTA />
    </main>
  );
}

