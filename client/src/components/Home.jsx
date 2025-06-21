import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import LogoBanner from './LogoBanner'
import Skill from './Skill'
const Home = () => {
  const [isDark, setIsDark] = useState(false);
    useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#000000' : '#F7F8FC';
    document.body.style.color = isDark ? '#F7F8FC' : '#000000';
  }, [isDark]);
  return (
    <div>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark}/>
      <br /><br /><br /><br /><br />
      <LogoBanner isDark={isDark}/>
      <Skill/>
      <div>

      </div>
    </div>
  )
}

export default Home
