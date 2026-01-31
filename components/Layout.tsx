import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import OrbitalBackground from './OrbitalBackground';
import NoiseOverlay from './NoiseOverlay';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-bio-teal text-white selection:bg-bio-magenta selection:text-white">
      {/* Layer 0 & 1: Backgrounds & Noise - Persistent across routes */}
      <OrbitalBackground />
      <NoiseOverlay />

      {/* Layer 2: Main Content */}
      <main className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <div className="flex-grow">
          <Outlet />
        </div>
        
        <Footer />
      </main>

      {/* Vignette Overlay for atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,26,26,0.8)_100%)]"></div>
    </div>
  );
};

export default Layout;