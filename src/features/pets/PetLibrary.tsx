import React from 'react';
import { motion } from 'framer-motion';
import { usePets } from './hooks/usePets';
import { PetCard } from './components/PetCard';
import { DashboardLayout } from '../dashboard/components/DashboardLayout';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export const PetLibrary: React.FC = () => {
  const { pets } = usePets();

  return (
    <DashboardLayout>
      <>
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-caramel" />
            <span className="text-[12px] uppercase tracking-[0.2em] text-caramel font-bold">The Family Archive</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-serif font-black text-ink leading-[1.1] mb-8">
            My <span className="text-caramel italic font-normal">Pet Library</span>
          </h1>
          <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
            A digital sanctuary for your beloved companions. Each passport stores their history, health records, and shared memories.
          </p>
        </header>

        {/* Standard Grid for Uniform Card Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div key={pet.id} className="h-full">
              <PetCard pet={pet} />
            </div>
          ))}

          <div className="h-full">
            <PetCard isAddCard />
          </div>

          {/* Library Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 lg:col-span-3 bg-ink rounded-[40px] p-12 text-white overflow-hidden relative mt-8"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-caramel/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md">
                <h3 className="text-3xl font-serif font-bold mb-4 italic">Library Insight</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Your family has completed <span className="text-caramel font-bold">12 care sessions</span> this month. All family members are up to date on vaccinations.
                </p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110">
                    <ShieldCheck className="w-8 h-8 text-caramel" />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest opacity-60">Verified</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110">
                    <Heart className="w-8 h-8 text-blush" />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest opacity-60">Healthy</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110">
                    <GraduationCap className="w-8 h-8 text-sage" />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest opacity-60">Smart AI</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </>
    </DashboardLayout>
  );
};
