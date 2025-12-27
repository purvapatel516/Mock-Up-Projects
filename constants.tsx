
import { Car, User } from './types';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz S-Class',
    model: '2024',
    pricePerDay: 1200,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
    category: 'Luxury Sedan',
    rating: 4.9,
    specs: { speed: '250 km/h', transmission: 'Automatic', seats: 5, fuel: 'Premium' }
  },
  {
    id: '2',
    name: 'BMW 5 Series',
    model: '2023',
    pricePerDay: 580,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop',
    category: 'Sport Sedan',
    rating: 4.8,
    specs: { speed: '240 km/h', transmission: 'Automatic', seats: 5, fuel: 'Premium' }
  },
  {
    id: '3',
    name: 'Lamborghini Urus',
    model: 'Black Edition',
    pricePerDay: 2500,
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop',
    category: 'Super SUV',
    rating: 4.95,
    specs: { speed: '305 km/h', transmission: 'Automatic', seats: 5, fuel: 'Super' }
  },
  {
    id: '4',
    name: 'Toyota Camry',
    model: '2023',
    pricePerDay: 250,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop',
    category: 'Economy',
    rating: 4.7,
    specs: { speed: '200 km/h', transmission: 'CVT', seats: 5, fuel: '91 Gasoline' }
  }
];

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Ahmed Al-Fayed', role: 'vendor', location: 'Dubai, UAE', status: 'pending', avatar: 'https://i.pravatar.cc/150?u=ahmed' },
  { id: '2', name: 'Jameel D.', role: 'customer', location: 'Jeddah, KSA', status: 'active', avatar: 'https://i.pravatar.cc/150?u=jameel' },
  { id: '3', name: 'Sara Khan', role: 'vendor', location: 'Riyadh, KSA', status: 'active', avatar: 'https://i.pravatar.cc/150?u=sara' }
];
