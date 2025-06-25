import React from 'react';
import { Sparkle, Brain, Pen, PenBox, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
const Steps = ({isDark}) => {
  const step = [
    {
      id: 1,
      icon: <Brain />,
      heading: 'Strategize',
      main: 'To create something awesome, one must first talk about the details. Planning is essential.',
    },
    {
      id: 2,
      icon: <Pen />,
      heading: 'Wireframe',
      main: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
    },
    {
      id: 3,
      icon: <PenBox />,
      heading: 'Design',
      main: 'The most fun part of all – adding pizzazz to the wireframes and bringing it to life.',
    },
    {
      id: 4,
      icon: <Code />,
      heading: 'Development',
      main: 'The design may be final but it needs to be functional and practical. Development is key.',
    },
    {
      id: 5,
      icon: <ShieldCheck />,
      heading: 'Quality Assurance',
      main: 'Website load times, SEO, file optimization, etc., weigh in to the quality of the site.',
    },
  ];

  return (
    <div className='mb-[110px] '>
    <div className="mt-16 lg:mt-[110px] lg:mr-[167px]">
      <motion.div className="flex flex-col justify-center items-start px-6 lg:px-0 lg:ml-[160px]"
      initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,ease:'easeOut'}}
      >
        {/* Header */}
        <span className="text-[#30AF5B] flex items-center gap-2 font-[ClashDisplay] text-sm font-bold uppercase">
          <Sparkle /> Steps I Follow
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[ClashDisplay] mt-2">
          My Design Process
        </h2>
        <p className="text-gray-700 mt-4 text-base max-w-xl">
          I have worked with some of the most innovative industry leaders to help build their top-notch products.
        </p>
      </motion.div>
<span className='ml-6 lg:ml-40 '>Scroll👉</span>
      {/* Scrollable Cards on Mobile */}
      <motion.div className="flex flex-row gap-6 overflow-x-auto scrollbar-hide mt-10 px-6 lg:px-0 lg:ml-[160px]">
        
        {step.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-1 lg:flex-shrink-0 min-w-[280px]  sm:min-w-[140px] lg:w-[300px] flex flex-col items-start p-6  border border-gray-200 rounded-xl shadow-sm backdrop-blur-md transition-all hover:shadow-md ${isDark ? 'bg-black/80' : 'bg-white/80'}`}          >
            <div className={`h-[60px] w-[60px]  rounded-full flex items-center justify-center text-[#30AF5B] mb-4 ${isDark ? 'bg-black/80 border-1 border-white ': 'bg-[#e2e8f0]'}`}>
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-1">0{item.id +". "+ item.heading}</h3>
            <p className="text-gray-600 text-sm">{item.main}</p>
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Steps;
