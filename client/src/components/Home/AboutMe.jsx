import React from 'react'
import { Sparkle } from 'lucide-react'
const AboutMe = () => {
  return (
      <div className='flex justify-center items-center' >
        
        <div className='text-center p-[100px]'>
            <div className=' flex justify-center items-center gap-3 text-[#30AF5B]'>
                <Sparkle/>
                <p className='font-bold' > ABOUT ME</p>
            </div>
            
            <h1 className='text-3xl font-bold font-[ClashDisplay] leading-relaxed tracking-wide items-center m-[20px]'>
            I'm Vysyaraju Akhil Raju — a solo full-stack force behind BookAura. With sharp skills in React, Node.js, and AI integration, I turn complex ideas into powerful digital tools. From AI-powered flashcards to voice-enabled study assistants, I build more than apps — I build ecosystems that think, speak, and solve.
        </h1>
        </div>
      </div>
  )
}

export default AboutMe
