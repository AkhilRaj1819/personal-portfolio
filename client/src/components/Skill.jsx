import React from 'react'
import {Sparkle} from 'lucide-react'
import './Skill.css'
import {motion} from 'framer-motion'
const Skill = ({isDark}) => {
  const skills = [
    {
      name:'React',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B'
    },
    {
      name:'NodeJS',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
      type: 'frontend'
    },
    {
      name:'MongoDB',
      icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'ExpressJS',
      icon: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'JavaScript',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'TypeScript',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'CSS3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'HTML5',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B',
    },
    {
      name:'GitHub',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B'
    },
    {
      name:'Vercel',
      icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
      level: 'intermediate',
      persentage: 75,
      color: '#30AF5B'
    },
    {
        name:'Next.js',
        icon:'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
        level:'intermediate',
        persentage: 75,
        color:'#30AF5B'
    }
    
  ]
  return (
    <div>
      <div className="flex flex-col lg:flex-row  border-b-2 border-[#e2e8f0]">
        <motion.div className="flex flex-col justify-center px-20   py-20 lg:m-auto lg:px-0 lg:py-0"
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,ease:'easeOut'}}
        viewport={{once:true}}
        >
          <h1 className="flex text-[#30AF5B] ">
            <Sparkle color="#30AF5B" /> My Skills
          </h1>
          <br />
          <span className="text-4xl font-bold">SKILLS</span>
          <p>
            I’ve honed a diverse set of design and development skills
            <br /> to craft functional, visually appealing, and user-first
            digital products.
          </p>
        </motion.div>
        <div className='lg:m-auto'>
          <motion.div className="flex flex-col h-[250px] w-[350px] overflow-y-auto scrollbar-hide  mt-[60px] mb-[60px] m-auto  gap-4 "
          initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,ease:'easeOut'}}
        viewport={{once:true}}

          >
            {" "}
            <p className="text-center">👇scroll👇</p>
            {skills.map((skill) => (
              <div className="flex flex-row ">
                <div className="flex flex-col m-[auto] w-[130px]">
                  <img
                    className="inline-flex h-[60px] w-fit m-[auto]"
                    src={skill.icon}
                    alt=""
                  />
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={75}
                  readOnly
                  className={`fixed-range w-[120%] h-2 bg-gray-300 rounded-full cursor-default m-[auto] appearance-none ${
                    isDark ? "dark-page " : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skill
