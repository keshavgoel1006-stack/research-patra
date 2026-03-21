import React from 'react';
import Hero from '../components/Hero';
import LogoSlider from '../components/LogoSlider';
import Services from '../components/Services';
import Process from '../components/Process';
import Methodology from '../components/Methodology';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <Services />
      <Process />
      <Methodology/>
    </>
  );
};

export default Home;