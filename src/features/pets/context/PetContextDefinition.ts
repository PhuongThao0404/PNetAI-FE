import { createContext } from 'react';
import type { PetProfile } from '../types';

export interface PetContextType {
  pets: PetProfile[];
  addPet: (pet: Omit<PetProfile, 'id' | 'careTimeline' | 'weightHistory' | 'age' | 'status'>) => void;
  updatePet: (id: string, pet: Partial<PetProfile>) => void;
  deletePet: (id: string) => void;
  getPetById: (id: string) => PetProfile | undefined;
}

export const PetContext = createContext<PetContextType | undefined>(undefined);
