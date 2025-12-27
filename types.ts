
export interface Car {
  id: string;
  name: string;
  model: string;
  pricePerDay: number;
  image: string;
  category: string;
  rating: number;
  specs: {
    speed: string;
    transmission: string;
    seats: number;
    fuel: string;
  };
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'vendor' | 'customer';
  location: string;
  status: 'active' | 'pending' | 'suspended';
  avatar?: string;
}

export interface ChartData {
  name: string;
  value: number;
}
