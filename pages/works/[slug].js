import Image from "next/image";
import Link from "next/link";
import InnerPages_Banner from "../../components/innerPages-banner";
import { useRouter } from "next/router";
import { Categories } from "../../const/works";

export default function Slug() {
    const router = useRouter();
    const { slug } = router.query;

    // Flatten categories to find the specific work by slug
    const allWorks = Categories.flatMap(category => category.works);
    const res = allWorks.find(work => work.slug === slug);

    // Redirect to 404 if the work is not found
    if (!res) {
        if (router.isReady) {
        }
        return <section className='md:py-[12.5rem] py-20'>
            <div className='container mx-auto px-4'>
                <p className='md:text-2xl text-base text-title_color mb-9 text-center'>
                    This page could not be found.
                </p>
            </div>
        </section>;
    }
    return (
        <>
            <InnerPages_Banner sub="Our best work." title={res?.title} />
            <section className="bg-bs_secondary md:py-[12.5rem] py-20 relative">
                <div className="container px-4 mx-auto">
                    <Image
                        src={res?.feature}
                        alt="img"
                        width={1920}
                        height={768}
                        className="mx-auto w-full" />
                </div>
            </section>
            <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
                <div className="container px-4 mx-auto flex md:flex-row flex-col items-center">
                    <div className="md:w-1/2 w-full md:p-7 p-4">
                        <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
                            The Challenge
                        </h2>
                        <p className="md:text-2xl text-base text-title_color mb-9">As a web developer, the task is to modernize {res?.title}'s aging web platform in just six months. The primary objectives include enhancing user experience, ensuring mobile responsiveness, optimizing performance, improving security, implementing </p>
                        <p className="md:text-2xl text-base text-title_color mb-9">SEO strategies, ensuring scalability, developing a user-friendly content management system, integrating third-party tools, conducting thorough testing, and providing comprehensive documentation.</p>
                        <div className="mb-8">
                            <p className="md:text-2xl text-base text-title_color mb-9 font-bold">VISIT</p>
                            <Link href={`${res?.link}`} >
                                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300 break-words">
                                    {res?.link}
                                </span>
                            </Link>
                        </div>
                        <div>
                            <p className="md:text-2xl text-base text-title_color mb-9 font-bold">SERVICES</p>
                            <ul>
                                {res?.features.map((item, id) => {
                                    return <li key={id}>
                                        <Link href="#" >
                                            <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">
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
                                className="md:ml-auto md:mr-0"
                            />
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-title_color md:py-[12.5rem] py-20 relative">
                <div className="container px-4 mx-auto">
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
            <section className="bg-bs_secondary md:py-[12.5rem] py-20 relative">
                <div className="container px-4 mx-auto">
                    <h2 className="md:text-5xl text-2xl font-semibold text-title_color underline decoration-bs_link_color mb-12 max-w-[340px]">
                        The Solution
                    </h2>
                    <p className='md:text-2xl text-base text-title_color'>This project is divided into distinct phases. The first month will focus on planning and design, followed by three months of development. One month will be dedicated to testing and quality assurance, ensuring a bug-free and high-performing website. </p>
                    <p className='md:text-2xl text-base text-title_color mb-9'>In the final month, we will deploy the revamped website and provide comprehensive documentation, including training for {res?.title}'s team.</p>
                    <div className="mb-7">
                        <ul className='flex flex-col gap-2 list-disc list-inside marker:text-bs_btn_bg marker:!mr-0 mb-9'>
                            <li>
                                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">User-Centric Design</span>
                            </li>
                            <li>
                                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">Mobile Responsiveness</span>
                            </li>
                            <li>
                                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">Technical SEO</span>
                            </li>
                            <li>
                                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">Performance Optimization</span>
                            </li>
                            <li>
                                <span className="md:text-2xl text-base font-normal text-title_color underline hover:decoration-bs_btn_bg transition-all duration-300">User-Friendly CMS</span>
                            </li>


                        </ul>
                    </div>
                    <p className='md:text-2xl text-base text-title_color'> Provide detailed documentation for the website's codebase and custom functionalities, facilitating smooth handover and future maintenance.</p>
                </div>
            </section>
            <section className="bg-title_color md:py-[12.5rem] py-20 relative">
                <div className="container px-4 mx-auto">
                    <Image
                        src={res?.feature}
                        alt="img"
                        width={1920}
                        height={768}
                        className="mx-auto" />
                </div>
                <Image src="/images/svgs/blocks3.svg" alt='blocks3.svg' width={426} height={286} className='absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
            </section>
            <section className="bg-bs_info md:py-[12.5rem] py-20 relative">
                <div className="container px-4 mx-auto grid md:grid-cols-3 grid-cols-1 gap-5">
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
