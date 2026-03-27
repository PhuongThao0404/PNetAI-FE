import React, { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { DashboardLayout } from '../dashboard/components/DashboardLayout';
import { usePets } from './hooks/usePets';
import { 
  Camera, 
  Trash2, 
  User, 
  Clipboard, 
  Scale, 
  HeartPulse, 
  Save,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PET_SPECIES, DEFAULT_PET_IMAGE } from './data/constants';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  species: z.enum(['dog', 'cat', 'rabbit', 'bird', 'mouse', 'other']),
  breed: z.string().min(2, 'Breed is required'),
  birthday: z.string().min(1, 'Birthday is required'),
  gender: z.enum(['Male', 'Female', 'Other']),
  weight: z.number().min(0.1, 'Weight is required'),
  isSpayed: z.boolean(),
  allergies: z.string().optional(),
  medicalNotes: z.string().optional(),
  personality: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export const AddPetForm: React.FC = () => {
  const { id } = useParams();
  const { addPet, updatePet, getPetById, deletePet } = usePets();
  const isEdit = !!id;
  const existingPet = id ? getPetById(id) : null;
  const navigate = useNavigate();

  const [image, setImage] = useState<string | null>(existingPet?.image || null);
  const [allergyTags, setAllergyTags] = useState<string[]>([]);
  const [medTags, setMedTags] = useState<string[]>([]);
  const [showSpeciesDrop, setShowSpeciesDrop] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      species: 'dog',
      breed: '',
      birthday: '',
      gender: 'Male',
      weight: 0.1,
      isSpayed: false,
      allergies: '',
      medicalNotes: '',
      personality: '',
    }
  });

  useEffect(() => {
    if (existingPet) {
      reset({
        name: existingPet.name,
        species: existingPet.species as FormValues['species'],
        breed: existingPet.breed,
        birthday: existingPet.birthday,
        gender: existingPet.gender as FormValues['gender'],
        weight: existingPet.weight,
        isSpayed: existingPet.isSpayed || false,
        allergies: existingPet.allergies || '',
        medicalNotes: existingPet.medicalNotes || '',
        personality: existingPet.personality || '',
      });
      if (existingPet.image) setImage(existingPet.image);
      if (existingPet.allergies && typeof existingPet.allergies === 'string') {
        setAllergyTags(existingPet.allergies.split(',').map((s: string) => s.trim()).filter(Boolean));
      }
      if (existingPet.medicalNotes && typeof existingPet.medicalNotes === 'string') {
        setMedTags(existingPet.medicalNotes.split(',').map((s: string) => s.trim()).filter(Boolean));
      }
    }
  }, [existingPet, reset]);

  const species = watch('species');
  const gender = watch('gender');
  const isSpayed = watch('isSpayed');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>, tags: string[], setTags: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = e.currentTarget.value.trim();
      if (val && !tags.includes(val)) {
        setTags([...tags, val]);
        e.currentTarget.value = '';
      }
    }
  };

  const removeTag = (index: number, tags: string[], setTags: React.Dispatch<React.SetStateAction<string[]>>) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onFormSubmit: SubmitHandler<FormValues> = (data) => {
    const finalImage = image || DEFAULT_PET_IMAGE;
    const submissionData = {
      ...data,
      allergies: allergyTags.join(', '),
      medicalNotes: medTags.join(', '),
      image: finalImage,
    };

    if (isEdit && id) {
      updatePet(id, submissionData);
      toast.success('Passport updated! ✨');
    } else {
      addPet(submissionData);
      toast.success('Welcome to the family! 🐾');
    }
    navigate('/pets');
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-serif font-black text-ink">{isEdit ? 'Edit' : 'Create'} <span className="text-caramel italic font-normal">Pet Passport</span></h1>
        </header>
        <form onSubmit={handleSubmit(onFormSubmit)} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-[32px] p-6 border border-sand shadow-sm ring-1 ring-sand/20">
              <h3 className="font-serif font-bold text-lg mb-6 text-ink/80">Avatar</h3>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-cream border-2 border-dashed border-sand group transition-all hover:border-caramel mb-4 flex items-center justify-center">
                {image ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img src={image} className="w-full h-full object-cover" alt="Pet preview" />
                    <button type="button" onClick={() => setImage(null)} className="absolute top-2 right-2 bg-rust text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-center p-4">
                    <div className="w-12 h-12 bg-caramel/10 rounded-full flex items-center justify-center text-caramel mb-3 group-hover:scale-110 transition-transform"><Camera className="w-6 h-6" /></div>
                    <span className="text-[11px] uppercase tracking-widest font-black text-ink mb-1">Upload Photo</span>
                    <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-[32px] p-10 border border-sand shadow-sm ring-1 ring-sand/20 space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-8"><Clipboard className="w-5 h-5 text-caramel" /><h3 className="text-xl font-serif font-bold text-ink">Basic Information</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-1">
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Pet Name *</label>
                    <div className="relative group">
                      <input {...register('name')} placeholder="Mochi" className="w-full bg-cream border border-sand px-6 py-4 rounded-2xl outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all pr-12" />
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted/40 group-focus-within:text-caramel transition-colors" />
                    </div>
                    {errors.name && <p className="text-rust text-[10px] mt-2 font-bold uppercase">{errors.name.message}</p>}
                  </div>
                  <div className="md:col-span-1 border-0">
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Species *</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowSpeciesDrop(!showSpeciesDrop)}
                        className="w-full bg-cream border border-sand px-6 py-4 rounded-2xl flex items-center justify-between outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all text-sm font-medium"
                      >
                        <div className="flex items-center gap-3">
                          {species ? (
                            <>
                              {(() => {
                                const s = PET_SPECIES.find(x => x.id === species);
                                return (
                                  <>
                                    {s?.icon && <s.icon className="w-4 h-4 text-caramel/60" />}
                                    <span className="capitalize">{s?.label}</span>
                                  </>
                                );
                              })()}
                            </>
                          ) : <span className="text-muted/50 font-normal italic">Choose Species...</span>}
                        </div>
                        {showSpeciesDrop ? <ChevronUp className="w-4 h-4 text-muted/60" /> : <ChevronDown className="w-4 h-4 text-muted/60" />}
                      </button>

                      <AnimatePresence>
                        {showSpeciesDrop && (
                          <>
                            <div className="fixed inset-0 z-[60]" onClick={() => setShowSpeciesDrop(false)} />
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 4, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute top-full left-0 right-0 z-[70] bg-white border border-sand rounded-[32px] shadow-2xl overflow-hidden py-3"
                            >
                              {PET_SPECIES.map((s) => (
                                <button
                                  key={s.id}
                                  type="button"
                                  onClick={() => {
                                    setValue('species', s.id as FormValues['species']);
                                    setShowSpeciesDrop(false);
                                  }}
                                  className={`w-full flex items-center justify-between px-6 py-4 hover:bg-cream/50 transition-all text-sm group ${
                                    species === s.id ? 'bg-cream text-caramel font-bold' : 'text-muted'
                                  }`}
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                                      species === s.id ? 'bg-caramel text-white' : 'bg-cream/50 text-caramel group-hover:bg-white'
                                    }`}>
                                      <s.icon className="w-5 h-5" />
                                    </div>
                                    <span className="capitalize">{s.label}</span>
                                  </div>
                                  {species === s.id && (
                                    <div className="w-2 h-2 rounded-full bg-caramel shadow-lg shadow-caramel/40" />
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Breed</label>
                    <div className="relative group">
                      <input {...register('breed')} placeholder="Toy Poodle" className="w-full bg-cream border border-sand px-6 py-4 rounded-2xl outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all" />
                    </div>
                    {errors.breed && <p className="text-rust text-[10px] mt-2 font-bold uppercase">{errors.breed.message}</p>}
                  </div>
                </div>
              </section>
              <section>
                <div className="flex items-center gap-3 mb-8"><User className="w-5 h-5 text-caramel" /><h3 className="text-xl font-serif font-bold text-ink">Gender & Birthday</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div><label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Gender *</label><div className="flex gap-2 p-1.5 bg-cream border border-sand rounded-2xl">{(['Female', 'Male', 'Other'] as const).map((g) => (<button key={g} type="button" onClick={() => setValue('gender', g)} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${gender === g ? 'bg-brown text-white shadow-lg' : 'text-muted hover:text-ink hover:bg-white/50'}`}>{g}</button>))}</div></div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Birthday *</label>
                    <div className="relative group">
                      <input type="date" {...register('birthday')} className="w-full bg-cream border border-sand px-6 py-4 rounded-2xl outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all text-sm font-medium" />
                      {/* Note: Standard HTML5 date inputs have their own calendars, we just styled the box */}
                    </div>
                    {errors.birthday && <p className="text-rust text-[10px] mt-2 font-bold uppercase">{errors.birthday.message}</p>}
                  </div>
                </div>
              </section>
              <section>
                <div className="flex items-center gap-3 mb-8"><Scale className="w-5 h-5 text-caramel" /><h3 className="text-xl font-serif font-bold text-ink">Physical Status</h3></div>
                <div className="space-y-10">
                  <div className="md:col-span-1">
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Weight *</label>
                    <div className="relative group">
                      <input 
                        type="number" 
                        step="0.1"
                        {...register('weight', { valueAsNumber: true })} 
                        placeholder="0.0" 
                        className="w-full bg-cream border border-sand px-6 py-4 rounded-2xl outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all font-medium pr-16" 
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-muted/60 pointer-events-none">kg</div>
                    </div>
                    {errors.weight && <p className="text-rust text-[10px] mt-2 font-bold uppercase">{errors.weight.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2"><label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Spayed?</label><div className="flex gap-2 p-1.5 bg-cream border border-sand rounded-2xl"><button type="button" onClick={() => setValue('isSpayed', true)} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${isSpayed ? 'bg-brown text-white shadow-lg' : 'text-muted'}`}>Yes</button><button type="button" onClick={() => setValue('isSpayed', false)} className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${!isSpayed ? 'bg-brown text-white shadow-lg' : 'text-muted'}`}>No</button></div></div>
                  </div>
                </div>
              </section>
              <section>
                <div className="flex items-center gap-3 mb-8"><HeartPulse className="w-5 h-5 text-caramel" /><h3 className="text-xl font-serif font-bold text-ink">Health & Care</h3></div>
                <div className="space-y-10">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Allergies</label>
                    <div className="bg-cream border border-sand p-3 rounded-2xl min-h-[56px] flex flex-wrap gap-2 cursor-text focus-within:border-caramel" onClick={() => document.getElementById('allergy-input')?.focus()}>
                      {allergyTags.map((tag, i) => (<span key={i} className="inline-flex items-center gap-1.5 bg-white border border-sand px-3 py-1.5 rounded-xl text-[11px] font-bold text-ink shadow-sm group">⚠️ {tag}<X className="w-3 h-3 text-muted hover:text-rust cursor-pointer" onClick={(e) => { e.stopPropagation(); removeTag(i, allergyTags, setAllergyTags); }} /></span>))}
                      <input id="allergy-input" placeholder={allergyTags.length === 0 ? "Type and Enter to add..." : ""} onKeyDown={(e) => handleAddTag(e, allergyTags, setAllergyTags)} className="bg-transparent border-none outline-none flex-1 text-sm min-w-[120px] py-1 text-ink" />
                    </div>
                    <div className="text-[10px] text-muted mt-2 font-medium italic">Enter food allergies, grooming products, etc., then press Enter</div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Medical History / Medications</label>
                    <div className="bg-cream border border-sand p-3 rounded-2xl min-h-[56px] flex flex-wrap gap-2 cursor-text focus-within:border-caramel" onClick={() => document.getElementById('med-input')?.focus()}>
                      {medTags.map((tag, i) => (<span key={i} className="inline-flex items-center gap-1.5 bg-white border border-sand px-3 py-1.5 rounded-xl text-[11px] font-bold text-ink shadow-sm group">💊 {tag}<X className="w-3 h-3 text-muted hover:text-rust cursor-pointer" onClick={(e) => { e.stopPropagation(); removeTag(i, medTags, setMedTags); }} /></span>))}
                      <input id="med-input" placeholder={medTags.length === 0 ? "e.g. Ear infection, taking Apoquel..." : ""} onKeyDown={(e) => handleAddTag(e, medTags, setMedTags)} className="bg-transparent border-none outline-none flex-1 text-sm min-w-[120px] py-1 text-ink" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-muted font-black mb-3">Personality & Notes for Staff</label>
                    <textarea {...register('personality')} rows={4} placeholder="e.g. Anxious with loud noises, loves belly rubs before bath, not good with strangers..." className="w-full bg-cream border border-sand px-6 py-4 rounded-2xl outline-none focus:border-caramel transition-all resize-none text-ink font-medium leading-relaxed" />
                  </div>
                </div>
              </section>
              <div className="pt-8 border-t border-sand flex items-center justify-between">
                <div className="flex gap-4"><button type="button" onClick={() => navigate('/pets')} className="px-8 py-4 rounded-2xl border border-sand text-muted font-bold text-xs uppercase tracking-widest">Cancel</button>{isEdit && (<button type="button" onClick={() => setShowDeleteModal(true)} className="px-8 py-4 rounded-2xl border border-rust/30 text-rust font-bold text-xs uppercase tracking-widest">Delete</button>)}</div>
                <button type="submit" className="bg-brown hover:bg-ink text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-xl shadow-brown/20"><Save className="w-4 h-4" />{isEdit ? 'Save Changes' : 'Create Passport'}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ink/60 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[40px] overflow-hidden shadow-2xl border border-sand p-10 text-center">
              <div className="w-20 h-20 bg-rust/10 rounded-full flex items-center justify-center mx-auto mb-8 text-rust"><Trash2 className="w-10 h-10" /></div>
              <h3 className="text-3xl font-serif font-bold text-ink mb-4">Are you sure?</h3>
              <p className="text-muted font-light leading-relaxed mb-10">Permanently delete this pet's passport? This cannot be undone.</p>
              <div className="space-y-4">
                <button onClick={() => { deletePet(id!); navigate('/pets'); toast.success('Passport deleted'); }} className="w-full bg-rust text-white py-5 rounded-2xl font-bold text-sm transition-all hover:-translate-y-1 shadow-xl shadow-rust/20">Yes, Delete Passport</button>
                <button onClick={() => setShowDeleteModal(false)} className="w-full bg-white text-muted py-5 rounded-2xl font-bold text-sm transition-all border border-sand hover:text-ink">Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
};
