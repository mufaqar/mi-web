import React from 'react'

export default function TimelineBox() {
    return (
        <>
            <div className='md:w-[1110px] mx-auto flex md:flex-row flex-col shadow-3xl my-7
            before:content-[" "] before:w-4 before:h-4 before:rounded-full before:bg-black before:border-double before:border-4
             before:border-white before:absolute before:translate-x-[-2.05rem] before:translate-y-28 md:before:block before:hidden'>
                <div className='md:w-1/4 w-full bg-customPink p-10'>
                    <div className='mb-3'>
                        <div className='flex justify-between'>
                            <p className='flex flex-col mb-2'>
                                <span className='text-slate-300 font-medium text-sm'>From </span>
                                <span className='text-white text-base font-medium'>Sep 2012</span>
                            </p>
                            <p className='flex flex-col'>
                                <span className='text-slate-300 font-medium text-sm'>To </span>
                                <span className='text-white text-base font-medium'>Present</span>
                            </p>
                        </div>
                        <p className='text-slate-300 font-medium text-sm'>(3 Years 9 Months)</p>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold tracking-tighter text-white mb-2">Okler Themes</h5>
                        <p className='text-slate-300 font-medium text-sm'>Greater New York</p>
                    </div>
                </div>
                <div className='md:w-3/4 w-full bg-white p-10'>
                    <h5 className="text-xl font-bold tracking-tighter text-black mb-2">Chief Product Officer</h5>
                    <p className='text-base text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu.</p>
                </div>
            </div>
        </>
    )
}
