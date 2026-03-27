import type { PetProfile } from '../types';

export const MOCK_PETS: PetProfile[] = [
  {
    id: 'PN-001',
    name: 'Mochi',
    species: 'dog',
    breed: 'Toy Poodle',
    age: '2 years',
    gender: 'Female',
    weight: 4.5,
    birthday: '2023-04-12',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    status: 'Healthy',
    lastSpa: '2 days ago',
    nextVaccine: 'Oct 15, 2025',
    weightHistory: [
      { date: 'Jan', weight: 4.0 },
      { date: 'Feb', weight: 4.2 },
      { date: 'Mar', weight: 4.4 },
      { date: 'Apr', weight: 4.5 },
    ],
    careTimeline: [
      { id: '101', type: 'spa', title: 'Full Spa & Grooming', date: '2 days ago', desc: 'Managed by Ngoc Anh' },
      { id: '102', type: 'purchase', title: 'Royal Canin Adult 15kg', date: '5 days ago' },
      { id: '103', type: 'vaccine', title: 'Rabies Vaccination', date: 'Mar 12, 2025' },
    ],
    vaccinations: [
      { id: 'v1', name: 'Rabies', date: '2024-03-12', nextDueDate: '2025-03-12', doctorName: 'Dr. Emily', status: 'Completed' },
      { id: 'v2', name: 'Parvovirus', date: '2024-01-15', nextDueDate: '2025-01-15', doctorName: 'Dr. Emily', status: 'Completed' },
      { id: 'v3', name: 'Distemper', date: '2024-01-15', nextDueDate: '2025-01-15', doctorName: 'Dr. Emily', status: 'Completed' },
    ]
  },
  {
    id: 'PN-002',
    name: 'Bong',
    species: 'cat',
    breed: 'British Shorthair',
    age: '3 years',
    gender: 'Male',
    weight: 5.2,
    birthday: '2022-08-20',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
    status: 'Upcoming Spa',
    lastSpa: '1 month ago',
    nextVaccine: 'Nov 20, 2025',
    weightHistory: [
      { date: 'Jan', weight: 5.0 },
      { date: 'Feb', weight: 5.1 },
      { date: 'Mar', weight: 5.2 },
    ],
    careTimeline: [
      { id: '201', type: 'spa', title: 'Basic Bath', date: '1 month ago' },
      { id: '202', type: 'checkup', title: 'Annual Health Check', date: 'Jan 15, 2025' },
    ],
    vaccinations: [
      { id: 'v4', name: 'Feline Viral Rhinotracheitis', date: '2024-02-20', nextDueDate: '2025-02-20', doctorName: 'Dr. Sarah', status: 'Completed' },
      { id: 'v5', name: 'Calicivirus', date: '2024-02-20', nextDueDate: '2025-02-20', doctorName: 'Dr. Sarah', status: 'Completed' },
    ]
  }
];
