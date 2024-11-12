import {
  BsArrowRight,
  BsBuilding,
  BsEnvelope,
  BsTelephone,
} from 'react-icons/bs';
import InnerPages_Banner from '../components/innerPages-banner';
import Link from 'next/link';
import { motion, Variant } from 'framer-motion';
import { fadeUp } from '../const/animation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import PageHead from '../components/pagesmeta';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaSkype, FaTwitterSquare } from 'react-icons/fa';
import CTA from '../components/newComponents/cta';
import Image from 'next/image';

export default function Contact_Us() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sending, setSending] = useState(false);

  const onSubmit = (data) => {
    setSending(true);
    fetch('/api/sendmail', {
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
        setSending(false);
      }
    });
  };
  return (
    <>
      <PageHead
        title="Contact Me | Full Stack MERN Developer | WordPress | React | NextJs  "
        description="Hire a dedicated skilled freelancer. Contact Me to elevate your business with expert solutions from Lahore's finest freelancers."
        url="https://www.mufaqar.com/contact"
      />
      <main className='overflow-x-hidden'>
        <InnerPages_Banner
          title="LET’S WORK TOGETHER"
          subtitle="I’d love to plan, design & develop your websit"
        />
        <section className='bg-title_color md:py-[12.5rem] py-20 relative'>
          <div className='container mx-auto px-4 relative'>
            <div className='flex md:flex-row flex-col md:gap-10 gap-5 items-start'>
              <div className='md:w-1/3 w-full'>
                <h3 className='text-3xl font-semibold text-white mb-2'>
                  Phone
                </h3>
                <Link href="tel:+923026006280" target='_blank' className='text-2xl font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                  +92 302-6006-280
                </Link>
                <h3 className='text-3xl font-semibold text-white mb-2 mt-8'>
                  Email
                </h3>
                <Link href="mailto:info@mufaqar.com" target='_blank' className='text-2xl font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300'>
                  info@mufaqar.com
                </Link>
                <h3 className='text-3xl font-semibold text-white mb-2 mt-8'>
                  Address
                </h3>
                <p className='text-2xl font-normal text-white'>
                  134 B Ahmed Housing Multan Lahore , Paksitan
                </p>
                <ul className='flex flex-wrap gap-4 mt-8'>
                  <li>
                    <Link href="https://www.facebook.com/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaFacebookSquare />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/in/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaTwitterSquare />
                    </Link>
                  </li>
                  <li>
                    <Link href="http://github.com/mufaqar" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaGithubSquare />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://join.skype.com/invite/M0ilv0J1egAb" target='_blank' className='md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300'>
                      <FaSkype />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='md:w-2/3 w-full'>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8 relative z-10"
                >
                  <div className="w-full">
                    <label htmlFor="name" className="hidden">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('name', { required: true })}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="hidden">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="hidden">
                      Your Phone
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      placeholder="Your Phone"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <textarea
                      type="text"
                      id="message"
                      rows="10"
                      placeholder="Tell us a little bit about your project"
                      className='text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]'
                      {...register('message', { required: true })}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className='text-xl font-semibold text-white bg-bs_btn_bg hover:bg-bs_link_color hover:border-bs_link_color py-[0.8125rem] px-[1.813rem] rounded-xl border-2 border-[#e42537] inline-block transition-all duration-300 w-fit'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Image src="/images/svgs/blocks3.svg" alt='blocks3.svg' width={426} height={286} className='absolute 2xl:right-0 lg:right-[-131px] right-0 lg:bottom-[-150px] bottom-[-75px] md:w-auto w-1/2 z-10' />
        </section>
        <CTA />
      </main >
    </>
  );
}
