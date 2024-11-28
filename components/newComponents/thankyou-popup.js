import React from 'react'
import { IoIosClose } from 'react-icons/io'

const Thankyou_Popup = ({popUp, setPopUp}) => {
  return (
    <div className='bg-title_color p-14 w-1/2 relative rounded-lg'>
      <button onClick={() => setPopUp(!popUp)} className='text-3xl text-white bg-bs_secondary absolute top-0 left-0 rounded-full'>
        <IoIosClose />
      </button>
      <h2 className='md:text-4xl text-2xl font-semibold text-white text-center underline decoration-bs_link_color mb-8'>
        Thank you for contacting me
      </h2>
      <p className='text-lg font-normal text-white text-center mb-4'>
        Your opinion truly matters to us and helps shape our offerings for the better. Share your thoughts and be a part of our journey to improve and serve you better!
      </p>
    </div>
  )
}

export default Thankyou_Popup