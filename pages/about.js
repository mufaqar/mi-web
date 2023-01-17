import InnerPages_Banner from '../components/innerPages-banner'
import Testimonial from '../components/testimonial'

export default function About() {
    return (
        <>
            <InnerPages_Banner title="Mufaqar" />

            <section className="py-24 px-4">
                <div className="md:w-[1170px] w-full mx-auto flex md:flex-row flex-col items-center md:space-x-12">
                    <div className="md:w-1/2 w-full">
                        <h3 className='text-2xl font-bold uppercase tracking-tighter text-black mb-5'>About Me</h3>
                        <p className="text-base text-slate-500 mb-2">I build Websites that are fast, easy to manage, secure & convert your visitors into customers.</p>
                        <p className="text-base text-slate-500 mb-2">* Backend - PHP, WordPress, Strapi , Contentful, Shopify </p>
                        <p className="text-base text-slate-500 mb-2">* Frontend - ReactJS, Typescript, NextJS , Gatsby , GraphQL and TailwindCss </p>
                        <p className="text-base text-slate-500 mb-7">* JavaScript, TypeScript, ES6, Twitter Bootstrap,</p>
                        <p className="text-base text-slate-500 mb-2">Design and develop Custom WordPress websites, web apps, and WooCommerce e-Commerce solutions. ,</p>
                        <p className="text-base text-slate-500 mb-2">• WordPress Theme/Plugin Development/Customization</p>
                        <p className="text-base text-slate-500 mb-2">• WordPress Security & Maintenance/Hack Recovery.</p>
                        <p className="text-base text-slate-500 mb-2">• WooCommerce, Multi-Vendor, Booking System.</p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h3 className='text-2xl font-bold uppercase tracking-tighter text-black mb-5'>SKILLS</h3>
                        <ul className="flex flex-col md:space-y-4 ">
                            <li className="font-medium text-sm uppercase flex flex-col space-y-3 items-center">
                                <p className="w-full">WORDPRESS DEVELOPMENT</p>
                                <div className="w-full">
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '95%' }}>
                                            95%
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="font-medium text-sm uppercase flex flex-col space-y-3 items-center">
                                <p className="w-full">PHP</p>
                                <div className="w-full">
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '92%' }}>
                                            92%
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="font-medium text-sm uppercase flex flex-col space-y-3 items-center">
                                <p className="w-full">NEXTJS / TAILWINDCSS</p>
                                <div className="w-full">
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '92%' }}>
                                            92%
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="font-medium text-sm uppercase flex flex-col space-y-3 items-center">
                                <p className="w-full">HTML CSS</p>
                                <div className="w-full">
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '90%' }}>
                                            90%
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="font-medium text-sm uppercase flex flex-col space-y-3 items-center">
                                <p className="w-full">WEB DEVELOPMENT</p>
                                <div className="w-full">
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-customPink text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '88%' }}>
                                            88%
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-16 px-4'>
                <Testimonial />
            </section>
        </>
    )
}
