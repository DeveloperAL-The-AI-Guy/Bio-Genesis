import React, { useState } from 'react';

const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Access Denied: Node verification failed.");
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md relative">
        
        {/* Animated Background Ring */}
        <div className="absolute inset-0 bg-bio-cyan/5 blur-2xl rounded-full scale-150 animate-pulse-slow"></div>

        <div className="relative bg-bio-teal/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_-20px_rgba(0,0,0,0.5)]">
          
          <div className="mx-auto w-16 h-16 mb-8 rounded-full border border-bio-cyan/30 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-t border-bio-cyan animate-[spin_3s_linear_infinite]"></div>
            <div className="w-2 h-2 bg-bio-cyan rounded-full shadow-[0_0_10px_#00F0FF]"></div>
          </div>

          <h1 className="font-display text-3xl text-white mb-2">Identify Node</h1>
          <p className="font-sans text-sm text-gray-500 mb-8">Enter secure clearance code to access research partition.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative group">
              <input 
                type="password" 
                placeholder="ACCESS KEY"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-center text-white tracking-[0.3em] font-mono outline-none focus:border-bio-cyan/50 focus:bg-white/10 transition-all placeholder-white/20"
                required
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="
                w-full py-4 rounded-xl 
                bg-white text-bio-teal font-medium 
                hover:bg-bio-cyan transition-colors 
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden
              "
            >
              {loading ? (
                <span className="font-mono text-xs animate-pulse">VERIFYING BIOMETRICS...</span>
              ) : (
                "INITIALIZE HANDSHAKE"
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-gray-600 font-mono">
              UNAUTHORIZED ACCESS ATTEMPTS WILL BE LOGGED TO THE NEURAL LEDGER.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Auth;