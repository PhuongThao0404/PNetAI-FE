import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white/50 py-16 px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="font-serif text-[26px] font-bold text-white mb-6">
            PNet<span className="text-caramel italic ml-0.5">AI</span>
          </div>
          <p className="text-[14px] leading-relaxed max-w-sm mb-6">
            The ultimate paradise for pets and their owners. Cherish every small moment.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-[13px] text-white font-bold uppercase tracking-widest mb-6">Shop</h4>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Food</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Accessories</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Homes & Beds</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Toys</a>
        </div>

        <div className="space-y-4">
          <h4 className="text-[13px] text-white font-bold uppercase tracking-widest mb-6">Services</h4>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Spa & Grooming</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Hotel</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Training</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Consultations</a>
        </div>

        <div className="space-y-4">
          <h4 className="text-[13px] text-white font-bold uppercase tracking-widest mb-6">Support</h4>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Contact Us</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Return Policy</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">FAQ</a>
          <a href="#" className="block text-[14px] hover:text-caramel transition-colors">Forum</a>
        </div>
      </div>

      <div className="pt-10 border-t border-white/10 text-center text-[13px] opacity-40">
        © 2025 PNetAI. Love pets — Love life 🐾
      </div>
    </footer>
  );
};
