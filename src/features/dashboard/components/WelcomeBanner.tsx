import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { useAuth } from '../../auth';
import { BANNER_ALERTS } from '../data/mockData';

export const WelcomeBanner: React.FC = () => {
  const { user } = useAuth();
  const displayName = user?.name || user?.email?.split('@')[0] || 'Friend';
  const alert = BANNER_ALERTS.mochi;

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden p-8 px-9 rounded-[24px] bg-gradient-to-br from-warm to-blush/20 border border-sand/50 mb-7 flex items-center justify-between shadow-sm"
    >
      {/* Decorative Paws */}
      <div className="absolute -right-6 -bottom-6 text-[100px] opacity-5 select-none rotate-12">🐾</div>

      <div className="flex-1 relative z-10">
        <div className="flex items-center gap-2 text-caramel font-bold text-[10px] uppercase tracking-widest mb-2.5">
          <Sparkles className="w-3.5 h-3.5 fill-caramel" />
          Welcome back, {displayName}!
        </div>
        <h2 className="font-serif text-[clamp(20px,2vw,24px)] font-bold text-ink mb-1 tracking-tight leading-tight">
          {alert.pet} needs a <em className="text-caramel italic font-normal underline decoration-caramel/30 underline-offset-4">{alert.action}</em>
        </h2>
        <p className="text-sm text-muted font-light leading-relaxed max-w-sm">
          {alert.desc}
        </p>
      </div>

      <div className="flex items-center gap-6 relative z-10">
        <div className="text-[52px] drop-shadow-sm select-none animate-floating">{alert.icon}</div>
        <button className="bg-brown hover:bg-ink text-white px-7 py-3.5 rounded-full font-sans text-xs font-bold shadow-lg shadow-brown/15 transition-all hover:-translate-y-1 flex items-center gap-2 group border-0 cursor-pointer">
          Book Spa Now
          <Calendar className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.section>
  );
};
