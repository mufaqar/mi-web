
export default function Featured_Service({ BG_icon, mai_icon, title, content }) {
    return (
      <div className="md:border-t-0 md:border-l-0 border border-slate-100 md:p-11 p-3 group hover:bg-customPink">
        <div className="service">
          <span className="icon text-6xl mb-5 text-slate-700 group-hover:text-white stroke-0 group-hover:animate-servicesIcon">
            {BG_icon}
          </span>
          <span className="back-icon text-9xl mb-5 text-black/25 absolute top-6 opacity-0 group-hover:opacity-40 stroke-0 group-hover:animate-servicesIcon">
            {mai_icon}
          </span>
          <h4 className="text-sm tracking-widest font-normal uppercase text-center text-slate-500 group-hover:text-white">
            {title}
          </h4>
          <hr className="border-b border-black group-hover:border-white w-12 my-5 group-hover:animate-animHr"></hr>
          <p className="text-base leading-6 font-light text-slate-500 text-center group-hover:text-white">
            {content}
          </p>
        </div>
      </div>
    )
  }
  