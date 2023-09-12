import Image from "next/image";
import Link from "next/link";
import InnerPages_Banner from "../../components/innerPages-banner";
import { useRouter } from "next/router";
import { Works_Data } from "../const/works";

export default function Slug() {
    const router = useRouter()
    const Slug_meta = router.query.slug
    const res = Works_Data.find(item => item.title === Slug_meta)
    console.log(res)
    return (
        <>
            <InnerPages_Banner sub="Our best work." title={res?.title} />
            <section className="py-12 px-8 relative w-full h-screen">
                <Image
                    src={res?.feature}
                    alt={res?.feature}
                    width={1920}
                    height={768}
                    className="mx-auto" />
            </section>
            <section className="py-12 px-8">
                <div className="md:max-w-[1140px] mx-auto flex md:flex-row flex-col ">
                    <div className="md:w-1/2 w-full md:p-7 p-4">
                        <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">The Challenge</h2>
                        <p className="text-xl text-slate-500 mb-5">Warburton Building Services is an Oxfordshire company specialising in installation and maintenance of mechanical & electrical services, and they approached Electric Studio needing a new easy to manage and up to date website.</p>
                        <p className="text-xl text-slate-500 mb-5">With their old website not being mobile friendly and looking tired, they challenged Electric Studio to fully redesign and rebuild it.</p>
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
                    <div className="md:w-1/2 w-full relative h-screen">
                        <Image
                            src="/images/b.png"
                            alt=""
                            layout="fill"
                            objectFit="cover" />
                    </div>
                </div>
            </section>
            <section className="py-12 px-8">
                {res?.gallery.map((item, id) => {
                    return <Image key={id}
                        src={item?.img}
                        alt={item?.img}
                        width={1920}
                        height={768}
                        className="mx-auto" />
                })}
            </section>
            <section className="py-24 px-8">
                <div className="md:max-w-[1140px] mx-auto">
                    <h2 className="md:text-5xl text-4xl leading-7 font-bold tracking-wide mb-5">The Solution</h2>
                    <p className="text-xl text-slate-500 mb-5">Warburton Building Services is an Oxfordshire company specialising in installation and maintenance of mechanical & electrical services, and they approached Electric Studio needing a new easy to manage and up to date website.</p>
                    <p className="text-xl text-slate-500 mb-5">With their old website not being mobile friendly and looking tired, they challenged Electric Studio to fully redesign and rebuild it.</p>

                    <div className="mb-7">
                        <ul>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Responsive Web Design</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Custom WordPress theme</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Technical SEO</p>
                            </li>
                            <li>
                                <p className="text-xl text-slate-700 font-bold">Optimised website admin</p>
                            </li>
                        </ul>
                    </div>
                    <p className="text-xl text-slate-500 mb-5">Ongoing services include WordPress Web Hosting and ongoing improvements.</p>
                </div>
            </section>
            <section className="py-12 px-8 relative w-[95%] h-screen mx-auto mb-10">
                <Image
                    src="/images/d.png"
                    alt=""
                    layout="fill"
                    objectFit="cover" />
            </section>

            <section className="py-12 px-8 relative w-[95%] h-screen mx-auto mb-14">
                <Image
                    src="/images/e.png"
                    alt=""
                    layout="fill"
                    objectFit="cover" />
            </section>
        </>
    )
}
