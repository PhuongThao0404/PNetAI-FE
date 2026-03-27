import React from 'react';
import { ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';

import { ORDERS } from '../data/mockData';

export const RecentOrders: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/5 transition-all h-[480px] flex flex-col">
      <div className="p-6 px-8 flex items-center justify-between border-b border-sand/50 flex-shrink-0">
        <h3 className="font-serif text-[18px] font-bold text-ink tracking-tight flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-brown/80" />
          Recent Orders
        </h3>
        <button className="text-[13px] font-semibold text-caramel hover:underline hover:underline-offset-4 decoration-current transition-all border-0 bg-transparent cursor-pointer">
          View all →
        </button>
      </div>

      <div className="p-6 px-8 flex-1 overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          {ORDERS.map((order) => (
            <div 
              key={order.id} 
              className="flex items-center gap-4 py-3 border-b border-sand/30 last:border-none group cursor-pointer transition-all hover:bg-cream/40 px-3 -mx-3 rounded-2xl"
            >
              <div className="w-12 h-12 bg-warm/50 rounded-xl flex items-center justify-center text-[24px] flex-shrink-0 transition-transform group-hover:scale-110">
                {order.thumb}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-ink text-[14px] mb-0.5 leading-tight truncate group-hover:text-caramel transition-colors">
                  {order.name}
                </div>
                <div className="text-[11px] text-muted font-bold tracking-wider uppercase opacity-60">
                  {order.id} • {order.date}
                </div>
              </div>

              <div className="text-right flex-shrink-0 flex flex-col items-end gap-1">
                <div className="text-[14px] font-bold text-brown leading-none">{order.price}</div>
                <div className={`text-[10px] uppercase font-bold tracking-[0.15em] flex items-center gap-1.5 mt-1 ${
                  order.status === 'delivered' ? 'text-forest' : 'text-caramel'
                }`}>
                  {order.status === 'delivered' ? (
                    <><CheckCircle2 className="w-2.5 h-2.5" /> Received</>
                  ) : (
                    <><Truck className="w-2.5 h-2.5 animate-bounce-horizontal" /> Shipping</>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
