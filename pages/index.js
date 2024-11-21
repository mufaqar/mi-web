import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Workbox from '../components/newComponents/workbox'
import Testimonial from '../components/newComponents/testimonial'
import CTA from '../components/newComponents/cta'
import { Categories } from '../const/works'
import PageHead from '../components/pagesmeta'

export default function home2() {
    const allWorks = Categories.flatMap((category) =>
        category.works.map((work) => ({ ...work, categoryId: category.id, category: category.category, }))
    );
    return (
<>
        <PageHead
        title=" Full Stack MERN Developer | WordPress | React | NextJs | TailwindCSS "
        description="Seasoned ReactJs/WordPress/PHP Developer with over a decade of experience building, launching, and managing complex websites"
        url="https://www.mufaqar.com"
      />
        <main className='overflow-x-hidden'>
            <section className='relative'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center'>
                    <div className='md:w-1/2 w-full'>
                        <h1 className='md:text-6xl md:leading-[1] text-4xl font-bold text-[#1F2B37] mb-4'>
                       Crafting innovative platforms that empower organizations to thrive.
                        </h1>
                        <p className='md:text-2xl text-lg font-normal text-[#212121] mb-6'>
                        A Full Stack Freelancer. It's great to connect with you!
                        </p>
                        <Link href="/contact" className='text-sm font-normal text-white bg-[#36CCDA] hover:bg-bs_link_color hover:border-bs_link_color py-[0.688rem] px-[1.813rem] border-2 border-[#36CCDA] inline-block transition-all duration-300 sm:mb-24'>
                            CONTACT ME
                        </Link>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <Image src="/images/new-banner.png" alt='new-banner.png' width={942} height={975} />
                    </div>
                </div>
                <Image src="/images/svgs/blocks.svg" alt='blocks.svg' width={426} height={286} className='absolute 2xl:left-0 lg:left-[-131px] left-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
            </section>
            <section className='bg-bs_secondary md:py-[12.5rem] py-20'>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]'>
                            Branding & Web Design
                        </h2>
                        <p className='md:text-2xl text-base text-title_color mb-9 max-w-[474px]'>
                            Sensational brands. Amazing looking web designs. Perfectly combining function & form creating digital products user love.
                        </p>
                        <ul className='flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0'>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    Web Discovery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    Branding & Identity
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src="/images/branding.png" alt='branding' width={1000} height={667} className='md:ml-auto md:mr-0' />
                    </div>
                </div>
            </section>
            <section className='bg-bs_info md:py-[12.5rem] py-20 relative'>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]'>
                            WordPress CMS
                        </h2>
                        <p className='md:text-2xl text-base text-title_color mb-9 max-w-[460px]'>
                            Fast, secure and scalable websites and e-commerce solutions custom built on the world’s favourite CMS, WordPress.
                        </p>
                        <ul className='flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0'>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    WordPress CMS Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    WooCommerce Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    Custom API Integrations
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src="/images/wordpress.png" alt='wordpress' width={886} height={746} className='md:ml-auto' />
                    </div>
                </div>
                <Image src="/images/svgs/blocks2.svg" alt='blocks2.svg' width={426} height={286} className='absolute 2xl:left-0 lg:left-[-131px] left-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
            </section>
            <section className='bg-bs_secondary md:py-[12.5rem] py-20'>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div>
                        <h2 className='md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]'>
                            Hosting & Support
                        </h2>
                        <p className='md:text-2xl text-base text-title_color mb-9 max-w-[460px]'>
                            Stress free and proactive WordPress support, maintenance and web hosting, all delivered by our friendly UK staff.
                        </p>
                        <ul className='flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0'>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    WordPress Web Hosting
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                                    WordPress Maintenance
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image src="/images/hosting.png" alt='hosting' width={993} height={669} className='md:ml-auto' />
                    </div>
                </div>
            </section>
            <section className='bg-title_color md:py-[12.5rem] py-20 relative'>
                <div className='container mx-auto px-4'>
                    <h2 className='md:text-5xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-12 text-center'>
                    Work I'm Proud Of
                    </h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                        {allWorks.slice(0, 2).map((work, idx) => (
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
                </div>
            </section>
            <Testimonial />
            <CTA />
        </main>
        </>
    )
}
