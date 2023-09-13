import Image from "next/image";
import Link from "next/link";
import InnerPages_Banner from "../../components/innerPages-banner";
import { useRouter } from "next/router";
import { Works_Data } from "../../const/works";

export default function Slug() {
    const router = useRouter()
    const Slug_meta = router.query.slug
    const res = Works_Data.find(item => item.slug === Slug_meta)
    // console.log(res)
    return (
        <>
            <InnerPages_Banner sub="Our best work." title={res?.title} />
            <section className="">
                <Image
                    src={res?.feature}
                    alt="img"
                    width={1920}
                    height={768}
                    className="mx-auto w-full" />
            </section>
            <section className="py-12 px-8">
                <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col items-center">
                    <div className="md:w-1/2 w-full md:p-7 p-4">
                        <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">The Challenge</h2>
                        <p className="text-xl text-slate-500 mb-5">As a web developer, the task is to modernize {res?.title}'s aging web platform in just six months. The primary objectives include enhancing user experience, ensuring mobile responsiveness, optimizing performance, improving security, implementing </p>
                        <p className="text-xl text-slate-500 mb-5">SEO strategies, ensuring scalability, developing a user-friendly content management system, integrating third-party tools, conducting thorough testing, and providing comprehensive documentation.</p>
                        <div className="mb-8">
                            <p className="text-sm text-slate-700 font-bold">VISIT</p>
                            <Link href={`${res?.link}`} >
                                <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                                    {res?.link}
                                </span>
                            </Link>
                        </div>
                        <div>
                            <p className="text-sm text-slate-700 font-bold">SERVICES</p>
                            <ul>
                                {res?.features.map((item, id) => {
                                    return <li key={id}>
                                        <Link href="#" >
                                            <span className="underline hover:no-underline text-xl text-slate-700 font-bold">
                                                {item?.name}
                                            </span>
                                        </Link>
                                    </li>
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        {res?.gallery.slice(1, 2).map((item, id) => {
                            return <Image key={id}
                                src={item?.img}
                                alt="img"
                                width={550}
                                height={750}
                                className="w-full mx-auto"
                            />
                        })}
                    </div>
                </div>
            </section>
            <section className="py-14">
                <div className="max-w-[1140px] px-4 mx-auto">
                    {res?.gallery.slice(0, 1).map((item, id) => {
                        return <Image key={id}
                            src={item?.img}
                            alt="img"
                            width={1920}
                            height={768}
                            className="mx-auto" />
                    })}
                </div>
            </section>
            <section className="py-24">
                <div className="md:max-w-[1140px] px-4 mx-auto">
                    <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">The Solution</h2>
                    <p className="text-xl text-slate-500 mb-5">This project is divided into distinct phases. The first month will focus on planning and design, followed by three months of development. One month will be dedicated to testing and quality assurance, ensuring a bug-free and high-performing website. </p>
                    <p className="text-xl text-slate-500 mb-5">In the final month, we will deploy the revamped website and provide comprehensive documentation, including training for {res?.title}'s team.</p>
                    <div className="mb-7">
                        <ul>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">User-Centric Design</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Mobile Responsiveness</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Technical SEO</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Performance Optimization</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">User-Friendly CMS</p>
                            </li>

                            
                        </ul>
                    </div>
                    <p className="text-xl text-slate-500 mb-5"> Provide detailed documentation for the website's codebase and custom functionalities, facilitating smooth handover and future maintenance.</p>
                </div>
            </section>
            <section className="py-14">
                <div className="max-w-[1140px] px-4 mx-auto">
                    <Image
                        src={res?.feature}
                        alt="img"
                        width={1920}
                        height={768}
                        className="mx-auto" />
                </div>
            </section>
            <section className="py-14 bg-[#f3f5f5]">
                <div className="max-w-[1140px] px-4 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5">
                    {res?.gallery.slice(1).map((item, id) => {
                        return <Image key={id}
                            src={item?.img}
                            alt="img"
                            width={550}
                            height={750}
                            className="mx-auto" />
                    })}
                </div>
            </section>
        </>
    )
}
