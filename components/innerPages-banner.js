import Image from "next/image";

export default function InnerPages_Banner({ subtitle, title }) {
  return (
    <section className="bg-title_color md:py-[10.5rem] py-20 relative">
      <div className="container mx-auto px-4">
        <h1 className="md:text-[4.5rem] md:leading-[1] text-4xl font-bold text-white mb-9 max-w-[519px]">
          {title}
        </h1>
        <p className="md:text-2xl text-lg font-normal text-white mb-6 max-w-[525px]">
          {subtitle}
        </p>
        <Image
          src="/images/svgs/work.svg"
          alt="work"
          width={662}
          height={332}
          className="absolute md:right-[-5%] md:top-[-6%] top-[-5%] right-[-20%] md:scale-100 scale-50"
        />
      </div>
    </section>
  )
}
