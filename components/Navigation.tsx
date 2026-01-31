import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BRAND_NAME, PRIMARY_CTA } from '../constants';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
      <div className="
        flex items-center gap-8 
        bg-white/5 backdrop-blur-md 
        border border-white/10 
        px-6 py-3 rounded-full 
        shadow-[0_0_20px_rgba(0,0,0,0.2)]
        transition-all duration-500 hover:bg-white/10
      ">
        <Link to="/" className="font-display font-bold tracking-widest text-white hover:text-bio-cyan transition-colors">
          {BRAND_NAME}
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#vision" onClick={handleScroll('vision')} className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">Vision</a>
          <a href="#science" onClick={handleScroll('science')} className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">Science</a>
          <a href="#platform" onClick={handleScroll('platform')} className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">Platform</a>
          <Link to="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">Docs</Link>
        </div>

        <Link to="/auth" className="
          hidden md:block
          px-5 py-2 
          bg-bio-cyan/10 
          border border-bio-cyan/50 
          text-bio-cyan text-xs font-semibold tracking-wider uppercase
          rounded-full 
          hover:bg-bio-cyan hover:text-bio-teal 
          transition-all duration-300
        ">
          {PRIMARY_CTA}
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;