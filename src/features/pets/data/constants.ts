import { Dog, Cat, Rabbit, Bird, Rat, Plus } from 'lucide-react';

export const PET_SPECIES = [
  { id: 'dog', icon: Dog, label: 'Dog' },
  { id: 'cat', icon: Cat, label: 'Cat' },
  { id: 'rabbit', icon: Rabbit, label: 'Rabbit' },
  { id: 'bird', icon: Bird, label: 'Bird' },
  { id: 'mouse', icon: Rat, label: 'Mouse' },
  { id: 'other', icon: Plus, label: 'Other' },
] as const;

export const GENDER_OPTIONS = ['Male', 'Female'] as const;

export const DEFAULT_PET_IMAGE = 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800';

export const MEDICAL_HISTORY_IMAGE = 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200';

export const PET_STATUS = {
  HEALTHY: 'Healthy',
  SICK: 'Sick',
  AWAY: 'Away',
} as const;
