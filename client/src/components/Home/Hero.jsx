import React from 'react'
import { Hand } from 'lucide-react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='w-full pt-[20vh] flex flex-col  lg:flex-row  items-center px-6 gap-6'>
      <div className='relative w-full lg:w-[30%] flex justify-center'>
        <span className='flex gap-4 text-[#30AF5B]'>
            <motion.div
            animate={{rotate:[0, 14, -8, 14, -4, 10, 0,0,0,0]}}
            transition={{ duration: 2, repeat: Infinity }}
            >
            <Hand />
            </motion.div>
            Hey! It's me Akhil</span>
      </div>
    </div>
  )
}

export default Hero
