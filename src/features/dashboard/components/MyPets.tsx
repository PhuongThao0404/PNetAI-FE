import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePets } from '../../pets/hooks/usePets';
import type { PetProfile } from '../../pets/types';

const DashboardPetCard: React.FC<{ pet: PetProfile; onClick: () => void }> = ({ pet, onClick }) => (
  <motion.div 
    onClick={onClick}
    whileHover={{ y: -4, borderColor: '#C4913A' }}
    className="flex-shrink-0 w-[190px] h-[280px] p-6 bg-cream border-[1.5px] border-sand rounded-[24px] text-center cursor-pointer transition-all hover:shadow-xl hover:shadow-caramel/10 group flex flex-col items-center justify-between"
  >
    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
      <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
    </div>
    
    <div className="flex-1 flex flex-col items-center justify-center min-w-0 w-full px-1">
      <div className="font-serif font-bold text-ink text-[17px] mb-0.5 tracking-tight group-hover:text-caramel transition-colors truncate w-full">{pet.name}</div>
      <div className="text-[10px] text-muted font-medium mb-1 line-clamp-1 opacity-70 italic">{pet.breed}</div>
      <div className="text-[11px] text-caramel font-bold tracking-wide uppercase">
        {pet.age} · {pet.gender}
      </div>
    </div>
    
    <div className="w-full flex items-center justify-center gap-1.5 font-bold text-[9px] uppercase tracking-widest text-forest bg-forest/5 py-2 rounded-full ring-1 ring-forest/10 mt-2">
      <div className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
      {pet.status}
    </div>
  </motion.div>
);

const AddPetCard: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <motion.div 
    whileHover={{ y: -4, borderColor: '#C4913A' }}
    onClick={onClick}
    className="flex-shrink-0 w-[190px] h-[280px] p-6 bg-white border-[1.5px] border-dashed border-sand/80 rounded-[24px] flex flex-col items-center justify-center text-muted hover:border-caramel hover:text-caramel hover:bg-caramel/5 transition-all duration-300 group cursor-pointer"
  >
    <div className="w-16 h-16 mb-4 rounded-full bg-sand/20 flex items-center justify-center group-hover:bg-caramel/20 transition-colors flex-shrink-0">
      <Plus className="w-8 h-8" />
    </div>
    <div className="font-serif font-bold text-ink/40 text-[17px] mb-0.5 tracking-tight group-hover:text-caramel transition-colors italic">Add Member</div>
    <div className="text-[10px] font-medium opacity-60">Create New Passport</div>
  </motion.div>
);

export const MyPets: React.FC = () => {
  const { pets } = usePets();
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[24px] border border-sand overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ink/5 transition-all h-[480px] flex flex-col">
      <div className="p-6 px-8 flex items-center justify-between border-b border-sand/50 flex-shrink-0">
        <h3 className="font-serif text-[18px] font-bold text-ink tracking-tight flex items-center gap-2">
          <Heart className="w-5 h-5 text-rust/80" />
          My Pets
        </h3>
        <button 
          onClick={() => navigate('/pets')}
          className="text-[13px] font-semibold text-caramel hover:underline hover:underline-offset-4 decoration-current transition-all border-0 bg-transparent cursor-pointer"
        >
          Manage Pets →
        </button>
      </div>

      <div className="p-6 px-8 flex-1 flex items-center justify-center">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide py-2">
          {pets.map((pet) => (
            <DashboardPetCard 
              key={pet.id} 
              pet={pet} 
              onClick={() => navigate(`/pets/${pet.id}`)} 
            />
          ))}
          <AddPetCard onClick={() => navigate('/pets/add')} />
        </div>
      </div>
    </div>
  );
};
