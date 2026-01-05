
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  category: 'Luxury' | 'Adventure' | 'Historical' | 'Business';
}
