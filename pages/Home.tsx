import React from 'react';
import Hero from '../components/Hero';
import VideoPortal from '../components/VideoPortal';
import ProofLoop from '../components/ProofLoop';
import SystemFlow from '../components/SystemFlow';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <VideoPortal />
      <ProofLoop />
      <SystemFlow />
      <Contact />
    </>
  );
};

export default Home;