import Image from 'next/image';
import React from 'react';
import Image_Tedd from '../public/images/tedd.png';
import Image_Pay from '../public/images/pay.png';
import Image_Jorda from '../public/images/jorda.png';
import Image_Drnikesh from '../public/images/drnikesh.png';
import Image_Ateze from '../public/images/ateze.png';
import Image_Arbish from '../public/images/arbish.png';

export default function Clients() {
    return (
        <div className="grid md:grid-cols-3 grid-cols-2">

            <div className="w-full flex items-center justify-center md:p-8 p-6 border-r border-b border-slate-200">
                <Image
                    src={Image_Tedd}
                    alt=""
                    className="hover:animate-servicesIcon scale-[.5]"
                />
            </div>
            <div className="w-full flex items-center justify-center md:p-8 p-6 md:border-r border-b border-slate-200 ">
                <Image
                    src={Image_Pay}
                    alt=""
                    className="hover:animate-servicesIcon scale-[.5]"
                />
            </div>
            <div className="w-full flex items-center justify-center md:p-8 p-6 border-b md:border-r-0 border-r border-slate-200 ">
                <Image
                    src={Image_Jorda}
                    alt=""
                    className="hover:animate-servicesIcon scale-[.5]"
                />
            </div>
            <div className="w-full flex items-center justify-center md:p-8 p-6 md:border-r md:border-b-0 border-b border-slate-200 ">
                <Image
                    src={Image_Drnikesh}
                    alt=""
                    className="hover:animate-servicesIcon scale-[.5]"
                />
            </div>
            <div className="w-full flex items-center justify-center md:p-8 p-6 border-r border-slate-200 ">
                <Image
                    src={Image_Ateze}
                    alt=""
                    className="hover:animate-servicesIcon scale-[.5]"
                />
            </div>
            <div className="w-full flex items-center justify-center md:p-8 p-6">
                <Image
                    src={Image_Arbish}
                    alt=""
                    className="hover:animate-servicesIcon scale-[.5]"
                />
            </div>
        </div>
    )
}
