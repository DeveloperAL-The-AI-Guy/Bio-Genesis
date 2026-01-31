import React from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  { number: "01", title: "Sequence", description: "Ingest biological data via secure optical nodes." },
  { number: "02", title: "Synthesize", description: "AI models predict evolutionary pathways in milliseconds." },
  { number: "03", title: "Deploy", description: "Generate viable compounds for clinical trials." },
];

const SystemFlow: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-black/20" id="platform">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          
          {/* Connecting Line (Implied Flow) */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-start max-w-xs group">
              <div className="
                w-24 h-24 rounded-full bg-bio-teal border border-white/10 
                flex items-center justify-center mb-8 
                group-hover:border-bio-cyan/50 group-hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)] 
                transition-all duration-500
              ">
                <span className="font-mono text-bio-cyan/50 group-hover:text-bio-cyan transition-colors">{step.number}</span>
              </div>
              
              <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-bio-cyan/30 transition-colors">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SystemFlow;