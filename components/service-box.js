import Image from 'next/image';

export default function Service(props) {
  return (
    <div>
      <div className=''>
        <div className="">
          <h2 className="md:text-3xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-8">
            {props.title}
          </h2>
          <p className="md:text-lg text-lg font-normal text-title_color">
            {props.content}
          </p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='flex gap-1.5 items-center'>
              <Image src="/images/svgs/hexa5.svg" alt='hexa' width={8} height={8} />
              <span className='md:text-xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                Web Discovery
              </span>
            </li>
            <li className='flex gap-1.5 items-center'>
              <Image src="/images/svgs/hexa5.svg" alt='hexa' width={8} height={8} />
              <span className='md:text-xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                Web Design
              </span>
            </li>
            <li className='flex gap-1.5 items-center'>
              <Image src="/images/svgs/hexa5.svg" alt='hexa' width={8} height={8} />
              <span className='md:text-xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300'>
                Branding & Identity
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
