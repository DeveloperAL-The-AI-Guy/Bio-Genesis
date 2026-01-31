import React, { useState } from 'react';
import { CONTACT_HEADER, EMAIL_CAPTURE_LABEL } from '../constants';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [active, setActive] = useState(false);

  return (
    <section className="py-40 px-6 flex justify-center">
      <div className="w-full max-w-2xl text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-12 text-white">{CONTACT_HEADER}</h2>
        
        <form 
          className="relative group"
          onSubmit={(e) => { e.preventDefault(); setActive(true); }}
        >
          <div className={`
            absolute -inset-1 bg-gradient-to-r from-bio-cyan to-bio-magenta rounded-full opacity-0 blur transition duration-1000 group-hover:opacity-30
            ${active ? 'opacity-50 blur-lg' : ''}
          `}></div>
          
          <div className="relative flex flex-col sm:flex-row bg-bio-teal rounded-full p-2 border border-white/10 focus-within:border-white/30 transition-colors">
            <input 
              type="email" 
              placeholder="Enter institutional email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-8 py-4 outline-none text-white placeholder-gray-600 font-sans"
            />
            <button 
              type="submit"
              className="
                px-8 py-4 rounded-full bg-white/5 
                text-white font-medium hover:bg-white/10 
                transition-colors border border-transparent
              "
            >
              {EMAIL_CAPTURE_LABEL}
            </button>
          </div>

          {active && (
            <div className="mt-4 text-bio-cyan text-sm font-mono animate-pulse">
              Request transmitted. Awaiting handshake...
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;