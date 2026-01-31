import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "98.4%", label: "Precision", description: "Target acquisition accuracy" },
  { value: "<0.2s", label: "Latency", description: "Real-time molecular folding" },
  { value: "14k+", label: "Genomes", description: "Synthesized daily" },
];

const ProofLoop: React.FC = () => {
  return (
    <section className="relative py-32 px-6" id="science">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-6 w-40 h-40 flex items-center justify-center">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-bio-cyan/30 transition-colors duration-700"></div>
                <div className="absolute inset-2 rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite]"></div>
                
                {/* Active Segment */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                   <circle 
                     cx="80" cy="80" r="78" 
                     stroke="url(#gradient)" 
                     strokeWidth="1" 
                     fill="transparent" 
                     className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                     strokeDasharray="490"
                     strokeDashoffset="100"
                   />
                   <defs>
                     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#001A1A" />
                       <stop offset="100%" stopColor="#00F0FF" />
                     </linearGradient>
                   </defs>
                </svg>

                <span className="font-display text-4xl font-light text-white group-hover:text-bio-cyan transition-colors duration-500">
                  {stat.value}
                </span>
              </div>
              
              <h3 className="font-sans font-medium text-lg text-white mb-2">{stat.label}</h3>
              <p className="font-sans text-sm text-gray-400 max-w-[200px]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofLoop;