export interface Service {
  icon: string;
  name: string;
  desc: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  stars: string;
  icon: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface SpaService {
  icon: string;
  name: string;
  price: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  pet: string;
  avatar: string;
  isBig?: boolean;
}
