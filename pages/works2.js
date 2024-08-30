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
    <main className='overflow-x-hidden'>
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
            className="absolute md:right-[-5%] md:top-[-6%] top-[-5%] right-[-20%] md:scale-100 scale-50"
          />
        </div>
      </section>
      <section className="bg-title_color md:pb-[10.5rem] pb-20 relative">
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
        title: 'Anypos',
        slug: 'anypos',
        link: 'https://www.anypos.app',
        feature: "/images/anypose/any-feature.png",
        gallery: [
          {
            img: "/images/anypose/any-desk.png",
          },
          {
            img: "/images/anypose/gallery1.png",
          },
          {
            img: "/images/anypose/gallery2.png",
          },
          {
            img: "/images/anypose/gallery3.png",
          },
        ],
        features: [
          {
            name: 'Web Design',
          },
          {
            name: 'NextJs with Tailwindcss',
          },
          {
            name: 'Vercel Hosting',
          }
        ]
      },
      {
        title: 'Solution Founder',
        slug: 'solutionfounder',
        link: 'https://www.solutionfounder.com',
        feature: "/images/solut/sol-feature.png",
        gallery: [
          {
            img: "/images/solut/sol-desk.png",
          },
          {
            img: "/images/solut/gallery1.png",
          },
          {
            img: "/images/solut/gallery2.png",
          },
          {
            img: "/images/solut/gallery3.png",
          },
        ],
        features: [
          {
            name: 'Web Design',
          },
          {
            name: 'WordPress Development,',
          },
          {
            name: 'WordPress Hosting',
          }
        ]
      },
    ],
  },
  {
    id: 2,
    category: 'eCommerce',
    works: [
      {
        title: 'Mams House',
        slug: 'mamshouse',
        link: 'https://mamshouse.com',
        feature: "/images/mam/mam-feature.png",
        gallery: [
          {
            img: "/images/mam/mam-desk.png",
          },
          {
            img: "/images/mam/gallery1.png",
          },
          {
            img: "/images/mam/gallery2.png",
          },
          {
            img: "/images/mam/gallery3.png",
          },
        ],
        features: [
          {
            name: 'Web Design',
          },
          {
            name: 'WordPress Development,',
          },
          {
            name: 'WordPress Hosting',
          }
        ]
      },
      {
        title: 'Breeze Chrome Extension',
        slug: 'breeze1.netlify.app',
        link: 'https://breeze1.netlify.app',
        feature: "/images/bree/bree-feature.png",
        gallery: [
          {
            img: "/images/bree/bree-desk.png",
          },
          {
            img: "/images/bree/gallery1.png",
          },
          {
            img: "/images/bree/gallery1.png",
          },
          {
            img: "/images/bree/gallery1.png",
          },
        ],
        features: [
          {
            name: 'Web Design',
          },
          {
            name: 'WordPress Development,',
          },
          {
            name: 'WordPress Hosting',
          }
        ]
      },
    ],
  },
  {
    id: 3,
    category: 'Education',
    works: [
      {
        title: 'Smapy',
        slug: 'smapy',
        link: 'https://smapy.vercel.app/he',
        feature: "/images/smap/sma-feature.png",
        gallery: [
          {
            img: "/images/smap/sma-desk.png",
          },
          {
            img: "/images/smap/gallery1.png",
          },
          {
            img: "/images/smap/gallery2.png",
          },
          {
            img: "/images/smap/gallery3.png",
          },
        ],
        features: [
          {
            name: 'Web Design',
          },
          {
            name: 'WordPress Development,',
          },
          {
            name: 'WordPress Hosting',
          }
        ]
      },
      {
        title: 'Fund Gazer',
        slug: 'fundgazer',
        link: 'https://www.fundgazer.com',
        feature: "/images/fund/fun-feature.png",
        gallery: [
          {
            img: "/images/fund/fun-desk.png",
          },
          {
            img: "/images/fund/gallery1.png",
          },
          {
            img: "/images/fund/gallery2.png",
          },
          {
            img: "/images/fund/gallery3.png",
          },
        ],
        features: [
          {
            name: 'Web Design',
          },
          {
            name: 'WordPress Development,',
          },
          {
            name: 'WordPress Hosting',
          }
        ]
      },
    ],
  },
];
