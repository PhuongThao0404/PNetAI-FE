import type { Booking, Pet, Order, Activity } from '../types';
import { Calendar, Package, Heart, Star } from 'lucide-react';

export const UPCOMING_BOOKINGS: Booking[] = [
  { id: '1', service: 'Full Spa & Grooming', pet: 'Mochi', staff: 'Ngoc Anh', date: 'Thu, April 10', time: '09:30 AM', status: 'confirmed', thumb: '🛁', type: 'bath' },
  { id: '2', service: 'Haircut & Styling', pet: 'Bong', staff: 'Tuan', date: 'Mon, April 14', time: '02:00 PM', status: 'pending', thumb: '✂️', type: 'groom' },
  { id: '3', service: 'Nail Clipping & Ear Clean', pet: 'Mochi', staff: 'Ngoc Anh', date: 'Fri, April 18', time: '10:00 AM', status: 'confirmed', thumb: '💅', type: 'nail' },
];

export const HISTORY_BOOKINGS: Booking[] = [
  { id: '4', service: 'Premium Spa Package', pet: 'Mochi', staff: 'Ngoc Anh', date: 'Mar 22, 2025', time: '350.000đ', status: 'done', thumb: '🛁', type: 'bath' },
  { id: '5', service: 'Bath & Haircut', pet: 'Bong', staff: 'Tuan', date: 'Mar 08, 2025', time: '230.000đ', status: 'done', thumb: '✂️', type: 'groom' },
];

export const PETS: Pet[] = [
  { id: '1', name: 'Mochi', breed: 'Poodle toy', age: '2 years', gender: 'Female', emoji: '🐕', status: 'Healthy' },
  { id: '2', name: 'Bong', breed: 'British Shorthair', age: '3 years', gender: 'Male', emoji: '🐱', status: 'Healthy' },
];

export const ORDERS: Order[] = [
  { id: 'ORD-2847', name: 'Royal Canin Maxi Adult 15kg', date: 'Mar 28, 2025', price: '890.000đ', status: 'delivered', thumb: '🐕' },
  { id: 'ORD-2831', name: 'Herbal Lavender Pet Shampoo', date: 'Mar 25, 2025', price: '210.000đ', status: 'shipping', thumb: '🧴' },
  { id: 'ORD-2795', name: 'Interactive Feather Cat Toy', date: 'Mar 18, 2025', price: '145.000đ', status: 'delivered', thumb: '🐱' },
];

export const ACTIVITIES: Activity[] = [
  { id: '1', type: 'spa', message: '<strong>Mochi</strong> completed a full spa session — 350k', time: 'Mar 22, 2025 · 10:30 AM', icon: '🛁' },
  { id: '2', type: 'shop', message: 'Order <strong>#ORD-2847</strong> delivered successfully', time: 'Mar 28, 2025 · 02:15 PM', icon: '📦' },
  { id: '3', type: 'reward', message: 'You earned <strong>+80 points</strong> from your last purchase', time: 'Mar 28, 2025', icon: '⭐' },
  { id: '4', type: 'pet', message: 'Added <strong>Bong</strong> to your pet list', time: 'Mar 15, 2025', icon: '🐾' },
  { id: '5', type: 'spa', message: '<strong>Bong</strong> grooming — Rated 4 stars', time: 'Mar 08, 2025 · 02:00 PM', icon: '✂️' },
  { id: '6', type: 'shop', message: 'Added <strong>Interactive Feather Cat Toy</strong> to cart', time: 'Mar 16, 2025', icon: '🛍️' },
];

export const GREETINGS = {
  morning: 'Good Morning ☀️',
  afternoon: 'Good Afternoon 🌤️',
  evening: 'Good Evening 🌙',
};

export const DASHBOARD_STATS = [
  { label: 'Monthly Bookings', value: '3', change: '↑ 1 vs last month', type: 'up' as const, icon: Calendar, emoji: '📅' },
  { label: 'Active Orders', value: '7', change: '↑ 2 new orders', type: 'up' as const, icon: Package, emoji: '📦' },
  { label: 'My Pets', value: '2', change: 'Mochi & Bong', type: 'neutral' as const, icon: Heart, emoji: '🐾' },
  { label: 'Reward Points', value: '680', change: 'Redeem rewards →', type: 'neutral' as const, icon: Star, emoji: '⭐', isAccent: true },
];
