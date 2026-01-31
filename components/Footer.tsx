import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold tracking-widest text-white/40">
          {BRAND_NAME}
        </div>
        
        <div className="flex gap-8 text-sm text-gray-600">
          <Link to="/legal" className="hover:text-bio-cyan transition-colors">Privacy</Link>
          <Link to="/legal" className="hover:text-bio-cyan transition-colors">Terms</Link>
          <Link to="/" className="hover:text-bio-cyan transition-colors">System Status</Link>
        </div>

        <div className="text-xs text-gray-700 font-mono">
          © 2024 GENESIS SYSTEMS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;