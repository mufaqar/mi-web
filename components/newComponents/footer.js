import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaSkype,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-title_color py-[7.5rem] relative">
      {/* <div className="container mx-auto px-4 md:mb-24 mb-10">
        <form className="max-w-[926px] mx-auto">
          <div className="flex md:flex-row flex-col gap-4 mb-4">
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Your email address"
              className="text-xl font-semibold text-title_color py-[.8125rem] px-4 w-full rounded-lg border-2 border-[#afd2e9] outline-none focus:shadow-[0_0_0_.25rem_rgb(175,210,233,25%)]"
            />

            <button className="text-xl font-semibold text-white bg-bs_btn_bg hover:bg-bs_link_color hover:border-bs_link_color py-[0.8125rem] px-[1.813rem] rounded-xl border-2 border-[#e42537] inline-block transition-all duration-300 w-fit">
              Submit
            </button>
          </div>
          <span className="text-base font-semibold text-bs_link_color">
            Please enter an email address.
          </span>
        </form>
      </div> */}
      <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-5 mt-16">
        <div>
          <h6 className="text-2xl font-semibold text-white mb-4">Contact</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="tel:+923026006280"
                target="_blank"
                className="text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                +92 302-6006-280
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@mufaqar.com"
                target="_blank"
                className="text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                info@mufaqar.com
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-4 mt-6">
            <li>
              <Link
                href="https://www.facebook.com/mufaqar"
                target="_blank"
                className="md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300"
              >
                <FaFacebookSquare />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mufaqar"
                target="_blank"
                className="md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/mufaqar"
                target="_blank"
                className="md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300"
              >
                <FaTwitterSquare />
              </Link>
            </li>
            <li>
              <Link
                href="http://github.com/mufaqar"
                target="_blank"
                className="md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300"
              >
                <FaGithubSquare />
              </Link>
            </li>
            <li>
              <Link
                href="https://join.skype.com/invite/M0ilv0J1egAb"
                target="_blank"
                className="md:text-4xl text-2xl text-white hover:text-bs_link_color inline-flex transition-all duration-300"
              >
                <FaSkype />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-2xl font-semibold text-white mb-4">Address</h6>
          <p className="text-base font-normal text-white md:w-48">
            134 B Ahmed Housing Multan Lahore , Paksitan
          </p>
        </div>
        <div>
          <h6 className="text-2xl font-semibold text-white mb-4">
            Quick Links
          </h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/cv"
                className="text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-base font-normal text-white underline hover:decoration-bs_btn_bg transition-all duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <p className="text-base font-normal text-white mt-2">
            © 2010 - 2024 All Rights Reserved
          </p>
        </div>
      </div>
      <Image
        src="/images/svgs/blocks3.svg"
        alt="blocks3.svg"
        width={426}
        height={286}
        className="absolute 2xl:left-0 lg:left-[-131px] left-0 lg:top-[-150px] top-[-75px] md:w-auto w-1/2 z-10"
      />
    </footer>
  );
};

export default Footer;
