// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Front-End Development',
    description:
      'Responsive and interactive UI/UX design using modern frameworks.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Back-End Development',
    description:
      'API development, server-side logic, and database management with Node.js, Express.js, and Prisma.',
  },
  {
    icon: <RxDesktop />,
    title: 'Full-Stack Solutions',
    description:
      'End-to-end development of web applications, including deployment and optimization.',
  },
  {
    icon: <RxReader />,
    title: 'Database Management',
    description:
      'Efficient data modeling and management with MongoDB, PostgreSQL, or MySQL.',
  },
  {
    icon: <RxRocket />,
    title: 'Maintenance & Support',
    description: 'Ongoing updates, bug fixes, and performance optimization.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[250px] xl:h-[420px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(65,47,123,0.15)] h-max xl:h-[380px] rounded-lg px-6 py-8 flex sm:flex-col justify-between gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                <div className="text-4xl text-accent mb-4">{item.icon}</div>

                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>

                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
