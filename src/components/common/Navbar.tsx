import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Search, Bell, Star, ShoppingBag, Calendar, Footprints, Grid, Package, Gift, LogOut } from 'lucide-react';
import { useAuth } from '../../features/auth';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [greeting] = useState(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good Morning ☀️';
    if (h < 18) return 'Good Afternoon 🌤️';
    return 'Good Evening 🌙';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const authLinks = [
    { label: 'My Pets', icon: Footprints, path: '/pets' },
    { label: 'Appointments', icon: Calendar, path: '/dashboard/appointments' },
    { label: 'Store', icon: ShoppingBag, path: '/shop' },
    { label: 'Orders', icon: Package, path: '/dashboard/orders' },
    { label: 'Rewards', icon: Gift, path: '/dashboard/rewards' },
  ];

  const guestLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Shop', path: '/shop' },
    { label: 'Community', path: '/community' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-8 lg:px-12 py-4 flex items-center justify-between
        ${isScrolled || isAuthenticated
          ? 'bg-cream/90 backdrop-blur-xl border-b border-sand/50 shadow-sm py-3.5' 
          : 'bg-transparent py-5'}`}
    >
      {/* Container for alignment */}
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between gap-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-8 flex-shrink-0">
          <Link to="/" className="text-[26px] font-serif leading-none flex items-center group cursor-pointer no-underline">
            <span className="text-brown font-bold tracking-tighter">PNet</span>
            <span className="text-caramel italic font-normal ml-0.5">AI</span>
          </Link>
          
          {isAuthenticated && (
            <div className="h-6 w-[1.5px] bg-sand/60 hidden xl:block" />
          )}
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold tracking-tight transition-all relative group ${
                  location.pathname === '/dashboard' ? 'text-caramel bg-caramel/5' : 'text-muted hover:text-ink'
                }`}
              >
                <Grid className="w-4 h-4" />
                Dashboard
                {location.pathname === '/dashboard' && (
                  <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-caramel rounded-full" />
                )}
              </Link>
              {authLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold tracking-tight transition-all relative group ${
                    location.pathname === link.path ? 'text-caramel bg-caramel/5' : 'text-muted hover:text-ink'
                  }`}
                >
                  <link.icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div layoutId="nav-dot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-caramel rounded-full" />
                  )}
                </Link>
              ))}
            </>
          ) : (
            guestLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="px-6 py-2 text-[14px] font-bold text-muted hover:text-brown transition-colors relative group no-underline"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-caramel rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))
          )}
        </div>

        {/* Right Actions Section */}
        <div className="flex items-center gap-3 lg:gap-5">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {/* Topbar Info (Greeting + Notifications) */}
              <div className="hidden md:flex flex-col text-right mr-1">
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-muted leading-none mb-1">{greeting}</span>
                <span className="text-[13px] font-serif font-bold text-ink leading-none whitespace-nowrap">
                  Hi, <em className="text-caramel italic font-normal">{user?.name || user?.email?.split('@')[0] || 'User'}</em>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button className="w-9 h-9 rounded-full bg-white border border-sand hover:border-caramel hover:shadow-lg hover:shadow-ink/5 transition-all group flex items-center justify-center relative cursor-pointer outline-none">
                  <Search className="w-4 h-4 text-muted group-hover:text-caramel transition-colors" />
                </button>
                <button className="w-9 h-9 rounded-full bg-white border border-sand hover:border-caramel hover:shadow-lg hover:shadow-ink/5 transition-all group flex items-center justify-center relative cursor-pointer outline-none">
                  <Bell className="w-4 h-4 text-muted group-hover:text-caramel transition-colors" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-rust rounded-full ring-2 ring-cream" />
                </button>
              </div>

              <div className="h-8 w-[1px] bg-sand/60 mx-1 hidden sm:block" />

              {/* User Menu */}
              <div className="relative group/user flex items-center gap-3 pl-1">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-caramel to-blush flex items-center justify-center font-serif text-white font-bold ring-2 ring-white/10 group-hover/user:ring-caramel transition-all cursor-pointer">
                  {user?.name?.[0] || user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
                
                {/* Minimalist Dropdown placeholder */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-caramel flex items-center gap-1 leading-none mb-1">
                    <Star className="w-2.5 h-2.5 fill-caramel" /> Silver
                  </span>
                  <button 
                    onClick={logout}
                    className="text-[11px] text-muted hover:text-red-500 font-bold bg-transparent border-0 p-0 text-left cursor-pointer transition-colors flex items-center gap-1"
                  >
                    Logout <LogOut className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => navigate('/login')}
                className="text-[13px] font-bold text-brown border border-sand px-6 py-2.5 rounded-full hover:bg-warm transition-all cursor-pointer bg-transparent"
              >
                Log In
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="text-[13px] font-bold text-white px-7 py-2.5 bg-forest rounded-full hover:bg-brown shadow-sm shadow-forest/20 hover:-translate-y-px transition-all duration-300 border-0 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
