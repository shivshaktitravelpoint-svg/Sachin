export type ServiceTab = 'outstation' | 'local' | 'airport';
export type TripType = 'one-way' | 'round-trip';

export interface Vehicle {
  id: string;
  name: string;
  model: string;
  category: 'Sedan' | 'Compact SUV' | 'Premium SUV' | 'Luxury MUV' | 'Luxury Van' | 'Tempo Traveller' | 'Tourist Coach Bus';
  seatingCapacity: string; // e.g. "4+1"
  luggageCapacity: string; // e.g. "2 Large Bags"
  perKmRate: number; // e.g. 13
  ac: boolean;
  image: string;
  features: string[];
  description: string;
  recommendedFor: string;
}

export interface RoutePackage {
  id: string;
  title: string;
  from: string;
  to: string;
  distanceKm: number;
  estDuration: string;
  vehicleType: string;
  ratePerKm: number;
  category: 'pilgrimage' | 'coastal' | 'intercity' | 'airport';
  image: string;
  highlights: string[];
  popular?: boolean;
  estimatedTotalSedan?: number;
  estimatedTotalSUV?: number;
}

export interface BookingInquiry {
  id?: string;
  serviceTab: ServiceTab;
  tripType: TripType;
  fromCity: string;
  toCity: string;
  date: string;
  time: string;
  returnDate?: string;
  mobileNumber: string;
  passengerName?: string;
  selectedVehicleId?: string;
  passengerCount?: number;
  specialNotes?: string;
  createdAt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  routeTaken: string;
  rating: number;
  comment: string;
  travelDate: string;
  vehicleUsed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface DriverFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
