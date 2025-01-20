import Circles from '../../components/Image/Circles';
import { fadeIn } from '../../components/Variants/Variants';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { useHeader } from '../../Context/HeaderContext';
import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { toggleHeader } = useHeader();
  const containerRef = useRef(null);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
    // Header Scroll function
    const handleScroll = () => {
      const scrollPosition = containerRef.current.scrollTop;
      setIsHeaderVisible(scrollPosition <= 15);
    };
  
    useEffect(() => {
      const container = containerRef.current;
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

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error('Please type your Name.');
      return;
    } else if (!formData.email) {
      toast.error('Please type your Email');
      return;
    } else if (!formData.message) {
      toast.error('Please type the Message');
      return;
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="h-screen bg-primary/60 pt-16 overflow-y-scroll scrollbar-none"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto py-32 text-center xl:text-left flex justify-center h-full mb-32 xl:mb-0">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center overflow-hidden hover:border-accent btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Connect
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Contact;