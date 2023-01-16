import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import Link from "next/dist/client/link";

export default function CV_fixNav() {
  return (
    <>
        <div className="w-16 bg-slate-400 fixed top-[40%] shadow-2xl md:block hidden">
                <ul>
                    <li >
                        <Link href="#about">
                            <div className="text-white text-4xl p-3 bg-customPink hover:bg-white hover:text-black flex items-center group"><AiOutlineHome />
                            <div className="shadow-2xl  w-32 h-14 absolute bg-white left-20 hidden group-hover:block duration-700">
                                <p className="relative before:content-[''] before:w-4 before:h-4 before:bg-white before:absolute before:-left-2 before:top-5 before:transform before:rotate-45
                                text-base font-bold text-black py-3 px-4 uppercase">About me</p>
                            </div>
                            </div>
                        </Link>
                    </li>
                    <li >
                        <Link href="#experience">
                            <div className="text-white text-4xl p-3 bg-customPink hover:bg-white hover:text-black flex items-center group"><AiOutlineEye />
                            <div className="shadow-2xl w-32 h-14 absolute bg-white left-20 hidden group-hover:block duration-700">
                                <p className="relative before:content-[''] before:w-5 before:h-5 before:bg-white before:absolute before:-left-2 before:top-5 before:transform before:rotate-45
                                text-base font-bold text-black py-3 px-4 uppercase">Experience</p>
                            </div>
                            </div>
                        </Link>
                    </li>
                    <li >
                        <Link href="#education">
                            <div className="text-white text-4xl p-3 bg-customPink hover:bg-white hover:text-black flex items-center group"><BiBriefcase />
                            <div className="shadow-2xl w-32 h-14 absolute bg-white left-20 hidden group-hover:block duration-700">
                                <p className="relative before:content-[''] before:w-5 before:h-5 before:bg-white before:absolute before:-left-2 before:top-5 before:transform before:rotate-45
                                text-base font-bold text-black py-3 px-4 uppercase">Education</p>
                            </div>
                            </div>
                        </Link>
                    </li>
                    <li >
                        <Link href="#skills">
                            <div className="text-white text-4xl p-3 bg-customPink hover:bg-white hover:text-black flex items-center group"><GiGraduateCap />
                            <div className="shadow-2xl w-32 h-14 absolute bg-white left-20 hidden group-hover:block duration-700">
                                <p className="relative before:content-[''] before:w-5 before:h-5 before:bg-white before:absolute before:-left-2 before:top-5 before:transform before:rotate-45
                                text-base font-bold text-black py-3 px-4 uppercase">Skills</p>
                            </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
    </>
  )
}
