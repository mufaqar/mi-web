import { AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineSkype } from 'react-icons/ai';


export default function Footer() {
    return (
        <>
            <footer className='bg-gray-200 py-8'>
                <div className='container mx-auto grid md:grid-cols-3 items-center'>
                    <div className='w-full flex px-4 items-center md:justify-start justify-center'>
                        <p className='flex items-center text-base tracking-wider font-normal text-slate-500 my-2 space-x-4'>Made With <AiOutlineHeart className='text-customPink stroke-0' /> By Mufaqar.</p>
                    </div>
                    <div className='w-full flex px-4 items-center md:justify-start justify-center'>
                        <p className='flex items-center text-base tracking-wider font-normal text-slate-500 my-2'>© 2010 - 2021 All Rights Reserved</p>
                    </div>
                    <div className='w-full flex px-4 items-center md:justify-end justify-center'>
                        <ul className='flex my-2 space-x-5'>
                            <li className=''><Link href="#"><FaFacebookF className='text-slate-500 hover:text-customPink transition-all duration-200' /></Link></li>
                            <li className=''><Link href="#"><IoLogoTwitter className='text-slate-500 hover:text-customPink transition-all duration-200' /></Link></li>
                            <li className=''><Link href="#"><FaLinkedinIn className='text-slate-500 hover:text-customPink transition-all duration-200' /></Link></li>
                            <li className=''><Link href="#"><AiOutlineSkype className='text-slate-500 hover:text-customPink transition-all duration-200' /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
