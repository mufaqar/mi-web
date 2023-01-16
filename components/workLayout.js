import Link from "next/dist/client/link";
import Image from "next/image";
import Work_Image from '../public/images/workBg.png';

export default function WorkLayout() {
    return (
        <>
            <div className={"relative flex  items-end group bg-black transition duration-200"}>
                <Link href="/single-work">
                    <Image
                        src={Work_Image}
                        alt=""
                        priority="true"
                        className="group-hover:opacity-70 w-full h-full object-cover"
                    />
                </Link>
                <ul className="cat absolute md:top-10 top-4 left-5 md:flex md:space-x-4 space-x-0 md:space-y-0 space-y-4">
                    <li>
                        <Link href="#" className="block text-white p-2 text-base font-normal bg-zinc-700/20 hover:bg-zinc-700/50 rounded-full">#Web Design
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
                <Link href="/single-work">
                <h2 className="absolute md:bottom-10 bottom-4 left-5 text-4xl font-bold text-white">Teddington</h2>
                </Link>
            </div>


        </>
    )
}
