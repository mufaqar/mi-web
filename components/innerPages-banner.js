import Image from "next/image";

export default function InnerPages_Banner({ subtitle, title }) {
  return (
    <section className='relative md:py-[12.5rem] py-20'>
    <div className='container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center'>
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-6xl md:leading-[1] text-4xl font-bold text-[#1F2B37] mb-4'>
                {title}
            </h1>
            <p className='md:text-2xl text-lg font-normal text-[#212121] mb-6'>
                {subtitle}
            </p>
        </div>
        <div className='md:w-1/2 w-full'>
            {/* <Image src="/images/svgs/blocks.svg" alt='new-banner.png' width={426} height={286} /> */}
        </div>
    </div>
    <Image src="/images/svgs/blocks.svg" alt='blocks.svg' width={426} height={286} className='absolute 2xl:left-0 lg:left-[-131px] left-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
</section>
  )
}
