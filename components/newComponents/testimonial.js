import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
    return (
        <section className='bg-title_color md:py-[12.5rem] py-20 relative'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-row md:gap-10 gap-5 items-start max-w-[880px] mx-auto '>
                    <Image src="/images/svgs/qout.svg" alt='qout' width={123} height={98} className='-mt-10 md:w-full w-[70px]' />
                    <div className='md:mb-28 mb-10'>
                        <p className='md:text-2xl text-xl font-normal italic text-white mb-9' >
                            I’ve worked with Hexagon Webworks since 2015 and they have been fantastic. They are super responsive, essential when you are trading from your website, but were equally patient with us as we were evolving our requirements. I would highly recommend them to anyone looking to take their website to the next level and have someone trustworthy manage it.
                        </p>
                        <p className='md:text-[1.375rem] md:leading-4 text-lg font-normal text-white'>
                            <strong> Dr. Michael Fiebig, Absolute Antibody,</strong> Chief Scientific Officer
                        </p>
                    </div>
                </div>
                <Image src="/images/svgs/blocks3.svg" alt='blocks3.svg' width={426} height={286} className='absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
            </div>
        </section>

    )
}

export default Testimonial