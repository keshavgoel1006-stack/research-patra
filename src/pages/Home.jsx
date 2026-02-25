import React from 'react';
import Hero from '../components/Hero';
import LogoSlider from '../components/LogoSlider';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <Services />
      <Process />
      <Testimonials />
    </>
  );
};

export default Home;