import Image from 'next/image'
import React from 'react'

const Workbox = ({ cstm_class }) => {
    return (
        <div className='group'>
            <Image src="/images/ariens.webp" alt='ariens' width={566} height={336} className='object-cover w-full h-full' />
            <div className={`${cstm_class} md:px-12 md:py-8 p-8 md:w-11/12 mx-auto relative md:min-h-[300px] overflow-hidden md:mt-[-170px] mt-0`}>
                <Image src="/images/svgs/hexa.svg" alt='hexa' width={502} height={451} className='absolute scale-100 object-cover -left-40 bottom-12 group-hover:scale-[2.5] transition-all duration-1000 opacity-20' />
                <div className='relative z-10'>
                    <h3 className='text-2xl font-normal text-white mb-5 underline decoration-white group-hover:decoration-bs_btn_bg transition-all duration-1000'>
                        Ariens
                    </h3>
                    <p className='md:text-4xl text-2xl font-semibold text-white max-w-[380px]'>
                        WordPress multisite for Ariens EMEA markets
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workbox