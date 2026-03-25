import type { Service, Feature, Product, SpaService, Testimonial } from '../types';

export const SERVICES: Service[] = [
  { icon: '🛁', name: 'Bath & Hygiene', desc: 'From 80,000đ' },
  { icon: '✂️', name: 'Haircut', desc: 'From 150,000đ' },
  { icon: '💅', name: 'Nails & Ears', desc: 'From 50,000đ' },
  { icon: '🦷', name: 'Dental Care', desc: 'From 120,000đ' },
  { icon: '🏨', name: 'Stay', desc: 'From 200,000đ/night' },
];

export const FEATURE_LIST: Feature[] = [
  {
    title: "Premium Care",
    description: "Personalized attention tailored to your pet's unique personality and needs.",
    icon: "✨",
  },
  {
    title: "Eco-Friendly",
    description: "Sustainability at the heart of everything we choose for our furry friends.",
    icon: "🌿",
  },
  {
    title: "AI Integration",
    description: "Smart monitoring and health tracking powered by PNetAI technology.",
    icon: "🧠",
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Royal Canin Maxi Adult 15kg',
    category: 'Thức ăn cao cấp',
    price: '890.000đ',
    oldPrice: '1.100.000đ',
    stars: '★★★★★',
    icon: '🐕',
    badge: 'Mới về',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Dây dắt da bò handmade',
    category: 'Phụ kiện dạo chơi',
    price: '320.000đ',
    stars: '★★★★☆',
    icon: '🦮',
  },
  {
    id: 3,
    name: 'Cần câu lông vũ tương tác',
    category: 'Đồ chơi mèo',
    price: '145.000đ',
    oldPrice: '200.000đ',
    stars: '★★★★★',
    icon: '🐱',
  },
  {
    id: 4,
    name: 'Giường tròn lông siêu mềm',
    category: 'Nhà & Giường ngủ',
    price: '480.000đ',
    stars: '★★★★★',
    icon: '🛌',
  },
  {
    id: 5,
    name: 'Sữa tắm thảo mộc Lavender',
    category: 'Vệ sinh & Chăm sóc',
    price: '210.000đ',
    stars: '★★★★☆',
    icon: '🧴',
  },
];

export const SPA_SERVICES: SpaService[] = [
  { icon: '🛁', name: 'Bath & Shampoo', price: 'From 80k' },
  { icon: '✂️', name: 'Haircut', price: 'From 150k' },
  { icon: '💅', name: 'Nails & Ears', price: 'From 50k' },
  { icon: '⭐', name: 'Full Package', price: 'From 350k' },
];

export const TIME_SLOTS = ['8:00', '9:30', '11:00', '13:30', '15:00', '16:30'];

export const REVIEWS: Testimonial[] = [
  {
    quote: '"PNetAI has completely changed how I care for Mochi. From booking a spa to buying food, everything is so convenient and reliable!"',
    author: 'Nguyễn Minh Châu',
    pet: "Mochi's owner — Poodle, 2 years old",
    avatar: '👩',
    isBig: true,
  },
  {
    quote: '"Super fast delivery, 100% authentic products. My cat Bong loves the interactive toy!"',
    author: 'Trần Hoàng Nam',
    pet: "Bong's owner — British Shorthair",
    avatar: '👨',
  },
  {
    quote: '"The spa staff are very gentle, my dog is no longer afraid of bathing!"',
    author: 'Lê Thị Hoa',
    pet: "Butter's owner — Golden Retriever",
    avatar: '👩',
  },
];
