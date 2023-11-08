import { BsArrowRight, BsBuilding, BsEnvelope, BsTelephone } from 'react-icons/bs';
import InnerPages_Banner from '../components/innerPages-banner';
import Link from 'next/link';
import { motion, Variant } from 'framer-motion'
import { fadeUp } from "../const/animation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';


export default function Contact_Us() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [sending, setSending] = useState(false)

    const onSubmit = (data) => {
        setSending(true)
        fetch('/api/email', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received', res);
            if (res.status === 200) {
                console.log('Response succeeded!');
                alert('Message Successfully send.!');
                reset();
                setSending(false)
            }
        });
    }
    return (
        <main className='overflow-hidden'>
            <InnerPages_Banner sub="I’d love to plan, design & develop your websit" title="LET’S WORK TOGETHER" />

            <motion.section
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}>
                <div className='flex md:flex-row flex-col'>
                    <div className='md:w-5/12 w-full p-12 items-center justify-center bg-zinc-900'>
                        <motion.div
                            variants={fadeUp}
                            className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:text-left text-center items-center p-5 mb-7 '>
                            <BsBuilding className='text-5xl text-white' />
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-2xl font-semibold text-white'>Office Location</h3>
                                <p className='text-base text-gray-400'>134 B Ahmed Housing Multan Lahore , Paksitan</p>
                            </div>
                        </motion.div>
                        <hr className='w-10/12 mx-auto border-gray-400 mb-7'></hr>
                        <motion.div
                            variants={fadeUp}
                            className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:text-left text-center items-center p-5 mb-7 '>
                            <BsTelephone className='text-5xl text-white' />
                            <div className='flex flex-col justify-center'>
                                <p className='text-base text-gray-400 uppercase'>Phone</p>
                                <Link href="tel:+923026006280" target="_blank" rel="nofollow">
                                    <h3 className='text-2xl font-semibold text-white'>+92 302-6006-280</h3>
                                </Link>
                            </div>
                        </motion.div>
                        <hr className='w-10/12 mx-auto border-gray-400 mb-7'></hr>
                        <motion.div
                            variants={fadeUp}
                            className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:text-left text-center items-center p-5 '>
                            <BsEnvelope className='text-5xl text-white' />
                            <div className='flex flex-col justify-center'>
                                <p className='text-base text-gray-400 uppercase'>Send an Email</p>
                                <Link href="mailto:mufaqar@gmail.com" target="_blank" rel="nofollow">
                                    <h3 className='text-2xl font-semibold text-white'>info@mufaqar.com</h3>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className='md:w-7/12 w-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13608.758388583374!2d74.248524!3d31.491472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46a0c6c4ff7a1c7c!2sMufaqar%20%7C%20WordPress%20Designer%20-%20Theme%20Developer!5e0!3m2!1sen!2sus!4v1655373782749!5m2!1sen!2sus" className='w-full h-[550px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}>
                <div className='container mx-auto flex flex-col py-16 px-4'>
                    <motion.p
                        variants={fadeUp}
                        className='text-sm text-gray-400 uppercase text-center'>
                        LET'S WORK TOGETHER.
                    </motion.p>
                    <motion.h3
                        variants={fadeUp}
                        className='text-4xl font-semibold text-black text-center mb-7'>
                        Contact Us
                    </motion.h3>
                    <motion.form
                        variants={fadeUp}
                        onSubmit={handleSubmit(onSubmit)} className='md:w-3/4 w-full mx-auto'>
                        <div className='flex md:flex-row flex-col gap-4 mb-4'>
                            <div className='md:w-1/2 w-full'>
                                <label htmlFor='name' className='hidden'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm md:mr-4 md:mb-0 mb-4"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-xs text-red-500'>This field is required</span>}

                            </div>
                            <div className='md:w-1/2 w-full'>
                                <label htmlFor='email' className='hidden'>Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                            </div>
                        </div>
                        <div className='w-full'>
                            <label htmlFor='phone' className='hidden'>Your Phone</label>
                            <input
                                type="phone"
                                id="phone"
                                placeholder="Your Phone"
                                className="w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm mb-4"
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <span className='text-xs text-red-500'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <textarea
                                type="text"
                                id="message"
                                rows="10"
                                placeholder="Tell us a little bit about your project"
                                className="w-full border border-gray-300 focus:border-customPink outline-none py-4 px-6 text-sm mb-4"
                                {...register("message", { required: true })}
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='border-2 border-customPink flex w-44 h-14 justify-between items-center text-sm uppercase text-customPink font-medium p-4 hover:bg-customPink hover:w-48 hover:text-white transform transition-all duration-300'>
                            <span>Send Message </span><BsArrowRight className='text-xl' />
                        </button>
                    </motion.form>
                </div>
            </motion.section>
        </main>
    )
}
