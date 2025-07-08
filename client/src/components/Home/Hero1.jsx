import React from 'react';
import { Hand, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const socialLinks = {
  Linkedin: 'https://www.linkedin.com/in/akhil-vysyaraju-b14bb0319/',
  Github: 'https://github.com/AkhilRaj1819',
  Mail: 'https://mail.google.com/mail/?view=cm&fs=1&to=akhilrajuvysyaraju19@gmail.com',
};

const Hero1 = ({ isDark }) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 lg:px-6 mt-[130px] lg:mt-[210px] w-full">
      {/* Intro + Heading */}
      <div className="flex flex-col lg:flex-row items-start ml-[9%] ">
        <div className="relative w-full">
          {/* Wave + Intro */}
          <span className="flex gap-2 text-[#30AF5B] mb-4 text-lg items-center">
            <motion.div
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Hand />
            </motion.div>
            Hey!<span className='text-[#000000]'>It's me Akhil</span>
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[ClashDisplay] leading-tight">
            Crafting <span className="text-[#30AF5B]">purpose driven</span>
            <br />
            <span className="text-[#30AF5B]">experiences</span> that inspire
            <br />& engage.
          </h1>
        </div>
      </div>

      {/* Line + Text Block */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-12 gap-6 sm:gap-10">
        {/* Line up to center */}
        <div className="w-full sm:w-1/2 border-t-2 border-[#EDF2F7]" />

        {/* Description text */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light max-w-md text-center sm:text-left">
          I'm passionate about crafting clean, engaging, and accessible digital
          experiences that bring ideas to life and align with real-world goals.
        </p>
      </div>

      {/* Links + Button */}
      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-between items-center lg:w-[87vw]">
        {/* Social links */}
        <ul className="flex gap-6 text-sm sm:text-base lg:ml-[130px]">
          {['Linkedin', 'Github', 'Mail'].map((label, i) => (
            <li key={i} className="flex items-center gap-2 cursor-pointer hover:text-[#30AF5B] transition">
              <a
                href={socialLinks[label]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                onClick={e => e.stopPropagation()} // prevent bubbling if needed
              >
                {label}
                <ArrowRight size={17} className="transform rotate-[-30deg]" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button
          className={`
            border px-5 py-2 rounded-full text-sm font-medium transition duration-300
            ${isDark ? 'text-white border-white hover:bg-white hover:text-black' 
                     : 'text-black border-black hover:bg-black hover:text-white'}
          `}
          onClick={() => navigate('/about')}
        >
          Know me better
        </button>
      </div>
    </div>
  );
};

export default Hero1;
