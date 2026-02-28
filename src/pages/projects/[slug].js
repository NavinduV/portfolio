"use client";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsGlobe, BsGithub, BsCheck2Circle } from 'react-icons/bs';
import { fadeIn } from '../../components/Variants/Variants';
import Circles from '../../components/Image/Circles';
import { projectData } from '../../components/Slider/ProjectSlider';
import { useHeader } from '../../Context/HeaderContext';
import { useEffect, useRef, useState } from 'react';

// Flatten all images from all slides for easy lookup
const allProjects = projectData.slides.flatMap((slide) => slide.images);

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { toggleHeader } = useHeader();
  const scrollRef = useRef(null);
  const pageRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    if (!pageRef.current) return;
    const scrollPosition = pageRef.current.scrollTop;
    setIsHeaderVisible(scrollPosition <= 15);
  };

  useEffect(() => {
    const container = pageRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    toggleHeader(isHeaderVisible);
  }, [isHeaderVisible, toggleHeader]);

  const project = allProjects.find((p) => p.slug === slug);

  // Show nothing while loading to prevent flash of wrong content
  if (!slug || !project) {
    return (
      <div className="h-screen bg-primary/60">
        {!slug ? null : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="h2">Project Not Found</h2>
              <Link
                href="/projects"
                className="text-accent hover:text-accent/80 flex items-center gap-2 justify-center mt-4"
              >
                <BsArrowLeft /> Back to Projects
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Use gallery images if available, otherwise fall back to main path
  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.path];

  return (
    <div ref={pageRef} onScroll={handleScroll} className="h-screen bg-primary/60 xl:overflow-hidden overflow-y-auto scrollbar-none">
      <Circles />

      {/* Two-column layout */}
      <div className="min-h-full xl:h-full flex flex-col xl:flex-row pt-36 xl:pt-28 container mx-auto px-6 xl:px-8 gap-0 xl:gap-8 pb-36 xl:pb-0">
        {/* LEFT SIDE — Image Gallery (fixed on desktop, flows on mobile) */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="xl:w-[55%] xl:h-full flex flex-col justify-start pt-4 xl:pt-6 pb-4 xl:pb-0 flex-shrink-0"
        >
          {/* Back button — hidden on mobile */}
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-5 hidden xl:block"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 relative z-10"
            >
              <BsArrowLeft className="text-accent group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">Back to Projects</span>
            </Link>
          </motion.div>

          {/* Big Image */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-video">
            <Image
              src={galleryImages[selectedImage]}
              fill
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 55vw"
            />
          </div>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {galleryImages
                .filter((_, idx) => idx !== selectedImage)
                .map((img, idx) => {
                  const realIdx = galleryImages.indexOf(img);
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(realIdx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 aspect-video ${
                        realIdx === selectedImage
                          ? 'border-accent shadow-lg shadow-accent/20'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <Image
                        src={img}
                        fill
                        alt={`${project.title} thumbnail ${idx + 1}`}
                        className="object-cover object-top"
                        sizes="(max-width: 1280px) 33vw, 18vw"
                      />
                      <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300"></div>
                    </button>
                  );
                })}
            </div>
          )}
        </motion.div>

        {/* RIGHT SIDE — Project Info (scrollable on desktop) */}
        <motion.div
          ref={scrollRef}
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="xl:w-[45%] xl:h-full xl:overflow-y-auto scrollbar-none pt-4 xl:pt-6 xl:pb-16 mb-10 xl:mb-0"
        >
          {/* Title */}
          <h2 className="h2 mb-6">
            {project.title}
            <span className="text-accent">.</span>
          </h2>

          <div className="flex flex-col gap-7">
            {/* Description */}
            <div>
              <p className="text-white/70 leading-relaxed text-[15px]">
                {project.description}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-white/70 text-[15px]"
                    >
                      <BsCheck2Circle className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.tech && project.tech.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-accent/20 hover:border-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Live Link */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                Links
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/30 to-purple-600/30 hover:from-accent/50 hover:to-purple-600/50 border border-accent/20 rounded-lg transition-all duration-300 text-sm font-medium"
              >
                {project.link.includes('github') ? (
                  <>
                    <BsGithub className="text-lg" /> View on GitHub
                  </>
                ) : (
                  <>
                    <BsGlobe className="text-lg" /> Visit Live Site
                  </>
                )}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
