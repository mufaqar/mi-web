import { useFormik } from 'formik';
import { BsArrowRight, BsBuilding, BsEnvelope, BsTelephone } from 'react-icons/bs';
import InnerPages_Banner from '../components/innerPages-banner';
import * as Yup from 'yup';
import Link from 'next/link';

export const signUpschema = Yup.object({
    name: Yup.string().required("Please select field"),
    email: Yup.string().email().required("Please select field"),
    phone: Yup.string().required("Please select field"),
    textarea: Yup.string().required("Please select field"),
});

export default function Contact_Us() {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        textarea: '',
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpschema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <InnerPages_Banner sub="I’d love to plan, design & develop your websit" title="LET’S WORK TOGETHER" />

            <section>
                <div className='flex md:flex-row flex-col'>
                    <div className='md:w-5/12 w-full p-12 items-center justify-center bg-zinc-900'>
                        <div className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:text-left text-center items-center p-5 mb-7 '>
                            <BsBuilding className='text-5xl text-white' />
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-2xl font-semibold text-white'>Office Location</h3>
                                <p className='text-base text-gray-400'>134 B Ahmed Housing Multan Lahore , Paksitan</p>
                            </div>
                        </div>
                        <hr className='w-10/12 mx-auto border-gray-400 mb-7'></hr>
                        <div className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:text-left text-center items-center p-5 mb-7 '>
                            <BsTelephone className='text-5xl text-white' />
                            <div className='flex flex-col justify-center'>
                                <p className='text-base text-gray-400 uppercase'>Phone</p>
                                <Link href="tel:+923026006280" target="_blank" rel="nofollow">
                                    <h3 className='text-2xl font-semibold text-white'>+92 302-6006-280</h3>
                                </Link>
                            </div>
                        </div>
                        <hr className='w-10/12 mx-auto border-gray-400 mb-7'></hr>
                        <div className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:text-left text-center items-center p-5 '>
                            <BsEnvelope className='text-5xl text-white' />
                            <div className='flex flex-col justify-center'>
                                <p className='text-base text-gray-400 uppercase'>Send an Email</p>
                                <Link href="mailto:mufaqar@gmail.com" target="_blank" rel="nofollow">
                                    <h3 className='text-2xl font-semibold text-white'>info@mufaqar.com</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-7/12 w-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13608.758388583374!2d74.248524!3d31.491472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46a0c6c4ff7a1c7c!2sMufaqar%20%7C%20WordPress%20Designer%20-%20Theme%20Developer!5e0!3m2!1sen!2sus!4v1655373782749!5m2!1sen!2sus" className='w-full h-[550px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mx-auto flex flex-col py-16 px-4'>
                    <p className='text-sm text-gray-400 uppercase text-center'>LET'S WORK TOGETHER.</p>
                    <h3 className='text-4xl font-semibold text-black text-center mb-7'>Contact Us</h3>
                    <form onSubmit={handleSubmit} action="#" className='md:w-3/4 w-full mx-auto'>
                        <div className='flex md:flex-row flex-col mb-4'>
                            <label htmlFor='name' className='hidden'>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="md:w-1/2 w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm uppercase md:mr-4 md:mb-0 mb-4" />

                            <label htmlFor='email' className='hidden'>Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="md:w-1/2 w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm uppercase" />
                        </div>
                        <label htmlFor='phone' className='hidden'>Your Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm uppercase mb-4" />
                        <textarea
                            type="text"
                            name="textarea"
                            rows="10"
                            placeholder="Tell us a little bit about your project"
                            value={values.textarea}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm uppercase mb-4"></textarea>
                        <button
                            type='submit'
                            className='border-2 border-customPink flex w-44 h-14 justify-between items-center text-sm uppercase text-customPink font-medium p-4 hover:bg-customPink hover:w-48 hover:text-white transform transition-all duration-300'>
                            <span>Send Message </span><BsArrowRight className='text-xl' />
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
