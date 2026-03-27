import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DashboardLayout } from '../dashboard/components/DashboardLayout';
import { usePets } from './hooks/usePets';
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Calendar,
  Scale,
  ShieldCheck,
  History,
  FileText,
  Briefcase,
  Plus,
  Syringe,
  AlertTriangle,
  Fingerprint,
  Baby,
  Dna,
  VenetianMask,
  Stethoscope
} from 'lucide-react';

export const PetPassport: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPetById, pets, deletePet } = usePets();
  const pet = (id ? getPetById(id) : null) || pets[0];
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!pet) return null;

  const handleDelete = () => {
    if (pet.id) {
      deletePet(pet.id);
      navigate('/pets');
    }
  };

  return (
    <DashboardLayout>
      <>
        {/* Navigation & Header Actions */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/pets')}
            className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-muted hover:text-caramel transition-all border-0 bg-transparent cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </button>
          
          <div className="flex gap-3">
             <button 
               onClick={() => setShowDeleteModal(true)}
               className="p-3 rounded-xl border border-rust/20 text-rust hover:bg-rust hover:text-white transition-all shadow-sm"
             >
               <Trash2 className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Premium Banner Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#2D241E] rounded-[40px] p-10 lg:p-14 mb-10 overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-caramel/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-[40px] overflow-hidden border-[10px] border-white/10 shadow-2xl flex-shrink-0 bg-cream flex items-center justify-center">
              <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-serif font-black mb-2 leading-none uppercase tracking-tighter italic">
                {pet.name}
              </h1>
              <p className="text-xl text-white/50 font-medium mb-8 uppercase tracking-[0.2em]">
                {pet.breed} · {pet.gender}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <Badge icon={<Calendar className="w-4 h-4" />} label={`${pet.age} (${pet.birthday})`} />
                <Badge icon={<Scale className="w-4 h-4" />} label={`${pet.weight} kg`} />
                <Badge icon={<ShieldCheck className="w-4 h-4 text-forest" />} label="Verified ID" color="bg-forest/20" />
                <Badge icon={<History className="w-4 h-4" />} label={`Last Spa: ${pet.lastSpa || 'N/A'}`} />
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-caramel hover:bg-white hover:text-ink text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-xl shadow-caramel/20">
                  <Briefcase className="w-4 h-4" />
                  Book Spa Session
                </button>
                <button 
                  onClick={() => navigate(`/pets/edit/${pet.id}`)}
                  className="bg-white/10 hover:bg-white hover:text-ink border border-white/20 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                >
                  <Pencil className="w-4 h-4" />
                  Edit Profile
                </button>
                <button className="bg-white/10 hover:bg-white hover:text-ink border border-white/20 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all">
                  <FileText className="w-4 h-4" />
                  Export PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Information Hub */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="bg-white rounded-[40px] p-10 border border-sand shadow-sm h-full">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-serif font-black text-ink uppercase tracking-tight italic flex items-center gap-3">
                  <Fingerprint className="w-6 h-6 text-caramel/60" />
                  Passport Details
                </h3>
                <button 
                  onClick={() => navigate(`/pets/edit/${pet.id}`)}
                  className="w-10 h-10 rounded-full border border-sand flex items-center justify-center text-muted hover:text-caramel hover:border-caramel transition-all"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InfoCard icon={<Baby className="w-4 h-4" />} label="Name" value={pet.name} />
                <InfoCard icon={<Dna className="w-4 h-4" />} label="Species" value={pet.species} />
                <div className="col-span-2"><InfoCard icon={<VenetianMask className="w-4 h-4" />} label="Breed" value={pet.breed} full /></div>
                <div className="col-span-2"><InfoCard icon={<Fingerprint className="w-4 h-4" />} label="Birthday" value={pet.birthday} full /></div>
                <div className="col-span-2"><InfoCard icon={<ShieldCheck className="w-4 h-4" />} label="Spayed" value={pet.isSpayed ? 'Sterilized' : 'Intact'} full /></div>
              </div>

              <div className="mt-8 pt-8 border-t border-sand/50 space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-muted font-black block mb-3">Personality & Notes</label>
                  <div className="p-6 bg-cream/30 rounded-3xl text-sm leading-relaxed text-ink/80 italic border border-sand/20">
                    "{pet.personality || 'A wonderful companion with a unique personality.'}"
                  </div>
                </div>
                {pet.allergies && (
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted font-black block mb-3">Critical Allergies</label>
                    <div className="flex flex-wrap gap-2">
                      {pet.allergies.split(',').map((tag, i) => (
                        <span key={i} className="bg-rust/10 text-rust border border-rust/20 px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3" /> {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Health Milestone Tracking */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            <div className="bg-white rounded-[40px] p-10 border border-sand shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest/5 blur-3xl rounded-full translate-x-12 -translate-y-12" />
              
              <div className="flex items-center justify-between mb-10 relative z-10">
                <h3 className="text-2xl font-serif font-black text-ink uppercase tracking-tight italic flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-forest/40" />
                  Health Records
                </h3>
                <button className="bg-sand/10 hover:bg-sand/30 text-ink px-6 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Record
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 relative z-10">
                {pet.vaccinations?.map((v) => (
                  <motion.div 
                    key={v.id} 
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-6 p-6 rounded-[32px] bg-cream/20 border border-sand/40 hover:border-caramel/40 transition-all cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-1.5 h-full bg-sand/20 group-hover:bg-caramel transition-colors" />
                    
                    <div className="w-16 h-16 rounded-2xl bg-white border border-sand/60 flex items-center justify-center text-caramel shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                      <Syringe className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-serif font-black text-xl text-ink leading-tight truncate mr-4">{v.name}</h4>
                        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${v.status === 'Completed' ? 'bg-forest/10 text-forest' : 'bg-caramel/10 text-caramel animate-pulse'}`}>
                          {v.status}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-sand/30">
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-muted font-black mb-1">Last Visit</p>
                          <p className="text-xs font-bold text-ink">{v.date}</p>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-widest text-muted font-black mb-1">Next Cycle</p>
                          <p className="text-xs font-bold text-brown">{v.nextDueDate}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )) || <div className="text-center py-20 bg-cream/10 rounded-[40px] border border-dashed border-sand/40"><p className="text-muted italic text-sm">No documented vaccinations found.</p></div>}
              </div>
            </div>
          </div>

        </div>
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowDeleteModal(false)} className="absolute inset-0 bg-ink/60 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[40px] overflow-hidden shadow-2xl border border-sand p-10 text-center">
              <div className="w-20 h-20 bg-rust/10 rounded-full flex items-center justify-center mx-auto mb-8 text-rust"><AlertTriangle className="w-10 h-10" /></div>
              <h3 className="text-3xl font-serif font-bold text-ink mb-4">Are you sure?</h3>
              <p className="text-muted font-light leading-relaxed mb-10">Permanently delete <strong>{pet.name}</strong>'s passport? This cannot be undone.</p>
              <div className="space-y-4">
                <button onClick={handleDelete} className="w-full bg-rust text-white py-5 rounded-2xl font-bold text-sm transition-all hover:-translate-y-1 shadow-xl shadow-rust/20">Yes, Delete Passport</button>
                <button onClick={() => setShowDeleteModal(false)} className="w-full bg-white text-muted py-5 rounded-2xl font-bold text-sm transition-all border border-sand hover:text-ink">Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </>
    </DashboardLayout>
  );
};

// Helper Components
const Badge: React.FC<{ icon: React.ReactNode; label: string; color?: string }> = ({ icon, label, color }) => (
  <div className={`bg-white/10 border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-2 backdrop-blur-md ${color || ''}`}>
    <span className="opacity-60">{icon}</span>
    <span className="text-[13px] font-bold">{label}</span>
  </div>
);

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string; full?: boolean }> = ({ icon, label, value, full }) => (
  <div className={`p-5 rounded-3xl border border-sand/40 bg-cream/10 ${full ? 'flex items-center justify-between' : 'space-y-2'}`}>
    <div className="flex items-center gap-2 mb-1">
      <div className="text-caramel/40">{icon}</div>
      <span className="text-[9px] uppercase tracking-widest text-muted font-black">{label}</span>
    </div>
    <div className={`font-serif font-black text-ink capitalize ${full ? 'text-lg' : 'text-xl'}`}>{value}</div>
  </div>
);
