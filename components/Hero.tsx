import React from 'react';
import { Link } from 'react-router-dom';
import { TAGLINE, PRIMARY_CTA, SECONDARY_CTA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bio-cyan/30 bg-bio-cyan/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-bio-cyan animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-bio-cyan">System Online v2.4</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          Engineering <br/>
          <span className="font-normal text-white">Organic Intelligence</span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-gray-400 max-w-lg mb-12 font-light leading-relaxed">
          {TAGLINE} We simulate biological evolution to design therapeutics with clinical precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link to="/auth" className="
            group relative px-8 py-4 rounded-full 
            bg-white text-bio-teal font-medium 
            overflow-hidden transition-all hover:scale-[1.02]
          ">
            <span className="relative z-10">{PRIMARY_CTA}</span>
            <div className="absolute inset-0 bg-bio-cyan opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </Link>
          
          <Link to="/docs" className="
            px-8 py-4 rounded-full 
            border border-white/20 text-white 
            hover:bg-white/5 hover:border-white/40 
            transition-all hover:scale-[1.02]
          ">
            {SECONDARY_CTA}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;