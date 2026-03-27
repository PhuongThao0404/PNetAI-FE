export interface Booking {
  id: string;
  service: string;
  pet: string;
  staff: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'done';
  thumb: string;
  type: 'bath' | 'groom' | 'nail';
}


export interface Order {
  id: string;
  name: string;
  date: string;
  price: string;
  status: 'delivered' | 'shipping' | 'pending';
  thumb: string;
}

export interface Activity {
  id: string;
  type: 'spa' | 'shop' | 'pet' | 'social';
  message: string;
  time: string;
  icon: string;
}
