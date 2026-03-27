export interface WeightPoint {
  date: string;
  weight: number;
}

export interface CareEvent {
  id: string;
  type: 'spa' | 'vaccine' | 'checkup' | 'purchase' | 'pet';
  title: string;
  date: string;
  desc?: string;
}

export interface VaccinationRecord {
  id: string;
  name: string;
  date: string;
  nextDueDate: string;
  doctorName: string;
  status: 'Completed' | 'Upcoming';
}

export interface PetProfile {
  id: string;
  name: string;
  species: 'dog' | 'cat' | 'rabbit' | 'bird' | 'mouse' | 'other';
  breed: string;
  age: string;
  gender: 'Male' | 'Female' | 'Other';
  weight: number;
  birthday: string;
  image: string;
  status: 'Healthy' | 'Needs Attention' | 'Upcoming Spa';
  isSpayed?: boolean;
  isMicrochipped?: boolean;
  allergies?: string;
  medicalNotes?: string;
  personality?: string;
  lastSpa?: string;
  nextVaccine?: string;
  weightHistory: WeightPoint[];
  careTimeline: CareEvent[];
  vaccinations?: VaccinationRecord[];
}
