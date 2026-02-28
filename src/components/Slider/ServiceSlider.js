import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxBookmark,
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxCrop />,
    title: 'UI/UX Design',
    description:
      'Creating intuitive, user-centric interfaces with modern design principles and seamless interactions.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Front-End Development',
    description:
      'Building responsive, high-performance web UIs using React, Next.js, and Tailwind CSS.',
  },
  {
    icon: <RxDesktop />,
    title: 'Back-End Development',
    description:
      'Robust server-side logic, API development, and database management with Node.js, Express, and Python.',
  },
  {
    icon: <RxReader />,
    title: 'Full-Stack Solutions',
    description:
      'End-to-end web application development from database architecture to polished frontend UI.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO & Optimization',
    description:
      'Enhancing website performance, speed, and search engine visibility for better reach.',
  },
  {
    icon: <RxBookmark />,
    title: 'Academic Projects',
    description:
      'Got a university project? I help students and researchers turn complex academic ideas into clean, working software — from research tools and data dashboards to full systems that actually make sense.',
  },
];

// Split array into chunks of n
const chunkArray = (arr, n) =>
  arr.reduce((acc, _, i) => (i % n === 0 ? [...acc, arr.slice(i, i + n)] : acc), []);

const ServiceCard = ({ item }) => (
  <div className="bg-[rgba(65,47,123,0.15)] rounded-2xl px-6 py-7 flex flex-col justify-between gap-y-4 group hover:bg-[rgba(89,65,169,0.2)] transition-all duration-300 border border-white/5 hover:border-accent/30 backdrop-blur-sm relative overflow-hidden h-full">
    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
    <div className="text-4xl text-accent group-hover:scale-110 transition-transform duration-300">
      {item.icon}
    </div>
    <div>
      <div className="mb-2 text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
        {item.title}
      </div>
      <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
        {item.description}
      </p>
    </div>
    <div className="text-2xl">
      <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
    </div>
  </div>
);

const ServiceSlider = () => {
  const slides = chunkArray(serviceData, 2); // 3 slides of 2 cards each

  return (
    <>
      {/* Mobile: stacked list */}
      <div className="flex flex-col gap-4 md:hidden">
        {serviceData.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </div>

      {/* Desktop: 2-per-slide Swiper (3 slides total) */}
      <div className="hidden md:block">
        <Swiper
          grabCursor={true}
          loop={false}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="!pb-12"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex gap-4">
                {slide.map((item, j) => (
                  <div key={j} className="flex-1">
                    <ServiceCard item={item} />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServiceSlider;


