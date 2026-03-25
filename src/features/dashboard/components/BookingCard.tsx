import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CalendarCheck, CheckCircle2 } from 'lucide-react';

import { UPCOMING_BOOKINGS, HISTORY_BOOKINGS } from '../data/mockData';

export const BookingCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming');
  const data = activeTab === 'upcoming' ? UPCOMING_BOOKINGS : HISTORY_BOOKINGS;

  return (
    <div className="bg-white rounded-[24px] border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/5 transition-all h-full">
      <div className="p-6 px-8 flex items-center justify-between border-b border-sand/50">
        <h3 className="font-serif text-[18px] font-bold text-ink tracking-tight flex items-center gap-2">
          <CalendarCheck className="w-5 h-5 text-caramel/80" />
          Appointments
        </h3>
        <button className="text-[13px] font-semibold text-caramel hover:underline hover:underline-offset-4 decoration-current transition-all border-0 bg-transparent cursor-pointer">
          View all →
        </button>
      </div>

      <div className="p-6 px-8">
        <div className="flex gap-1.5 mb-6 p-1 bg-warm/30 rounded-full w-fit">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all border-0 cursor-pointer ${activeTab === 'upcoming' ? 'bg-ink text-white shadow-lg shadow-ink/15' : 'text-muted hover:text-brown bg-transparent'}`}
          >
            Upcoming
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all border-0 cursor-pointer ${activeTab === 'history' ? 'bg-ink text-white shadow-lg shadow-ink/15' : 'text-muted hover:text-brown bg-transparent'}`}
          >
            History
          </button>
        </div>

        <div className="space-y-1">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              {data.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 py-4 border-b border-sand/20 last:border-none group cursor-pointer transition-all hover:bg-cream/40 px-3 -mx-3 rounded-2xl"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0 transition-transform group-hover:scale-110 ${
                    item.type === 'bath' ? 'bg-blush/15 text-blush' : 
                    item.type === 'groom' ? 'bg-caramel/10 text-caramel' : 'bg-sage/15 text-sage'
                  }`}>
                    {item.thumb}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-ink text-[14px] leading-tight mb-1">{item.service}</div>
                    <div className="text-[10px] text-muted flex items-center gap-1.5 uppercase font-bold tracking-wider opacity-60">
                      {item.pet} • {item.staff}
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0 flex flex-col items-end gap-1">
                    <div className="text-[13px] font-bold text-brown leading-none">{item.date}</div>
                    <div className="text-[10px] text-muted font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </div>
                    
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mt-2 shadow-sm ${
                      item.status === 'confirmed' ? 'bg-forest/10 text-forest' : 
                      item.status === 'pending' ? 'bg-caramel/10 text-caramel' : 'bg-muted/10 text-muted'
                    }`}>
                      {item.status === 'confirmed' && <CheckCircle2 className="w-2.5 h-2.5" />}
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
