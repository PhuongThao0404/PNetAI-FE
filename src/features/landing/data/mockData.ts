import type { Service, Feature, Product, SpaService, Testimonial } from '../types';

export const SERVICES: Service[] = [
  { icon: '🛁', name: 'Bath & Hygiene', desc: 'From $5' },
  { icon: '✂️', name: 'Haircut', desc: 'From $10' },
  { icon: '💅', name: 'Nails & Ears', desc: 'From $3' },
  { icon: '🦷', name: 'Dental Care', desc: 'From $8' },
  { icon: '🏨', name: 'Stay', desc: 'From $15/night' },
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
    category: 'Premium Food',
    price: '$45.00',
    oldPrice: '$55.00',
    stars: '★★★★★',
    icon: '🐕',
    badge: 'New',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Handmade Leather Leash',
    category: 'Walking Accessories',
    price: '$16.00',
    stars: '★★★★☆',
    icon: '🦮',
  },
  {
    id: 3,
    name: 'Interactive Feather Wand',
    category: 'Cat Toys',
    price: '$7.50',
    oldPrice: '$10.00',
    stars: '★★★★★',
    icon: '🐱',
  },
  {
    id: 4,
    name: 'Ultra-Soft Round Bed',
    category: 'Home & Sleep',
    price: '$24.00',
    stars: '★★★★★',
    icon: '🛌',
  },
  {
    id: 5,
    name: 'Lavender Herbal Shampoo',
    category: 'Hygiene & Care',
    price: '$10.50',
    stars: '★★★★☆',
    icon: '🧴',
  },
];

export const SPA_SERVICES: SpaService[] = [
  { icon: '🛁', name: 'Bath & Shampoo', price: 'From $8' },
  { icon: '✂️', name: 'Haircut', price: 'From $15' },
  { icon: '💅', name: 'Nails & Ears', price: 'From $5' },
  { icon: '⭐', name: 'Full Package', price: 'From $35' },
];

export const TIME_SLOTS = ['8:00', '9:30', '11:00', '13:30', '15:00', '16:30'];

export const REVIEWS: Testimonial[] = [
  {
    quote: '"PNetAI has completely changed how I care for Mochi. From booking a spa to buying food, everything is so convenient and reliable!"',
    author: 'Alice Nguyen',
    pet: "Mochi's owner — Poodle, 2 years old",
    avatar: '👩',
    isBig: true,
  },
  {
    quote: '"Super fast delivery, 100% authentic products. My cat Bong loves the interactive toy!"',
    author: 'Tomas Tran',
    pet: "Bong's owner — British Shorthair",
    avatar: '👨',
  },
  {
    quote: '"The spa staff are very gentle, my dog is no longer afraid of bathing!"',
    author: 'Sarah Le',
    pet: "Butter's owner — Golden Retriever",
    avatar: '👩',
  },
];
export const SPA_FORM_OPTIONS = [
  { id: 'bath', label: 'Basic Bath' },
  { id: 'groom', label: 'Grooming' },
  { id: 'full', label: 'Full Spa Package' },
];

export const MOCK_BOOKING_PETS = [
  { id: 'mochi', label: 'Mochi — Poodle' },
  { id: 'bong', label: 'Bong — British Shorthair' },
];

export const PRODUCT_DETAIL_MOCK = {
  id: 1,
  name: 'Royal Canin Maxi Adult',
  category: 'Premium Food',
  price: '$45.00',
  oldPrice: '$55.00',
  stars: '★★★★★',
  reviews: '4.9 — 238 reviews',
  description: 'Premium dry food for large adult dogs from 15 months to 5 years old. Specially formulated to support joint health and maintain ideal weight. Rich in high-quality, easy-to-digest protein.',
  sizes: ['4kg', '10kg', '15kg'],
  types: ['Large Breed', 'Medium Breed', 'Small Breed'],
  thumbs: ['🐕', '📦', '✨', '📋'],
  features: [
    { icon: '🚚', text: 'Free shipping from $50' },
    { icon: '↩️', text: '30nday returns' },
    { icon: '✓', text: 'Authentic item' },
  ]
};
