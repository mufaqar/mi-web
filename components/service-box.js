import { motion, Variant } from 'framer-motion'
import { scaleUp } from "../const/animation";
import Image from 'next/image';

export default function Service(props) {
  return (
    <div>
      <div className=''>
        <span className='text-7xl w-fit p-2 block border-2 border-white group-hover:border-2 group-hover:border-customPink duration-300
          bg-customPink group-hover:bg-white rounded-full mb-4 text-white group-hover:text-customPink'>
          {props.icon}
        </span>
        <div className="">
          <h2 className="md:text-4xl text-2xl font-semibold text-white underline decoration-bs_link_color mb-8">
            {props.title}
          </h2>
          <p className="md:text-2xl text-lg font-normal text-white">
            {props.content}
          </p>
          <ul className='flex flex-col gap-2 mt-5'>
            <li className='flex gap-1.5 items-center'>
              <Image src="/images/svgs/hexa5.svg" alt='hexa' width={10} height={10} />
              <span className='md:text-2xl text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                Web Discovery
              </span>
            </li>
            <li className='flex gap-1.5 items-center'>
              <Image src="/images/svgs/hexa5.svg" alt='hexa' width={10} height={10} />
              <span className='md:text-2xl text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                Web Design
              </span>
            </li>
            <li className='flex gap-1.5 items-center'>
              <Image src="/images/svgs/hexa5.svg" alt='hexa' width={10} height={10} />
              <span className='md:text-2xl text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                Branding & Identity
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
