import { useContext } from 'react';
import { PetContext, type PetContextType } from '../context/PetContextDefinition';

export const usePets = (): PetContextType => {
  const context = useContext(PetContext);
  if (context === undefined) {
    throw new Error('usePets must be used within a PetProvider');
  }
  return context;
};
