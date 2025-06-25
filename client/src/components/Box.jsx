import React from 'react';
import { Dot } from 'lucide-react';
import { motion } from 'framer-motion';

const Box = ({ isDark }) => {
  return (
    <div>
      <div className="flex flex-col lg:px-20 lg:py-20 justify-center items-center">
        <motion.div
          className={`flex flex-col justify-center items-center ${isDark ? 'bg-[#111116]' : 'bg-[#FFFFFF]'} w-[80vw] min-h-[300px] lg:h-[50vh] rounded-4xl`}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          
        >
          <span className={`${isDark ? "bg-[#21291F]/60" : "bg-[#F7FFF0]"} px-2 py-2 rounded-full text-xs flex items-center`}>
            <Dot color="#30AF5B" className="animate-ping" />
            Available for work
            <Dot color="#30AF5B" />
          </span>
          <span className={`text-3xl lg:text-5xl ${isDark ? 'text-white ' : 'text-black'}`}>Let's create your</span>
          <span className="text-3xl lg:text-5xl">next big idea.</span>
          <button
            className={`resume-button border px-4 py-2 max-w-fit rounded-4xl mt-[10px] cursor-pointer relative ${
              isDark ? 'text-white border-white' : 'text-black border-black'
            }`}
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Box;