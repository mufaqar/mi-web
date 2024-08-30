import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className='bg-bs_info md:py-[12.5rem] py-20 '>
            <div className='container max-w-[720px] mx-auto px-4'>
                <h2 className='md:text-4xl text-4xl font-semibold text-title_color underline decoration-bs_link_color mb-12 text-center'>
                    Let's talk about your project
                </h2>
                <p className='md:text-2xl text-lg font-normal text-title_color text-center mb-9'>
                    If you have a project or collaboration that you would like to discuss with us, or you’re curious to hear more about how we can help you, then we look forward to hearing from you.
                </p>
                <ul className='flex md:flex-row flex-col md:gap-10 gap-2 items-center justify-center'>
                    <li>
                        <Link href="tel:+923026006280" target='_blank' className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                            +92 302-6006-280
                        </Link>
                    </li>
                    <li>
                        <Link href="mailto:info@mufaqar.com" target='_blank' className='md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                            info@mufaqar.com
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default CTA