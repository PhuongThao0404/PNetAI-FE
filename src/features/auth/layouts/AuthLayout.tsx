import React from 'react';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex selection:bg-caramel/20 bg-cream">
      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden bg-ink p-12 flex-col justify-between">
        {/* Blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(ellipse,rgba(196,145,58,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full bg-[radial-gradient(ellipse,rgba(126,161,123,0.12)_0%,transparent_70%)] pointer-events-none" />

        {/* Logo */}
        <a className="font-serif text-[28px] font-bold text-white no-underline tracking-tight z-10" href="/">
          PNet<span className="text-caramel italic font-normal ml-0.5">AI</span>
        </a>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[clamp(36px,3.5vw,54px)] font-bold leading-[1.05] tracking-tight text-white mb-5">
              Where love<br />begins with<br /><em className="text-caramel italic font-normal">the smallest</em> things.
            </h2>
            <p className="text-[15px] text-white/45 font-light leading-[1.7] max-w-[320px] mb-10">
              Over 12,000 pet owners trust PNetAI to care for their four-legged companions.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 max-w-[360px]">
              <p className="font-serif text-[17px] italic text-white/85 leading-[1.5] mb-4">
                "PNetAI completely changed how I care for Mochi. Booking a spa session takes only 30 seconds!"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-caramel to-blush flex items-center justify-center text-lg">👩</div>
                <div>
                  <div className="text-[13px] font-medium text-white/80">Minh Chau Nguyen</div>
                  <div className="text-[11px] text-white/35">Owner of Mochi — 2yo Poodle</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 z-10">
          <div>
            <div className="font-serif text-[28px] font-bold text-white">12k+</div>
            <div className="text-[12px] text-white/40 uppercase tracking-widest">Customers</div>
          </div>
          <div>
            <div className="font-serif text-[28px] font-bold text-white">4.9★</div>
            <div className="text-[12px] text-white/40 uppercase tracking-widest">Rating</div>
          </div>
          <div>
            <div className="font-serif text-[28px] font-bold text-white">98%</div>
            <div className="text-[12px] text-white/40 uppercase tracking-widest">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-cream">
        {/* Grainy Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBic2VEYXNlRnJlcXVlbmN5PSIwLjY1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] opacity-[0.022] pointer-events-none z-50" />
        
        <div className="w-full max-w-md z-10">
          {children}
        </div>
      </div>
    </div>
  );
};
