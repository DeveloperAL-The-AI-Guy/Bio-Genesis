import React from 'react';

const Documentation: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Sidebar Nav */}
        <aside className="hidden lg:block space-y-8 sticky top-32 h-fit">
          <div className="space-y-4">
            <h3 className="font-display text-sm uppercase tracking-widest text-white/50">Core Protocol</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-400">
              <li className="text-bio-cyan border-l-2 border-bio-cyan pl-3">System Overview</li>
              <li className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-white/20 cursor-pointer">Architecture</li>
              <li className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-white/20 cursor-pointer">Authentication</li>
              <li className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-white/20 cursor-pointer">Rate Limits</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display text-sm uppercase tracking-widest text-white/50">Synthesis API</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-400">
              <li className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-white/20 cursor-pointer">Fold Prediction</li>
              <li className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-white/20 cursor-pointer">Sequence Generation</li>
              <li className="hover:text-white transition-colors pl-3 border-l-2 border-transparent hover:border-white/20 cursor-pointer">Error Handling</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          
          <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            
            <h1 className="font-display text-4xl mb-4">Bio-Genesis Protocol v2.4</h1>
            <p className="text-gray-400 leading-relaxed font-light text-lg mb-6">
              The Bio-Genesis API provides programmatic access to our evolutionary simulation engine, allowing research nodes to request molecular folding predictions and generative sequence synthesis in real-time.
            </p>
            
            <div className="flex items-center gap-3 text-xs font-mono text-bio-cyan bg-bio-cyan/5 border border-bio-cyan/20 p-3 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-bio-cyan animate-pulse"></span>
              SYSTEM STATUS: OPERATIONAL
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-2xl text-white">Authentication</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              All requests to the neural core must be authenticated via a Bearer token issued during the institutional handshake protocol.
            </p>
            
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
                <span className="text-xs font-mono text-gray-500">BASH</span>
                <span className="text-xs font-mono text-gray-500">SECURE</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <p className="text-gray-300">
                  <span className="text-bio-magenta">curl</span> -X POST https://api.biogenesis.io/v2/synthesize \<br/>
                  &nbsp;&nbsp;-H <span className="text-bio-cyan">"Authorization: Bearer &lt;GENOME_KEY&gt;"</span> \<br/>
                  &nbsp;&nbsp;-H "Content-Type: application/json" \<br/>
                  &nbsp;&nbsp;-d <span className="text-yellow-100">'{ "target": "protein_folding", "optimization": "maximum_stability" }'</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Documentation;