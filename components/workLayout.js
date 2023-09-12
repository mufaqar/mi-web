import Link from "next/dist/client/link";
import Image from "next/image";

export default function WorkLayout({data}) {
    return (
        <>
            <div className={"relative group bg-black transition duration-200"}>
                <Link href={`/works/${data?.title}`}>
                    <Image
                        src={data?.feature}
                        alt={data?.feature}
                        width={1920}
                        height={768}
                        className="group-hover:opacity-60 opacity-70 w-full h-full "
                    />
                </Link>
                <ul className="cat absolute md:top-10 top-4 left-5 md:flex md:space-x-4 space-x-0 md:space-y-0 space-y-4">
                    <li>
                        <Link href="#" className="block text-white p-2 text-base font-normal bg-zinc-700/20 hover:bg-zinc-700/50 rounded-full">#Web Development
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block text-white p-2 text-base font-normal bg-zinc-700/20 hover:bg-zinc-700/50 rounded-full">#Web Design
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block text-white p-2 text-base font-normal bg-zinc-700/20 hover:bg-zinc-700/50 rounded-full">#Web Design
                        </Link>
                    </li>
                </ul>
                <Link href={`/works/${data?.title}`}>
                <h2 className="absolute md:bottom-10 bottom-4 left-5 text-4xl font-bold text-white capitalize">
                    {data?.title}
                </h2>
                </Link>
            </div>


        </>
    )
}
