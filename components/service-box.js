export default function Service(props) {
  return (
    <>
      <div className='bg-white p-10 shadow-3xl transform translate-y-0 hover:-translate-y-3 duration-500 group'>        
          <span className='text-5xl w-fit p-2 block border-2 border-white group-hover:border-2 group-hover:border-customPink duration-300
          bg-customPink group-hover:bg-white rounded-full mb-4 text-white group-hover:text-customPink'>{props.icon}</span>
          <div className="">
            <h2 className="text-xl font-medium mb-4">{props.title}</h2>
            <p className="text-base text-slate-700">{props.content}</p>
          </div>        
      </div>
    </>
  )
}
