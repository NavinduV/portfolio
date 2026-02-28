import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
export const projectData = {
  slides: [
    {
      images: [
        // {
        //   title: 'SmartVote',
        //   slug: 'smartvote',
        //   path: '/projects/p1.jpg',
        //   link: 'https://github.com/NavinduV',
        //   description:
        //     'A secure digital voting platform built with React and Django, integrating Firebase and Hyperledger Fabric blockchain for vote immutability. Implemented voice and facial authentication for identity verification, multi-language UI support, and secure API integration to ensure complete transparency and security throughout the voting process.',
        //   features: [
        //     'Blockchain-based vote immutability (Hyperledger Fabric)',
        //     'Voice & facial authentication',
        //     'Multi-language UI support',
        //     'Secure API integration',
        //     'Real-time transparency dashboard',
        //   ],
        //   tech: [
        //     'React',
        //     'Django',
        //     'Firebase',
        //     'Hyperledger Fabric',
        //     'Machine Learning',
        //   ],
        //   gallery: ['/projects/p1.jpg'],
        // },
        {
          title: 'TheFragranceLK',
          slug: 'thefragrancelk',
          path: '/projects/fragrancelk-pos/1.png',
          link: 'https://pos.thefragrancelk.com/',
          description:
            'A full-stack POS and inventory management system with sales tracking, automated receipt generation, and inventory control. Integrated thermal receipt printers and barcode printer generation. Implemented email alerts for sensitive system activities and deployed on shared hosting via cPanel with CI/CD automation through GitHub Actions.',
          features: [
            'POS with sales tracking & automated receipts',
            'Thermal & barcode printer integration',
            'Email alerts for system activities',
            'Inventory control & management',
            'CI/CD pipeline via GitHub Actions',
          ],
          tech: ['Laravel', 'React', 'MySQL', 'GitHub Actions', 'cPanel'],
          gallery: ['/projects/fragrancelk-pos/1.png'],
        },
        // {
        //   title: 'Sunshine',
        //   slug: 'sunshine',
        //   path: '/projects/p3.png',
        //   link: 'https://github.com/NavinduV',
        //   description:
        //     'A full-stack inventory and business management system developed with React and Django. Implemented RESTful APIs, optimized database queries for PostgreSQL and MongoDB, refactored code for scalability, resolved production issues, and supported Docker-based cloud deployment on Render. Improved inventory tracking and POS integrations.',
        //   features: [
        //     'RESTful API implementation',
        //     'Optimized DB queries (PostgreSQL/MongoDB)',
        //     'Docker-based cloud deployment on Render',
        //     'POS integration & inventory tracking',
        //     'Scalable, production-ready architecture',
        //   ],
        //   tech: ['React', 'Django', 'PostgreSQL', 'SCSS', 'Docker', 'Render'],
        //   gallery: ['/projects/p3.png'],
        // },
        {
          title: 'Wamhands DMS',
          slug: 'wamhands-dms',
          path: '/projects/warmhands/1.png',
          link: 'https://github.com/WarmHands-DMS/warmhands',
          description:
            'A MERN-based disaster management system enabling users to report incidents with descriptions and images. Integrated React Leaflet for real-time map visualization and location tracking, and Cloudinary for image storage. Built an admin panel for disaster validation and verification, with automated email notifications sent to users in affected areas.',
          features: [
            'Incident reporting with images',
            'Real-time map visualization (React Leaflet)',
            'Cloudinary image storage',
            'Admin panel for disaster validation',
            'Automated email notifications to affected users',
          ],
          tech: ['React', 'Node.js', 'MongoDB', 'React Leaflet', 'Cloudinary'],
          gallery: ['/projects/warmhands/1.png'],
        },
        {
          title: 'Saviskara',
          slug: 'saviskara',
          path: '/projects/saviskara/1.png',
          link: 'https://saviskara.vercel.app/',
          description:
            'A technology-focused e-learning platform built with Next.js and Prisma with PostgreSQL. Designed structured content management and a fully responsive UI with Tailwind CSS to provide organized learning resources, course tracking, and an enhanced student learning experience.',
          features: [
            'Structured course content management',
            'Responsive UI with Tailwind CSS',
            'PostgreSQL database with Prisma ORM',
            'Student progress tracking',
            'Organized learning resource library',
          ],
          tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
          gallery: [
            '/projects/saviskara/1.png',
            '/projects/saviskara/2.png',
            '/projects/saviskara/3.png',
            '/projects/saviskara/4.png',
          ],
        },
        {
          title: 'BG Generator',
          slug: 'bg-generator',
          path: '/projects/p3.png',
          link: 'https://navinduv.github.io/bg-generator/',
          description:
            'A creative background gradient generator that allows users to create beautiful CSS gradients with a simple and intuitive interface. Users can customize gradient directions, colors, and styles, then copy the generated CSS code directly for use in their projects.',
          features: [
            'Custom gradient direction',
            'Color picker integration',
            'One-click CSS code copy',
            'Live gradient preview',
            'Responsive design',
          ],
          tech: ['HTML', 'CSS', 'JavaScript'],
          gallery: ['/projects/p3.png'],
        },
        {
          title: 'Color Palette Generator',
          slug: 'color-palette-generator',
          path: '/projects/p4.png',
          link: 'https://navinduv.github.io/color-palette-generator/',
          description:
            'A handy tool for generating color palettes with hex codes. Perfect for designers and developers looking for color inspiration. Generate harmonious color combinations with a single click and easily copy hex values for your design projects.',
          features: [
            'Random palette generation',
            'Hex code display & copy',
            'Color locking feature',
            'Responsive UI',
            'Lightweight & fast',
          ],
          tech: ['HTML', 'CSS', 'JavaScript'],
          gallery: ['/projects/p4.png'],
        },
      ],
    },
  ],
};

// Helper: split flat array into chunks of given size
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// Flatten all project images
const allImages = projectData.slides.flatMap((slide) => slide.images);

const ProjectSlider = () => {
  // Split into groups of 4 for desktop slider
  const desktopSlides = chunkArray(allImages, 4);
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  return (
    <>
      {/* Desktop: 4 per slide in a 2x2 grid */}
      <div className="hidden md:flex flex-col gap-3">
        {/* Desktop nav arrows row */}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => desktopSwiperRef.current?.slidePrev()}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <BsArrowLeft className="text-white text-sm" />
          </button>
          <button
            onClick={() => desktopSwiperRef.current?.slideNext()}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <BsArrowRight className="text-white text-sm" />
          </button>
        </div>
        <Swiper
          onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="w-full h-[320px] lg:h-[400px] xl:h-[420px] z-10"
        >
          {desktopSlides.map((slideGroup, slideIdx) => (
            <SwiperSlide key={slideIdx}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer h-max">
                {slideGroup.map((image, imgIdx) => (
                  <Link
                    href={`/projects/${image.slug}`}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={imgIdx}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e339c7] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
                      <div className="absolute bottom-0 translate-y-full xl:group-hover:-translate-y-16 group-hover:-translate-y-12 transition-all duration-500">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.1em]">
                          <div className="delay-100 uppercase font-semibold">{image.title}</div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>

      {/* Mobile: one card at a time, swipeable */}
      <div className="block md:hidden">
        {/* Mobile nav arrows row */}
        <div className="flex items-center justify-end gap-2 mb-3">
          <button
            onClick={() => mobileSwiperRef.current?.slidePrev()}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <BsArrowLeft className="text-white text-sm" />
          </button>
          <button
            onClick={() => mobileSwiperRef.current?.slideNext()}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-accent/30 hover:border-accent/50 transition-all duration-300"
            aria-label="Next slide"
          >
            <BsArrowRight className="text-white text-sm" />
          </button>
        </div>
        <Swiper
          onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
          spaceBetween={16}
          slidesPerView={1.15}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          freeMode={false}
          pagination={{ clickable: true }}
          modules={[Pagination, FreeMode, Autoplay]}
          className="w-full h-[220px] z-10"
        >
          {allImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Link
                href={`/projects/${image.slug}`}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group h-[180px]"
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  <Image
                    src={image.path}
                    fill
                    alt={image.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.1em]">
                      <span className="uppercase font-semibold">{image.title}</span>
                      <BsArrowRight className="text-accent" />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>
  );
};

export default ProjectSlider;
