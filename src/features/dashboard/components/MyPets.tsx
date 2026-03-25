import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';

import { PETS } from '../data/mockData';

export const MyPets: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/5 transition-all">
      <div className="p-6 px-8 flex items-center justify-between border-b border-sand/50">
        <h3 className="font-serif text-[18px] font-bold text-ink tracking-tight flex items-center gap-2">
          <Heart className="w-5 h-5 text-rust/80" />
          My Pets
        </h3>
        <button className="text-[13px] font-semibold text-caramel hover:underline hover:underline-offset-4 decoration-current transition-all border-0 bg-transparent cursor-pointer">
          Manage Pets →
        </button>
      </div>

      <div className="p-6 px-8 h-full">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {PETS.map((pet) => (
            <motion.div 
              key={pet.id}
              whileHover={{ y: -4, borderColor: '#C4913A' }}
              className="flex-shrink-0 w-[160px] p-5 bg-cream border-[1.5px] border-sand rounded-[20px] text-center cursor-pointer transition-all hover:shadow-lg hover:shadow-caramel/10 group"
            >
              <span className="text-[44px] mb-2 block group-hover:scale-110 transition-transform">
                {pet.emoji}
              </span>
              <div className="font-serif font-bold text-ink text-[16px] mb-0.5 tracking-tight group-hover:text-caramel transition-colors">{pet.name}</div>
              <div className="text-[10px] text-muted font-medium mb-1 line-clamp-1">{pet.breed}</div>
              <div className="text-[11px] text-caramel font-bold tracking-wide uppercase mb-3">
                {pet.age} · {pet.gender}
              </div>
              
              <div className="flex items-center justify-center gap-1.5 font-bold text-[9px] uppercase tracking-widest text-forest bg-forest/5 py-1.5 rounded-full ring-1 ring-forest/10">
                <div className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                {pet.status}
              </div>
            </motion.div>
          ))}
          
          <button className="flex-shrink-0 w-[160px] p-5 bg-white border-[1.5px] border-dashed border-sand/80 rounded-[20px] flex flex-col items-center justify-center gap-2 text-muted hover:border-caramel hover:text-caramel hover:bg-caramel/5 transition-all duration-300 group cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-sand/20 flex items-center justify-center group-hover:bg-caramel/20 transition-colors">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider">Add Pet</span>
          </button>
        </div>
      </div>
    </div>
  );
};
