
import React from 'react';
import { 
  Plane, Globe, Briefcase, 
  Palmtree, Compass 
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'luxury',
    title: 'Luxury Vacations',
    description: 'Exclusive 5-star experiences tailored to your refined taste, featuring private stays and elite transport.',
    icon: <Palmtree className="w-8 h-8 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'business',
    title: 'Business Trips',
    description: 'Seamless corporate travel management, ensuring comfort, productivity, and punctual schedules worldwide.',
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'adventure',
    title: 'Adventure Travel',
    description: 'For the thrill-seekers. From mountain treks to deep-sea dives, we organize your perfect escape.',
    icon: <Compass className="w-8 h-8 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1533240332313-0dbf2ef4536f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'consulting',
    title: 'Destination Consulting',
    description: 'Expert advice on where to go, when to visit, and how to make the most of your travel budget.',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'booking',
    title: 'Booking Assistance',
    description: 'Comprehensive help with visas, flights, hotels, and local transport for a stress-free journey.',
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Frequent Traveler',
    content: 'World Wave made my family vacation to Turkey absolutely seamless. Their attention to detail is unmatched in Lodhran!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    id: 2,
    name: 'Saira Malik',
    role: 'Corporate Client',
    content: 'Professionalism at its best. They handle my business flights and bookings perfectly every time.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=saira'
  },
  {
    id: 3,
    name: 'Raza Jafri',
    role: 'Adventurer',
    content: 'The adventure package for Northern Pakistan was exhilarating. Best travel consultants I have ever met.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=raza'
  }
];

export const DESTINATIONS = [
  { id: 1, name: 'Maldives', country: 'South Asia', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=600', category: 'Luxury' },
  { id: 2, name: 'Baku', country: 'Azerbaijan', image: 'https://images.unsplash.com/photo-1539209506429-5b9783f942a9?auto=format&fit=crop&q=80&w=600', category: 'Historical' },
  { id: 3, name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600', category: 'Business' },
  { id: 4, name: 'Hunza Valley', country: 'Pakistan', image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&q=80&w=600', category: 'Adventure' },
  { id: 5, name: 'Istanbul', country: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600', category: 'Historical' },
  { id: 6, name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600', category: 'Luxury' }
];

export const CONTACT_INFO = {
  email: 'naeemrasool777@gmail.com',
  whatsapp: '+923085162742',
  phones: ['+92 300 1244685', '+92 3026 97 21 14'],
  address: 'Multan Rd, near Finca Bank, Saad Plaza, Lodhran, Pakistan',
  license: '#10630 DTS Lahore',
  socials: {
    instagram: 'https://instagram.com/worldwave.travel',
    tiktok: 'https://www.tiktok.com/@m.naeem149'
  }
};

export const CURRENCIES = [
  { code: 'PKR', name: 'Pakistani Rupee', symbol: 'Rs' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'DH' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: 'SR' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
  { code: 'AZN', name: 'Azerbaijan Manat', symbol: '₼' }
];
