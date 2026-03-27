import type { Booking, Order, Activity } from '../types';

export const UPCOMING_BOOKINGS: Booking[] = [
  { id: '1', service: 'Full Spa & Grooming', pet: 'Mochi', staff: 'Alice', date: 'Thu, April 10', time: '09:30 AM', status: 'confirmed', thumb: '🛁', type: 'bath' },
  { id: '2', service: 'Haircut & Styling', pet: 'Bong', staff: 'Thomas', date: 'Mon, April 14', time: '02:00 PM', status: 'pending', thumb: '✂️', type: 'groom' },
  { id: '3', service: 'Nail Clipping & Ear Cleaning', pet: 'Mochi', staff: 'Alice', date: 'Fri, April 18', time: '10:00 AM', status: 'confirmed', thumb: '💅', type: 'nail' },
];

export const HISTORY_BOOKINGS: Booking[] = [
  { id: '4', service: 'Premium Spa Package', pet: 'Mochi', staff: 'Alice', date: 'Mar 22, 2025', time: '$35.00', status: 'done', thumb: '🛁', type: 'bath' },
  { id: '5', service: 'Bath & Haircut', pet: 'Bong', staff: 'Thomas', date: 'Mar 08, 2025', time: '$23.00', status: 'done', thumb: '✂️', type: 'groom' },
];

export const ORDERS: Order[] = [
  { id: 'ORD-2847', name: 'Royal Canin Maxi Adult 15kg', date: 'Mar 28, 2025', price: '$89.00', status: 'delivered', thumb: '🐕' },
  { id: 'ORD-2831', name: 'Herbal Lavender Pet Shampoo', date: 'Mar 25, 2025', price: '$21.00', status: 'shipping', thumb: '🧴' },
  { id: 'ORD-2795', name: 'Interactive Feather Cat Toy', date: 'Mar 18, 2025', price: '$14.50', status: 'delivered', thumb: '🐱' },
];

export const ACTIVITIES: Activity[] = [
  { id: '1', type: 'spa', message: '<strong>Mochi</strong> completed a full spa session — $35.00', time: 'Mar 22, 2025 · 10:30 AM', icon: '🛁' },
  { id: '2', type: 'shop', message: 'Order <strong>#ORD-2847</strong> delivered successfully', time: 'Mar 28, 2025 · 02:15 PM', icon: '📦' },
  { id: '4', type: 'pet', message: 'Added <strong>Bong</strong> to your pet list', time: 'Mar 15, 2025', icon: '🐾' },
  { id: '5', type: 'spa', message: '<strong>Bong</strong> grooming — Rated 4 stars', time: 'Mar 08, 2025 · 02:00 PM', icon: '✂️' },
  { id: '6', type: 'shop', message: 'Added <strong>Interactive Feather Cat Toy</strong> to cart', time: 'Mar 16, 2025', icon: '🛍️' },
];

export const GREETINGS = {
  morning: 'Good Morning ☀️',
  afternoon: 'Good Afternoon 🌤️',
  evening: 'Good Evening 🌙',
};

export const BANNER_ALERTS = {
  mochi: {
    pet: 'Mochi',
    action: 'bath today!',
    desc: "It's been 18 days since Mochi's last grooming session. Keep them fresh and fluffy!",
    icon: '🛁'
  }
};
