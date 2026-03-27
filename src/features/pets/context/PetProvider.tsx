import React, { useState, useEffect } from 'react';
import type { PetProfile } from '../types';
import { MOCK_PETS } from '../data/mockData';
import { PetContext } from './PetContextDefinition';

export const PetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load from localStorage, fallback to MOCK_PETS
  const [pets, setPets] = useState<PetProfile[]>(() => {
    const saved = localStorage.getItem('pnetai_pets');
    const loadedPets: PetProfile[] = saved ? JSON.parse(saved) : MOCK_PETS;

    // Deduplicate existing pets by ID to fix previous corrupted state
    const unique = new Map<string, PetProfile>();
    loadedPets.forEach(p => unique.set(p.id, p));
    return Array.from(unique.values());
  });

  useEffect(() => {
    localStorage.setItem('pnetai_pets', JSON.stringify(pets));
  }, [pets]);

  const calculateAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      years--;
    }
    const ageVal = Math.max(0, years);
    return `${ageVal} year${ageVal !== 1 ? 's' : ''}`;
  };

  const addPet = (newPetData: Omit<PetProfile, 'id' | 'careTimeline' | 'weightHistory' | 'age' | 'status'>) => {
    const age = calculateAge(newPetData.birthday);

    const maxIdNum = pets.reduce((max, p) => {
      const match = p.id.match(/PN-(\d+)/);
      return match ? Math.max(max, parseInt(match[1], 10)) : max;
    }, 0);

    const newPet: PetProfile = {
      ...newPetData,
      id: `PN-${(maxIdNum + 1).toString().padStart(3, '0')}`,
      age,
      status: 'Healthy',
      weightHistory: [{ date: 'Today', weight: newPetData.weight }],
      careTimeline: [
        { id: '1', type: 'pet', title: `Welcome ${newPetData.name}!`, date: 'Today', desc: 'Added to family library' }
      ]
    };

    setPets(prev => [...prev, newPet]);
  };

  const updatePet = (id: string, updatedFields: Partial<PetProfile>) => {
    setPets(prev => prev.map(p => {
      if (p.id === id) {
        const merged = { ...p, ...updatedFields };
        const newAge = updatedFields.birthday ? calculateAge(updatedFields.birthday) : p.age;

        return {
          ...merged,
          age: newAge,
          careTimeline: [
            { id: Math.random().toString(), type: 'checkup', title: 'Profile Updated', date: 'Today', desc: 'Metadata successfully modified' },
            ...p.careTimeline
          ]
        };
      }
      return p;
    }));
  };

  const deletePet = (id: string) => {
    setPets(prev => prev.filter(p => p.id !== id));
  };

  const getPetById = (id: string) => {
    return pets.find(p => p.id === id);
  };

  return (
    <PetContext.Provider value={{ pets, addPet, updatePet, deletePet, getPetById }}>
      {children}
    </PetContext.Provider>
  );
};

