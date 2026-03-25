import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Plus, Gift, Award } from 'lucide-react';

const ACTIONS = [
  { label: 'Book Spa', sub: 'Spa & Grooming', icon: Sparkles, type: 'spa' },
  { label: 'Go Shopping', sub: 'Pet Store', icon: ShoppingBag, type: 'shop' },
  { label: 'Add Pet', sub: 'New Profile', icon: Plus, type: 'pet' },
  { label: 'Redeem', sub: '680 points', icon: Gift, type: 'reward' },
];

export const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/5 transition-all mb-4">
      <div className="p-6 px-8 flex items-center justify-between border-b border-sand/50">
        <h3 className="font-serif text-[18px] font-bold text-ink tracking-tight flex items-center gap-2">
          <Award className="w-5 h-5 text-caramel/80" />
          Quick Actions
        </h3>
      </div>

      <div className="p-6 px-8 h-full">
        <div className="grid grid-cols-2 gap-3">
          {ACTIONS.map((action) => (
            <motion.button 
              key={action.label}
              whileHover={{ y: -2, borderColor: '#C4913A' }}
              className="flex items-center gap-3 p-4 rounded-[18px] ring-1 ring-sand/30 bg-white text-left transition-all hover:bg-caramel/5 hover:shadow-lg hover:shadow-caramel/5 group border-0 cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center text-[18px] flex-shrink-0 transition-transform group-hover:scale-110 ${
                action.type === 'spa' ? 'bg-blush/15 text-blush' : 
                action.type === 'shop' ? 'bg-caramel/10 text-caramel' : 
                action.type === 'pet' ? 'bg-sage/15 text-sage' : 'bg-brown/10 text-brown'
              }`}>
                <action.icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-ink leading-tight mb-0.5">{action.label}</div>
                <div className="text-[9px] text-muted font-bold uppercase tracking-wider opacity-60">{action.sub}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const RewardCard: React.FC = () => {
  return (
    <div className="bg-ink rounded-[24px] p-7 py-8 relative overflow-hidden text-white shadow-xl shadow-ink/20 group cursor-pointer transition-all hover:scale-[1.02]">
      {/* Background Icon */}
      <span className="absolute -right-4 -bottom-4 text-[96px] opacity-10 select-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">🐾</span>
      
      <div className="relative z-10 flex flex-col h-full">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 mb-2.5">Your Member points</span>
        
        <div className="font-serif text-[42px] font-bold text-caramel tracking-tighter leading-none mb-2">
          680 <span className="text-sm font-serif italic text-white/50 tracking-normal">pts</span>
        </div>
        
        <p className="text-[11px] text-white/40 font-medium mb-5 leading-relaxed">
          Need <strong className="text-white/80">320 more points</strong> to reach <span className="text-caramel font-bold">Gold Tier</span>
        </p>
        
        <div className="w-full h-1.5 bg-white/10 rounded-full mb-2 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '68%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            className="h-full bg-caramel rounded-full shadow-[0_0_12px_rgba(196,145,58,0.5)]" 
          />
        </div>
        
        <div className="text-[9px] font-bold uppercase tracking-widest text-white/30 flex justify-between">
          <span>Silver</span>
          <span className="text-caramel">Gold (1,000 pts)</span>
        </div>
      </div>
    </div>
  );
};
