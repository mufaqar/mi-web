import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Head from 'next/head'




function MobileNav({ open, setOpen }) {

    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[#0d47a1] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md "> {/*logo container*/}
                <Link href="/" className="text-xl font-semibold">
                    <Image src="/images/logo-white.png"
                        alt="logo" width={140} height={40} />
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
                    className="text-sm font-medium my-4 uppercase text-white">
                    Home
                </Link>
                <Link href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
                    className="text-sm font-normal my-4 uppercase text-white">
                    About Me
                </Link>
                <Link href="/works" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
                    className="text-sm font-normal my-4 uppercase text-white">
                    Works
                </Link>
                <Link href="/services" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
                    className="text-sm font-normal my-4 uppercase text-white">
                    Services
                </Link>
                <Link href="/cv" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
                    className="text-sm font-normal my-4 uppercase text-white">
                    CV
                </Link>
                <Link href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
                    className="text-sm font-normal my-4 uppercase text-white">
                    Contact Me
                </Link>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 600) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    if (typeof window !== "undefined") {

        window.addEventListener('scroll', changeBackground);

    }
    const router = useRouter();
    return (
        <>
        <Head>
        <title>Experienced Full Stack WordPress and ReactJS Frontend Developer | Mufaqar</title>
      </Head>
        <nav className={`drop-shadow-md px-4 py-4 h-16 items-center fixed left-0 right-0 z-50 
        ${router.pathname === '/' ? navbar ? 'bg-white' : 'bg-rgb(255 255 255 /0)' : 'bg-white' }`}
        >
            <div className='container mx-auto flex filter'>
                <MobileNav open={open} setOpen={setOpen} />
                <div className="w-3/12 flex items-center">
                    <Link href="/" className="text-2xl font-semibold">
                    {router.pathname === '/' ? navbar ? (
                                <Image src="/images/logo-black.png"
                                alt="logo" width={140} height={40}>
                            </Image>):
                                (
                                    <Image src="/images/logo-white.png"
                                    alt="logo" width={140} height={40}>
                                </Image> 
                                ):
                                (
                                    <Image src="/images/logo-black.png"
                                    alt="logo" width={140} height={40}>
                                </Image> 
                                )}
                        </Link>
                </div>
                <div className="w-9/12 flex justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full ${router.pathname === '/' ? navbar ? 'bg-black' : 'bg-white' : 'bg-black' } rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full ${router.pathname === '/' ? navbar ? 'bg-black' : 'bg-white' : 'bg-black' } rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full ${router.pathname === '/' ? navbar ? 'bg-black' : 'bg-white' : 'bg-black' } rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    <div className={`hidden md:flex uppercase text-sm space-x-4 ${router.pathname === '/' ? navbar ? 'text-black' : 'text-white' : 'text-black' }`}>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About Me
                        </Link>
                        <Link href="/works">
                            Works
                        </Link>
                        <Link href="/services">
                            Services
                        </Link>
                        <Link href="/cv">
                            CV
                        </Link>
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}