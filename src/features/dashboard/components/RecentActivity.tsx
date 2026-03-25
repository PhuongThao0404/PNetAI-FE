import React from 'react';
import { History } from 'lucide-react';

import { ACTIVITIES } from '../data/mockData';

export const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/5 transition-all">
      <div className="p-6 px-8 flex items-center justify-between border-b border-sand/50">
        <h3 className="font-serif text-[18px] font-bold text-ink tracking-tight flex items-center gap-2">
          <History className="w-5 h-5 text-ink/40" />
          Recent Activity
        </h3>
        <button className="text-[13px] font-semibold text-caramel hover:underline hover:underline-offset-4 decoration-current transition-all border-0 bg-transparent cursor-pointer">
          View all history →
        </button>
      </div>

      <div className="p-6 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="flex gap-4 py-4 group hover:bg-cream/40 px-3 -mx-3 rounded-2xl transition-all">
              <div className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center text-[15px] ring-4 ring-white shadow-sm transition-transform group-hover:scale-110 ${
                activity.type === 'spa' ? 'bg-blush/20 text-blush' : 
                activity.type === 'shop' ? 'bg-caramel/15 text-caramel' : 
                activity.type === 'pet' ? 'bg-sage/20 text-sage' : 'bg-brown/10 text-brown'
              }`}>
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div 
                  className="text-[13px] text-ink/80 leading-relaxed font-normal" 
                  dangerouslySetInnerHTML={{ __html: activity.message }} 
                />
                <div className="text-[10px] text-muted font-bold tracking-wider uppercase mt-1.5 opacity-60">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
