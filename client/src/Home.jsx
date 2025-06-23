import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Home/Hero';
const Home = () => {
  return (
    <div>
      <NavBar /> {/* ✅ Correctly used */}
      <Hero/>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
