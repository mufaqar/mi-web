import Image from "next/image";
import Image_url from '../public/images/dp.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonial() {
    return (
        <>
            <div className='md:max-w-[1110px] mx-auto flex md:flex-row flex-col'>
                <div className='md:w-1/4 w-full bg-customPink py-14 px-8 items-center'>
                    <div>
                        <h5 className="text-xl font-bold tracking-tighter text-white mb-2">Our Happy Clients</h5>
                        <p className='text-white font-medium text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor,</p>
                    </div>
                </div>
                <div className='md:w-3/4 w-full p-7 bg-gray-100'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>{slide()}</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

function slide() {
    return (
        <div className="bg-white p-7">
            <p className='text-base text-slate-700 mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu.</p>
            <p className='text-base text-slate-700 mb-7'>Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu.</p>
            <div className="flex items-center space-x-7">
                <div className="relative w-12  h-12 rounded-full">
                    <Image
                        src={Image_url}
                        alt=""
                        className="rounded-full h-full w-full"
                    />
                </div>
                <div>
                    <h5 className="font-bold">John Doe</h5>
                    <p className="font-normal">Aple Inc</p>
                </div>

            </div>
        </div>
    )
}