import React from 'react'
import { useState,useEffect } from 'react'
import NavBar from './NavBar'
import Hero2 from '../contact/Hero2'
const Contact = () => {
  const [isDark, setIsDark] = useState(false);
      useEffect(() => {
      document.body.style.backgroundColor = isDark ? '#000000' : '#F7F8FC';
      document.body.style.color = isDark ? '#F7F8FC' : '#000000';
    }, [isDark]);
  return (
    <div>
      <NavBar isDark={isDark} setIsDark={setIsDark}/>
      <Hero2 isDark={isDark}/>
    </div>
  )
}

export default Contact
