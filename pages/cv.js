import { BsHeadphones } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsCloudDownload } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import Link from "next/dist/client/link";
import TimelineBox from "../components/timelineBox";
import CV_fixNav from "../components/cv-fixNav";
import Image from "next/image";
import Profile_Pic from '../public/images/me.jpg';

export default function CV() {
    return (
        <>
            <section id="about" className="md:pt-24 pb-16 bg-[#0d47a1]">
                <div className='md:w-[1140px] mx-auto flex md:flex-row flex-col md:space-y-0 space-y-8 items-center'>
                    <div className="md:w-1/3 w-full flex justify-center">
                        <div className="border-4 border-white md:mb-[-9.8rem]">
                            <Image src={Profile_Pic}
                                alt=""
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full md:pl-11 px-4 md:text-left text-center">
                        <h2 className='md:text-6xl text-4xl font-bold text-white mb-4'>
                            Mufaqar Islam
                        </h2>
                        <h6 className='md:text-2xl text-xl font-medium mb-4 text-white'>Full Stack Web Developer | WordPress | React | NextJs | Tailwindcss</h6>
                        <p className='text-sm font-medium tracking-widest text-white'>GREATER NEW YORK AREA</p>
                        <p className='text-sm font-medium tracking-widest mb-5 text-white'>INFORMATION TECHNOLOGY & SERVICES</p>
                        <p className='text-sm font-medium tracking-widest text-white'>PREVIOUS: FRONT-END DEVELOPER AT PORTO</p>
                        <p className='text-sm font-medium tracking-widest text-white'>EDUCATION: PORTO SCHOOL</p>
                    </div>
                </div>
            </section>

            <section className="py-8 border-b border-black/30">
                <div className="md:w-[1140px] mx-auto flex md:flex-row flex-col items-center">
                    <div className=" w-1/3">

                    </div>
                    <div className="md:w-2/3 w-full flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-between">
                        <div>
                            <Link href="tel:+923026006280" target="_blank" rel="nofollow">
                                <span className="flex space-x-2 items-center group">
                                    <BsHeadphones className="md:text-3xl text-2xl text-customPink group-hover:text-black" />
                                    <span className="text-xl">Contact Information</span>
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link href="mailto:mufaqar@gmail.com" target="_blank" rel="nofollow">
                                <span className="flex space-x-2 items-center group">
                                    <BsEnvelopeOpen className="md:text-3xl text-2xl text-customPink group-hover:text-black" />
                                    <span className="text-xl">Send Message</span>
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link href="Resume.pdf">
                                <span className="flex space-x-2 items-center group">
                                    <BsCloudDownload className="md:text-3xl text-2xl text-customPink group-hover:text-black" />
                                    <span className="text-xl">Download Resume</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="md:w-[1140px] mx-auto grid md:grid-cols-2">
                    <div className="md:p-8 p-5">
                        <h3 className='text-2xl font-bold uppercase tracking-tighter text-black mb-5'>About me</h3>
                        <p className="text-base text-slate-700">ReactJs Developer with 10+ years of extensive Frontend and
                            Backend experience. React, Next Js | Bootstrap, and Tailwind Css
                            Familiarity with modern front-end build pipelines and tools.</p>
                    </div>
                    <div className="md:p-8 p-5">
                        <div className="p-8 shadow-xl transform hover:-translate-y-3 duration-500">
                            <h5 className="text-xl font-bold tracking-tighter text-black mb-3">Personal Details</h5>
                            <div className="flex md:flex-row flex-col justify-between">
                                <ul className="flex flex-col md:space-y-4">
                                    <li className="font-medium text-sm uppercase flex items-center space-x-5">
                                        <span>PHONE: </span>
                                        <Link href="tel:+923026006280" target="_blank" rel="nofollow">
                                            <span className="text-slate-500">(+92) 302 -6006280</span>
                                        </Link>
                                    </li>
                                    <li className="font-medium text-sm uppercase flex items-center space-x-5">
                                        <span>NATIONALITY: </span> <span className="text-slate-500"> PAKISTAN</span>
                                    </li>

                                </ul>
                                <ul className="flex flex-col md:space-y-4">
                                    <li className="font-medium text-sm uppercase flex items-center space-x-5">
                                        <span>SKYPE: </span>
                                        <Link href="skype:mufaqar" target="_blank" rel="nofollow">
                                            <span className="text-slate-500"> skype:mufaqar</span>
                                        </Link>
                                    </li>
                                    <li className="font-medium text-sm uppercase flex items-center space-x-5">
                                        <span>EMAIL: </span>
                                        <Link href="mailto:mufaqar@gmail.com" target="_blank" rel="nofollow">
                                            <span className="text-slate-500">mufaqar@gmail.com</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience" className="py-16 px-4 bg-gray-100">
                <div className="md:w-[1140px] mx-auto ">
                    <h3 className='text-2xl font-bold uppercase tracking-tighter text-black mb-5'>EXPERIENCE</h3>
                    <div className="relative">
                        <TimelineBox
                            Start_Date="July 2016"
                            End_Date="PRESENT"
                            Company="SoftGens"
                            Com_Loc="Lahore"
                            Position="ReactJs Frontend Developer"
                            Info="Developed responsive Web applications with NextJs
                                Tanslating designs and wireframes into high quality code
                                Work with Headless CMS like Sanity.io , Strapi and WordPress
                                Migrated Website from WordPress to ReactJs
                                Develop a flexible and well-structured front-end architecture, along with
                                the APIs to support it.
                                Identifies potential problems within the codebase and maintains existing
                                React systems, including fixing bugs.
                                Assisted migrate front and backend to GraphQl
                                Hosted Application on Vercel , Netlify and others.
                                Collaborated in an agile environment and cross functional team to build
                                best-in-class software"
                        />
                        <TimelineBox
                            Start_Date="March 2012"
                            End_Date="May 2016"
                            Company="SWS"
                            Com_Loc="Lahore"
                            Position="WordPress Developer"
                            Info="WordPress Developer ( Theme Development )
                            Frontend Development ( PSD to HTML )
                            Integrated social media tools and SDKs into various websites
                            "
                        />
                        <TimelineBox
                            Start_Date="Jan 2010"
                            End_Date="Jan 2012"
                            Company="WebRiver"
                            Com_Loc="Lahore"
                            Position="PHP Web Developer"
                            Info="Developed PHP based Websites, Customized Frontend and Integrate with
                            database backend."
                        />
                        <div className="h-[485px] w-1 bg-black absolute inset-0 -left-3 top-[125px] md:block hidden"></div>
                    </div>
                </div>
            </section>

            <section id="education" className="py-16 px-4">
                <div className="md:w-[1140px] mx-auto ">
                    <h3 className='text-2xl font-bold uppercase tracking-tighter text-black mb-5'>EDUCATION</h3>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="shadow-xl p-8 transform hover:-translate-y-3 duration-500 ">
                            <GiGraduateCap className="text-3xl text-customPink" />
                            <h5 className="text-xl font-bold tracking-tighter text-black mb-2">PU Lahore</h5>
                            <p className="font-medium text-sm text-slate-500">Bachelor in computer Science</p>
                            <p className='text-customPink text-base font-bold'>Jun 2006 - Mar 2010</p>
                        </div>
                        <div className="shadow-xl p-8 transform hover:-translate-y-3 duration-500">
                            <GiGraduateCap className="text-3xl text-customPink" />
                            <h5 className="text-xl font-bold tracking-tighter text-black mb-2">EVs Lahore</h5>
                            <p className="font-medium text-sm text-slate-500">Certification in Web Development</p>
                            <p className='text-customPink text-base font-bold'>2004 -2006</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="py-16 px-4">
                <div className="md:w-[1140px] mx-auto flex md:flex-row flex-col items-center">
                    <div className="p-8 md:w-3/4 w-full">
                        <h3 className='text-2xl font-bold uppercase tracking-tighter text-black mb-5'>SKILLS & LANGUAGE</h3>
                        <div className="flex md:flex-row flex-col md:space-x-5">
                            <ul className="flex flex-col md:space-y-4 md:w-1/2 w-full">
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">PHP </p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '92%' }}> 92%</div>
                                    </div>
                                    </div>
                                </li>
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">MySql </p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">Rest API</p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">JavaScript </p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="flex flex-col md:space-y-4 md:w-1/2 w-full">
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">jQuery </p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">ReactJs</p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">NextJs</p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                                <li className="font-medium text-sm uppercase flex md:flex-row flex-col items-center">
                                    <p className="md:w-1/4 w-full">Redux </p>
                                    <div className="md:w-3/4 w-full"><div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{ width: '30%' }}> 45%</div>
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-8 shadow-xl md:w-1/4 w-full transform hover:-translate-y-3 duration-500">
                        <h5 className="text-xl font-bold tracking-tighter text-black mb-3">Languages</h5>
                        <ul className="flex flex-col">
                            <li className="font-medium text-sm uppercase flex items-center space-x-5">
                                <span>ENGLISH </span>
                            </li>
                            <li className="font-medium text-sm uppercase flex items-center space-x-5">
                                <span>URDU </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <CV_fixNav />
        </>
    )
}
