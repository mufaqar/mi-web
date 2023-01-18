import React from 'react'

export default function TimelineBox({ Start_Date, End_Date, Company, Com_Loc, Position, Info }) {
    return (
        <>
            <div className='md:w-[1110px] md:h-[220px] h-full mx-auto flex md:flex-row flex-col shadow-3xl my-7
            before:content-[" "] before:w-4 before:h-4 before:rounded-full before:bg-[#0d47a1] before:border-double before:border-4
             before:border-white before:absolute before:translate-x-[-2.05rem] before:translate-y-28 md:before:block before:hidden'>
                <div className='md:w-1/4 w-full bg-customPink p-4'>
                    <div className='mb-3'>
                        <div className='flex justify-between'>
                            <p className='flex flex-col mb-2'>
                                <span className='text-white font-medium text-sm'>From </span>
                                <span className='text-white text-base font-medium'>{Start_Date}</span>
                            </p>
                            <p className='flex flex-col'>
                                <span className='text-white font-medium text-sm'>To </span>
                                <span className='text-white text-base font-medium'>{End_Date}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold tracking-tighter text-white mb-2">{Company}</h5>
                        <p className='text-white font-medium text-sm'>{Com_Loc}</p>
                    </div>
                </div>
                <div className='md:w-3/4 w-full bg-white p-4'>
                    <h5 className="text-xl font-bold tracking-tighter text-black mb-2">{Position}</h5>
                    <p className='text-base text-slate-700'>{Info}</p>
                </div>
            </div>
        </>
    )
}
