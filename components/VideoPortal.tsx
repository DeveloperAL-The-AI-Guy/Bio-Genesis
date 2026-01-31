import React from 'react';
import { BG_VIDEO_URL } from '../constants';

const VideoPortal: React.FC = () => {
  return (
    <section className="relative py-24 flex justify-center px-4" id="vision">
      <div className="relative w-full max-w-5xl aspect-video">
        
        {/* Organic Mask Container */}
        <div className="absolute inset-0 z-10 pointer-events-none">
             {/* This SVG defines the organic blob shape, but for simplicity in a React component without external assets, 
                 we will use border-radius manipulation for a "soft" feel. */}
        </div>

        <div 
            className="w-full h-full overflow-hidden transition-all duration-1000 ease-in-out hover:scale-[1.01]"
            style={{
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                boxShadow: '0 0 100px -20px rgba(0, 240, 255, 0.1)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}
        >
          {/* Placeholder Video / Texture */}
          <div className="w-full h-full bg-bio-teal relative">
             <img 
                src={BG_VIDEO_URL} 
                alt="Microscopic view" 
                className="w-full h-full object-cover opacity-60 mix-blend-screen hover:opacity-80 transition-opacity duration-700"
             />
             
             {/* Overlay Text */}
             <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-bio-teal/90 to-transparent">
                <span className="font-display text-3xl md:text-5xl text-white/90 tracking-tighter">
                   In Vivo Simulation
                </span>
             </div>
          </div>
        </div>
        
        {/* Decorative orbital lines around the portal */}
        <div className="absolute -inset-10 border border-white/5 rounded-[50%] animate-[spin_20s_linear_infinite] pointer-events-none"></div>
        <div className="absolute -inset-20 border border-white/5 rounded-[45%] animate-[spin_30s_linear_infinite_reverse] pointer-events-none"></div>

      </div>
    </section>
  );
};

export default VideoPortal;