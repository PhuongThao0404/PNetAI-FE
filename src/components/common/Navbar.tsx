import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-12 py-5 flex items-center justify-between
        ${isScrolled 
          ? 'bg-warm/88 backdrop-blur-xl border-b border-accent-caramel/15 shadow-sm' 
          : 'bg-transparent'}`}
    >
      {/* Logo */}
      <Link to="/" className="text-[26px] font-serif leading-none flex items-center group cursor-pointer">
        <span className="text-brown font-bold tracking-tight">PNet</span>
        <span className="text-caramel italic font-normal ml-0.5">AI</span>
      </Link>

      {/* Nav Links */}
      <div className="flex gap-9 items-center translate-x-12">
        {['My Pets', 'Service', 'Shop', 'Blog'].map((link) => (
          <a
            key={link}
            href={`#`}
            className="font-sans text-[14px] font-medium text-muted hover:text-brown transition-colors relative group whitespace-nowrap"
          >
            {link}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-caramel rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/login')}
          className="font-sans text-[13px] font-bold text-brown border border-sand px-5 py-[9px] rounded-full hover:bg-warm transition-all"
        >
          Log In
        </button>
        <button 
          className="font-sans text-[13px] font-bold text-white px-[22px] py-[10px] bg-forest rounded-full hover:bg-brown hover:-translate-y-px transition-all duration-300 shadow-sm"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
