import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { PetProfile } from '../types';
import { 
  Plus, 
  Pencil, 
  ClipboardList, 
  Bath, 
  Syringe, 
  Cake, 
  Scale 
} from 'lucide-react';

interface PetCardProps {
  pet?: PetProfile;
  isAddCard?: boolean;
}

export const PetCard: React.FC<PetCardProps> = ({ pet, isAddCard }) => {
  const navigate = useNavigate();

  if (isAddCard) {
    return (
      <motion.div
        whileHover={{ y: -5, borderColor: '#C4913A' }}
        onClick={() => navigate('/pets/add')}
        className="h-full flex flex-col items-center justify-center gap-6 border-2 border-dashed border-sand/60 rounded-[32px] bg-white/40 cursor-pointer group transition-all duration-500 min-h-[420px]"
      >
        <div className="w-16 h-16 rounded-full bg-sand/20 flex items-center justify-center text-caramel group-hover:bg-caramel/20 transition-colors">
          <Plus className="w-8 h-8" />
        </div>
        <div className="px-8 text-center">
          <h3 className="text-2xl font-serif italic text-ink/40 group-hover:text-caramel transition-colors">
            Welcome a new member
          </h3>
          <p className="text-[14px] text-muted font-light mt-1">Add to your family collection</p>
        </div>
      </motion.div>
    );
  }

  if (!pet) return null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative flex flex-col bg-white border border-sand/40 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brown/10 transition-all duration-500 h-full ring-1 ring-sand/20"
    >
      {/* Top Banner section (Cream bg + Image) */}
      <div className="relative h-[220px] bg-gradient-to-b from-[#EFE6D5] to-[#F7F2E8] flex items-center justify-center p-8">
        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2 border border-sand/20">
          <div className={`w-2 h-2 rounded-full ${pet.status === 'Healthy' ? 'bg-forest' : 'bg-caramel'} animate-pulse`} />
          <span className="text-[11px] font-bold text-ink/80">{pet.status}</span>
        </div>

        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-700">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom info section (White bg) */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-3xl font-serif font-bold text-ink mb-1 group-hover:text-caramel transition-colors">
            {pet.name}
          </h3>
          <p className="text-[13px] text-muted font-medium opacity-70 capitalize">
            {pet.breed} · {pet.gender} · {pet.age}
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-warm/40 border border-sand/30 rounded-full text-[11px] font-semibold text-ink/70">
            <Scale className="w-3.5 h-3.5 text-caramel" />
            {pet.weight}kg
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-warm/40 border border-sand/30 rounded-full text-[11px] font-semibold text-ink/70">
            <Syringe className="w-3.5 h-3.5 text-caramel" />
            {pet.nextVaccine ? 'Vaccinated' : 'Verified'}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-warm/40 border border-sand/30 rounded-full text-[11px] font-semibold text-ink/70">
            <Cake className="w-3.5 h-3.5 text-caramel" />
            {pet.birthday}
          </div>
        </div>

        {/* Actions Row */}
        <div className="mt-auto grid grid-cols-3 gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); navigate(`/pets/edit/${pet.id}`); }}
            className="flex items-center justify-center gap-1.5 p-3 rounded-2xl border border-sand/40 bg-white hover:bg-cream hover:border-caramel transition-all text-muted hover:text-caramel group/btn"
          >
            <Pencil className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Edit</span>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); navigate(`/pets/${pet.id}`); }}
            className="flex items-center justify-center gap-1.5 p-3 rounded-2xl border border-sand/40 bg-white hover:bg-cream hover:border-caramel transition-all text-muted hover:text-caramel group/btn"
          >
            <ClipboardList className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Files</span>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); /* openBooking() */ }}
            className="flex items-center justify-center gap-1.5 p-3 rounded-2xl bg-brown hover:bg-ink text-white transition-all shadow-md active:scale-95 group/btn"
          >
            <Bath className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Book</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
