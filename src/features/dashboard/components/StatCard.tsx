import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  emoji: string;
  isAccent?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, value, change, changeType = 'neutral', emoji, isAccent 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden p-6 rounded-[22px] border transition-all ${
        isAccent 
          ? 'bg-brown border-brown shadow-xl shadow-brown/15' 
          : 'bg-white border-sand shadow-sm hover:shadow-xl hover:shadow-ink/10'
      }`}
    >
      {/* Background Icon */}
      <span className={`absolute -right-4 -bottom-4 text-[64px] opacity-10 select-none ${isAccent ? 'text-white/20' : 'text-muted'}`}>
        {emoji}
      </span>

      <div className="flex flex-col relative z-10">
        <span className={`text-[10px] uppercase font-bold tracking-[0.15em] mb-2.5 ${isAccent ? 'text-white/40' : 'text-muted'}`}>
          {label}
        </span>
        
        <div className={`font-serif text-[34px] font-bold leading-none mb-2 tracking-tight ${isAccent ? 'text-white' : 'text-ink'}`}>
          {value}
        </div>

        {change && (
          <div className="flex items-center gap-1.5 mt-1">
            {changeType === 'up' && <TrendingUp className={`w-3.5 h-3.5 ${isAccent ? 'text-caramel/80' : 'text-forest'}`} />}
            {changeType === 'down' && <TrendingDown className="w-3.5 h-3.5 text-rust" />}
            {changeType === 'neutral' && <Minus className={`w-3.5 h-3.5 ${isAccent ? 'text-white/30' : 'text-muted'}`} />}
            <span className={`text-[11px] font-medium leading-none ${
              isAccent ? 'text-white/60' : 
              changeType === 'up' ? 'text-forest' : 
              changeType === 'down' ? 'text-rust' : 'text-muted'
            }`}>
              {change}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
