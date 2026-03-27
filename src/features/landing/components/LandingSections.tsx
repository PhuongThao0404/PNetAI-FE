import React, { useState } from 'react';
import { 
  SERVICES, 
  FEATURE_LIST, 
  PRODUCTS, 
  SPA_SERVICES, 
  REVIEWS,
  TIME_SLOTS,
  SPA_FORM_OPTIONS,
  MOCK_BOOKING_PETS
} from '../data/mockData';

// --- ServicesStrip Component ---
export const ServicesStrip: React.FC = () => {
  return (
    <div className="bg-forest py-8 px-12 flex justify-around items-center gap-6 flex-wrap">
      {SERVICES.map((service, index) => (
        <div key={index} className="flex items-center gap-3 text-white">
          <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-xl">
            {service.icon}
          </div>
          <div>
            <div className="text-[15px] font-medium leading-tight">{service.name}</div>
            <div className="text-[12px] opacity-60 mt-0.5">{service.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Features Component ---
export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-warm/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURE_LIST.map((feature, idx) => (
          <div 
            key={idx}
            className="p-10 bg-white rounded-3xl border border-accent-caramel/10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 group"
          >
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {feature.icon}
            </div>
            <h3 className="text-3xl mb-4 italic text-slate-800">
              {feature.title}
            </h3>
            <p className="text-lg font-light text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-accent-caramel font-serif italic text-2xl">
          "The world is a friendlier place with paws."
        </p>
      </div>
    </section>
  );
};

// --- FeaturedProducts Component ---
export const FeaturedProducts: React.FC<{ onProductClick?: (id: number) => void }> = ({ onProductClick }) => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-caramel" />
            <span className="text-xs uppercase tracking-[0.12em] text-caramel font-semibold">Featured Products</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight">
            Selected <span className="text-caramel italic font-normal">exclusively</span><br />for your beloved pet
          </h2>
        </div>
        <a href="#" className="text-brown font-medium text-[15px] flex items-center gap-1.5 hover:gap-2.5 transition-all">
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-3xl overflow-hidden border border-sand group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brown/10
              ${product.isFeatured ? 'row-span-2' : ''}`}
            onClick={() => onProductClick?.(product.id)}
          >
            <div className={`relative bg-warm flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]
              ${product.isFeatured ? 'h-[340px] text-[100px]' : 'aspect-square text-[80px]'}`}>
              {product.icon}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-forest text-white px-3 py-1 rounded-full text-[11px] font-semibold">
                  New Arrival
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-widest text-muted mb-1.5">{product.category}</div>
              <div className="text-caramel text-xs mb-2">{product.stars}</div>
              <h3 className="text-xl font-serif font-bold text-ink leading-tight mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-bold text-brown">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-[13px] text-muted line-through ml-2">{product.oldPrice}</span>
                  )}
                </div>
                <button className="w-9 h-9 bg-brown text-white rounded-full flex items-center justify-center text-xl transition-all hover:bg-ink hover:rotate-90">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- SpaBooking Component ---
export const SpaBooking: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState('9:30');

  return (
    <div className="bg-warm rounded-[40px] mx-6 lg:mx-24 px-8 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-px bg-caramel" />
          <span className="text-xs uppercase tracking-[0.12em] text-caramel font-semibold">Book a Spa</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-ink leading-tight mb-4">
          Care for your pet<br /><span className="text-caramel italic font-normal">as you wish</span>
        </h2>
        <p className="text-muted text-[16px] font-light max-w-md leading-relaxed mb-10">
          Flexible schedules, dedicated staff, clean & safe environment.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {SPA_SERVICES.map((s, idx) => (
            <div key={idx} className="bg-white border border-sand p-5 rounded-2xl cursor-pointer hover:border-caramel hover:-translate-y-0.5 transition-all group">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
              <div className="text-[14px] font-semibold text-ink">{s.name}</div>
              <div className="text-[13px] text-caramel font-medium">{s.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-ink rounded-[28px] p-10 text-white shadow-2xl">
        <h3 className="text-2xl font-serif font-semibold mb-8">Quick Booking</h3>
        
        <div className="space-y-5">
          <div>
            <label className="block text-[11px] opacity-60 uppercase tracking-widest mb-2">Service</label>
            <select className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-xl outline-none focus:border-caramel transition-colors appearance-none">
              {SPA_FORM_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.id} className="text-ink">{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] opacity-60 uppercase tracking-widest mb-2">Your Pet</label>
            <select className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-xl outline-none focus:border-caramel transition-colors appearance-none">
              {MOCK_BOOKING_PETS.map(pet => (
                <option key={pet.id} value={pet.id} className="text-ink">{pet.label}</option>
              ))}
              <option className="text-ink">+ Add new pet</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] opacity-60 uppercase tracking-widest mb-2">Appointment Date</label>
              <input type="date" className="w-full bg-white/10 border border-white/15 text-white p-3 rounded-xl outline-none focus:border-caramel transition-colors" defaultValue="2025-04-10" />
            </div>
            <div>
              <label className="block text-[11px] opacity-60 uppercase tracking-widest mb-2">Select Time</label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`text-[11px] p-2 rounded-lg border border-white/15 transition-all
                      ${selectedSlot === slot ? 'bg-caramel border-caramel' : 'bg-white/5 hover:bg-white/10 opacity-70 hover:opacity-100'}`}
                    disabled={slot === '16:30'}
                    style={slot === '16:30' ? { opacity: 0.3, cursor: 'not-allowed' } : {}}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-caramel hover:bg-caramel/90 text-white py-4 rounded-2xl font-semibold mt-10 transition-all hover:-translate-y-0.5 shadow-lg shadow-caramel/20">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

// --- Testimonials Component ---
export const Testimonials: React.FC = () => {
  return (
    <section className="bg-ink py-24 px-6 lg:px-24 text-white overflow-hidden relative">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-caramel" />
            <span className="text-xs uppercase tracking-[0.12em] text-caramel font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
            What our <span className="text-caramel italic font-normal">customers say</span> about us
          </h2>
        </div>
        <p className="text-white/50 text-[16px] font-light max-w-sm">
          Over 2,000 5-star reviews from pet owners nationwide.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {REVIEWS.map((r, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 border border-white/10 transition-all hover:bg-white/10 group
              ${r.isBig ? 'lg:col-span-2 bg-caramel/15 border-caramel/30' : 'bg-white/5'}`}
          >
            <div className="text-caramel text-sm mb-4">★★★★★</div>
            <p className={`font-serif italic opacity-90 leading-tight mb-8
              ${r.isBig ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
              {r.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-caramel to-blush flex items-center justify-center text-xl">
                {r.avatar}
              </div>
              <div>
                <div className="text-[14px] font-semibold">{r.author}</div>
                <div className="text-[12px] opacity-40">{r.pet}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Newsletter Component ---
export const Newsletter: React.FC = () => {
  return (
    <div className="bg-warm rounded-[40px] mx-6 lg:mx-24 px-8 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
      <div className="max-w-md">
        <h2 className="text-4xl font-serif font-bold text-ink leading-[1.15] mb-4">
          Receive <br /><span className="text-caramel italic font-normal">exclusive offers</span> every week
        </h2>
        <p className="text-muted text-[15px] font-light">
          Care tips, discount vouchers, and the latest news from PNetAI.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full lg:min-w-[400px]">
        <input 
          type="email" 
          placeholder="Your email address..." 
          className="flex-1 bg-white border border-sand px-6 py-4 rounded-full outline-none focus:border-caramel transition-all text-ink"
        />
        <button className="bg-brown hover:bg-ink text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md">
          Subscribe →
        </button>
      </div>
    </div>
  );
};
