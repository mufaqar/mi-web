import Image from 'next/image';
import React, { useState } from 'react';
import Workbox from '../components/newComponents/workbox';
import Testimonial from '../components/newComponents/testimonial';
import CTA from '../components/newComponents/cta';

export default function Works2() {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine all works into a single array for displaying when "All work" is selected
  const allWorks = Categories.flatMap((category) =>
    category.works.map((work) => ({ ...work, categoryId: category.id }))
  );

  // Find works of the selected category
  const selectedWorks =
    selectedCategory !== 'All'
      ? Categories.find((category) => category.category === selectedCategory)?.works.map((work) => ({
        ...work,
        categoryId: Categories.find((cat) => cat.category === selectedCategory)?.id,
      })) || []
      : [];

  return (
    <main>
      <section className="bg-title_color md:py-[10.5rem] py-20 relative">
        <div className="container mx-auto px-4">
          <h1 className="md:text-[4.5rem] md:leading-[1] text-4xl font-bold text-white mb-9 max-w-[519px]">
            Work
          </h1>
          <p className="md:text-2xl text-lg font-normal text-white mb-6 max-w-[525px]">
            The vast majority of business comes via word of mouth, repeat business, and referrals. Below is a
            selection of work we’re extra proud of.
          </p>
          <Image
            src="/images/svgs/work.svg"
            alt="work"
            width={662}
            height={332}
            className="absolute right-[-5%] md:top-[-6%] top-[89%]"
          />
        </div>
      </section>
      <section className="bg-title_color md:pb-[10.5rem] pb-20 relative">
        <div className="container mx-auto px-4">
          <ul className="flex gap-8 justify-center mb-10">
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
                onClick={() => setSelectedCategory(item.category)}
              >
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

const Categories = [
  {
    id: 1,
    category: 'Commercial',
    works: [
      {
        title: 'Central CPD',
        shortinfo: 'Custom WooCommerce website with course bookings',
      },
      {
        title: 'Central CPD',
        shortinfo: 'Custom WooCommerce website with course bookings',
      },
      {
        title: 'Central CPD',
        shortinfo: 'Custom WooCommerce website with course bookings',
      },
    ],
  },
  {
    id: 2,
    category: 'eCommerce',
    works: [
      {
        title: 'Central CPD',
        shortinfo: 'Custom WooCommerce website with course bookings',
      },
    ],
  },
  {
    id: 3,
    category: 'Education',
    works: [
      {
        title: 'Central CPD',
        shortinfo: 'Custom WooCommerce website with course bookings',
      },
    ],
  },
];
