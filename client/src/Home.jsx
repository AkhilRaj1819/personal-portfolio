import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero1 from './components/Home/Hero1';
import Banner from './components/Home/Banner';
const Home = () => {
  const [isDark, setIsDark] = useState(false);
      useEffect(() => {
      document.body.style.backgroundColor = isDark ? '#000000' : '#F7F8FC';
      document.body.style.color = isDark ? '#F7F8FC' : '#000000';
    }, [isDark]);
  return (
    <div>
      <NavBar isDark={isDark} setIsDark={setIsDark} /> 
      <Hero1 isDark={isDark}/>
      <div className='lg:mt-[60px]'>
      <Banner isDark={isDark}/>
       </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
