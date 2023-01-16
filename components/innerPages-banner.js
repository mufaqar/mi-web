
export default function InnerPages_Banner(props) {
  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className='container md:w-[1140px] mx-auto flex flex-col items-center space-y-2 p-4'>
          <h6 className='text-xl font-medium tracking-widest text-center text-slate-500'>{props.sub}</h6>
          <h1 className='md:text-6xl text-4xl font-extrabold text-center text-black after:content-["."] after:ml-0.5 after:text-customPink'>{props.title}</h1>
        </div>
      </section>
    </>
  )
}
