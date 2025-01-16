import { BsArrowRight } from 'react-icons/bs';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const projectData = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/projects/p1.jpg',
          link: '#',
        },
        {
          title: 'title',
          path: '/projects/p2.png',
          link: '#',
        },
        {
          title: 'title',
          path: '/projects/p3.png',
          link: '#',
        },
        {
          title: 'title',
          path: '/projects/p4.png',
          link: '#',
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/projects/p1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/projects/p2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/projects/p3.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/projects/p4.jpg',
    //     },
    //   ],
    // },
  ],
};

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[320px] lg:h-[400px] xl:h-[420px] z-10"
    >
      {projectData.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer h-max'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e339c7] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
                      <div className="absolute bottom-0 translate-y-full xl:group-hover:-translate-y-16 group-hover:-translate-y-12 transition-all duration-500">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.1em]">
                          <div className="delay-100">LIVE</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ProjectSlider;
