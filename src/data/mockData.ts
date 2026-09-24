import { Vehicle, RoutePackage, Testimonial, FaqItem, DriverFeature } from '../types';

import heroSomnathImg from '../assets/images/hero_somnath_temple_1790232678746.jpg';
import innovaImg from '../assets/images/fleet_innova_crysta_1790232704839.jpg';
import tempoImg from '../assets/images/fleet_tempo_traveller_1790232723795.jpg';
import dwarkaImg from '../assets/images/pilgrimage_dwarkadhish_route_1790232737355.jpg';
import busImg from '../assets/images/fleet_luxury_bus_1790233958535.jpg';

export const COMPANY_INFO = {
  name: 'Shiv Shakti Taxi Services',
  tagline: 'Quick & Safe And Budget Cab',
  subTagline: 'Search Best Cab Now | Quick, Simple & Easy | Safety Assured, Lowest Fare',
  phone: '+917499320650',
  phoneFormatted: '+1 (749) 932-0650',
  whatsappUrl: 'https://wa.me/917499320650',
  email: 'shivshaktitravelpoint@gmail.com',
  address: 'Food Park Road, Shinde Wasti, Ravet, PCMC, Pune 412101, India',
  serviceHubs: 'Somnath, Dwarka, Rajkot, Ahmedabad, Veraval, Jamnagar, Diu & Pune',
  experienceYears: '12+',
  tripsCompleted: '45,000+',
  satisfactionRate: '99.4%',
  pricingRange: '₹13/KM to ₹55/KM',
  operatingHours: '24 Hours / 7 Days a Week'
};

export const VEHICLES: Vehicle[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    model: 'Maruti Dzire Prime / Tour Sedan',
    category: 'Sedan',
    seatingCapacity: '4+1',
    luggageCapacity: '2 Large Bags + Hand Luggage',
    perKmRate: 13,
    ac: true,
    image: innovaImg,
    features: ['Chilled Air Conditioning', 'Ample Legroom', 'Clean White Upholstery', 'USB Mobile Charging', 'Experienced Local Chauffeur'],
    description: 'Fuel-efficient, comfortable sedan ideal for solo travelers, couples, or small families visiting Somnath, Dwarka, and airport transfers.',
    recommendedFor: 'Budget outstation, airport transfers, Somnath-Dwarka darshan'
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    model: 'Ertiga Smart Hybrid VXi/ZXi',
    category: 'Compact SUV',
    seatingCapacity: '6+1',
    luggageCapacity: '3 Bags + Roof Carrier Available',
    perKmRate: 15,
    ac: true,
    image: innovaImg,
    features: ['Dual AC Vents for all rows', 'Flexible 3-Row Seating', 'Smooth Highway Ride', 'Sanitized Interiors', 'First Aid Box'],
    description: 'The preferred family choice for Saurashtra pilgrimage circuits. Spacious seating with great luggage utility.',
    recommendedFor: 'Family pilgrimage tours, group airport pickups'
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    model: 'Kia Carens Luxury Plus Executive',
    category: 'Luxury MUV',
    seatingCapacity: '6+1',
    luggageCapacity: '3-4 Bags + Roof Carrier',
    perKmRate: 17,
    ac: true,
    image: innovaImg,
    features: ['Plush Leatherette Seats', 'Roof Mounted AC Vents', 'Super Quiet Refined Cabin', 'Type-C Fast Charging in all rows', 'Smooth Highway Suspension'],
    description: 'Modern, high-comfort premium MUV with refined ride quality. Perfect for long Gujarat highway drives and executive pilgrimages.',
    recommendedFor: 'Premium family travel, intercity highway tours, NRI pilgrims'
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    model: 'Toyota Innova Crysta 2.4 VX/ZX',
    category: 'Premium SUV',
    seatingCapacity: '7+1',
    luggageCapacity: '4-5 Large Bags',
    perKmRate: 22,
    ac: true,
    image: innovaImg,
    features: ['Captain Reclining Seats', 'Powerful Tri-Zone Climate Control', 'Ultra-Smooth Suspension', 'Speed Governor Safety Compliance', 'Bottled Mineral Water'],
    description: 'The gold standard in long-distance touring comfort for Dwarka-Somnath-Gir forest journeys. Unequalled legroom and unmatched passenger safety.',
    recommendedFor: 'VIP guests, elderly pilgrims, multi-day Saurashtra packages'
  },
  {
    id: 'tempo-12',
    name: 'Tempo Traveller (12 Seater)',
    model: 'Force Traveller Maharaja 12+1',
    category: 'Tempo Traveller',
    seatingCapacity: '12+1',
    luggageCapacity: 'Large Luggage Boot',
    perKmRate: 27,
    ac: true,
    image: tempoImg,
    features: ['Maharaja Pushback Seats & Curtains', 'LED Ambient Reading Lights', 'Music System with Mic', 'Overhead Luggage Racks', 'Spacious Center Aisle'],
    description: 'Custom luxury 12-seater designed for devotee groups and families traveling together to Somnath, Dwarka, and Ambaji.',
    recommendedFor: 'Medium devotee groups, extended family yatras'
  },
  {
    id: 'tempo-17',
    name: 'Tempo Traveller (17 Seater)',
    model: 'Force Traveller 17+1 Deluxe',
    category: 'Tempo Traveller',
    seatingCapacity: '17+1',
    luggageCapacity: 'Full Luggage Boot + Roof Carrier',
    perKmRate: 30,
    ac: true,
    image: tempoImg,
    features: ['High-Roof Walkthrough Cabin', 'Strong Dual Air Conditioning', 'Reclining Push-Back Seats', 'Safe Experienced Highway Chauffeur', 'PA System'],
    description: 'Our most popular group tour vehicle for all Gujarat temple circuits, pilgrimage sanghs, and wedding travel.',
    recommendedFor: 'Temple tour groups, wedding guest transport, corporate outings'
  },
  {
    id: 'tempo-26',
    name: 'Tempo Traveller (26 Seater)',
    model: 'Force Traveller 26+1 Super Deluxe',
    category: 'Tempo Traveller',
    seatingCapacity: '26+1',
    luggageCapacity: 'Extra Large Boot & Carrier',
    perKmRate: 35,
    ac: true,
    image: tempoImg,
    features: ['Coach Style 2x2 Seating', 'Individual Air Vents & Suspension', 'Microphone & Audio System', 'Emergency Exits & Fire Extinguishers', 'Senior Highway Driver'],
    description: 'Heavy duty, spacious tourist coach for medium devotional yatra sanghs and community pilgrimage groups across Gujarat.',
    recommendedFor: 'Devotional yatra sanghs, tourist delegations'
  },
  {
    id: 'bus-45',
    name: '45 Seat Luxury Tourist Bus',
    model: 'Ashok Leyland / BharatBenz 45-Seater AC Coach',
    category: 'Tourist Coach Bus',
    seatingCapacity: '45+2',
    luggageCapacity: 'Massive Underfloor Luggage Hold (50+ Bags)',
    perKmRate: 55,
    ac: true,
    image: busImg,
    features: ['2x2 High-Back Reclining Coach Seats', 'Chilled Central AC System', 'Large Panoramic Tinted Windows', 'Digital Audio/Mic for Bhajans', 'Experienced 2-Driver Team'],
    description: 'Full-size air-conditioned tourist coach for large pilgrim sanghs, community yatras, school/college excursions, and grand wedding transportation.',
    recommendedFor: 'Large pilgrimage sanghs (40-45 pax), convention transport, community tours'
  }
];

export const ROUTE_PACKAGES: RoutePackage[] = [
  {
    id: 'somnath-dwarka',
    title: 'Somnath to Dwarka Sacred Corridor',
    from: 'Somnath / Veraval',
    to: 'Dwarka Dham',
    distanceKm: 235,
    estDuration: '4.5 - 5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: 13,
    category: 'pilgrimage',
    image: dwarkaImg,
    highlights: ['En-route Porbandar (Kirti Mandir, Sudama Temple)', 'Harshad Mata Temple stop', 'Coastal Highway NH-51 Scenic Drive', 'Dwarkadhish evening aarti drop'],
    popular: true,
    estimatedTotalSedan: 3400,
    estimatedTotalSUV: 4800
  },
  {
    id: 'somnath-veraval',
    title: 'Somnath to Veraval Local & Railway Drop',
    from: 'Somnath Jyotirlinga',
    to: 'Veraval Port & Station',
    distanceKm: 8,
    estDuration: '20 Mins',
    vehicleType: 'Sedan / SUV / Carens',
    ratePerKm: 13,
    category: 'pilgrimage',
    image: heroSomnathImg,
    highlights: ['24/7 Railway Station Transfers', 'Triveni Sangam Ghat Darshan', 'Bhalka Tirth Sacred Visit', 'Instant Pickup Guarantee'],
    popular: false,
    estimatedTotalSedan: 600,
    estimatedTotalSUV: 900
  },
  {
    id: 'ahmedabad-somnath',
    title: 'Ahmedabad to Somnath Direct Jyotirlinga',
    from: 'Ahmedabad (City / Airport)',
    to: 'Somnath Temple',
    distanceKm: 410,
    estDuration: '7.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: 13,
    category: 'pilgrimage',
    image: heroSomnathImg,
    highlights: ['Direct pickup from Ahmedabad SVPIA Airport', 'Via Rajkot & Junagadh bypass', 'Clean food court stops', 'Comfortable night highway drive'],
    popular: true,
    estimatedTotalSedan: 5500,
    estimatedTotalSUV: 8200
  },
  {
    id: 'rajkot-somnath',
    title: 'Rajkot to Somnath Expressway Corridor',
    from: 'Rajkot (Hirasar Airport / City)',
    to: 'Somnath Temple',
    distanceKm: 198,
    estDuration: '3.5 - 4 Hours',
    vehicleType: 'Sedan / Carens / Innova',
    ratePerKm: 13,
    category: 'intercity',
    image: heroSomnathImg,
    highlights: ['Fast NH-27 / NH-151 Highway', 'Pickup from new Hirasar International Airport', 'Stop at Junagadh Girnar foothills on request'],
    popular: true,
    estimatedTotalSedan: 2900,
    estimatedTotalSUV: 4200
  },
  {
    id: 'jamnagar-rajkot',
    title: 'Jamnagar to Rajkot Commercial Corridor',
    from: 'Jamnagar',
    to: 'Rajkot',
    distanceKm: 90,
    estDuration: '1.5 - 2 Hours',
    vehicleType: 'Sedan / SUV / Carens',
    ratePerKm: 13,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Prompt airport & business pickup', 'Smooth 4-lane expressway', 'Zero waiting charges for flight delays'],
    popular: false,
    estimatedTotalSedan: 1900,
    estimatedTotalSUV: 2600
  },
  {
    id: 'dwarka-bet-dwarka',
    title: 'Dwarka to Bet Dwarka & Nageshwar Circuit',
    from: 'Dwarka Hotel / Station',
    to: 'Bet Dwarka / Nageshwar Jyotirlinga',
    distanceKm: 38,
    estDuration: '1 Hour',
    vehicleType: 'Sedan / SUV / Carens',
    ratePerKm: 13,
    category: 'pilgrimage',
    image: dwarkaImg,
    highlights: ['Nageshwar Jyotirlinga Darshan', 'Gopi Talav Holy Pond', 'Okha Ferry Point / Sudarshan Setu Cable Bridge', 'Rukmini Devi Temple'],
    popular: true,
    estimatedTotalSedan: 1600,
    estimatedTotalSUV: 2200
  },
  {
    id: 'morbi-diu',
    title: 'Morbi to Diu Island Coastal Getaway',
    from: 'Morbi Ceramic Hub',
    to: 'Diu Island / Nagoa Beach',
    distanceKm: 290,
    estDuration: '5.5 Hours',
    vehicleType: 'Sedan / SUV / Tempo',
    ratePerKm: 13,
    category: 'coastal',
    image: dwarkaImg,
    highlights: ['Scenic coastal transit', 'Direct drop at Nagoa beach or Diu Fort', 'Customized family weekend tour'],
    popular: false,
    estimatedTotalSedan: 4400,
    estimatedTotalSUV: 6200
  },
  {
    id: 'ahmedabad-bhuj',
    title: 'Ahmedabad to Bhuj & Rann of Kutch',
    from: 'Ahmedabad',
    to: 'Bhuj / White Desert Kutch',
    distanceKm: 335,
    estDuration: '6 Hours',
    vehicleType: 'Dzire / Carens / Innova / Tempo / Bus',
    ratePerKm: 13,
    category: 'intercity',
    image: tempoImg,
    highlights: ['Drop at Bhuj or direct Tent City Dhordo', 'Kutch handicraft village stopovers', 'Smooth highway via Malia & Samakhiali'],
    popular: true,
    estimatedTotalSedan: 4800,
    estimatedTotalSUV: 6900
  },
  {
    id: 'somnath-sasangir',
    title: 'Somnath to Sasan Gir Forest Safari Drop',
    from: 'Somnath Temple',
    to: 'Sasan Gir National Park',
    distanceKm: 50,
    estDuration: '1 Hour',
    vehicleType: 'Sedan / SUV / Carens',
    ratePerKm: 13,
    category: 'coastal',
    image: innovaImg,
    highlights: ['Early morning Asiatic Lion Safari timing sync', 'Lush mango orchard rural route', 'Gir Interpretation Zone Devalia drop'],
    popular: true,
    estimatedTotalSedan: 1500,
    estimatedTotalSUV: 2100
  },
  {
    id: 'ahmedabad-statue-of-unity',
    title: 'Ahmedabad to Statue of Unity (Kevadia)',
    from: 'Ahmedabad',
    to: 'Statue of Unity, Ekta Nagar',
    distanceKm: 195,
    estDuration: '3.5 Hours',
    vehicleType: 'Sedan / Carens / Innova / Tempo / Bus',
    ratePerKm: 13,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Same-day round trip or overnight stay', 'World\'s tallest statue viewing gallery', 'Sardar Sarovar Dam & Valley of Flowers'],
    popular: true,
    estimatedTotalSedan: 3400,
    estimatedTotalSUV: 4800
  },
  {
    id: 'bhuj-mumbai',
    title: 'Bhuj to Mumbai Western Highway Express',
    from: 'Bhuj / Gandhidham',
    to: 'Mumbai (Thane / Western Suburbs)',
    distanceKm: 870,
    estDuration: '15 Hours',
    vehicleType: 'Innova Crysta / Carens / Bus',
    ratePerKm: 17,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Dedicated experienced two-driver option', 'Safe overnight travel via NH-48', 'Drop anywhere in Mumbai or Pune'],
    popular: false,
    estimatedTotalSedan: 14500,
    estimatedTotalSUV: 19500
  },
  {
    id: 'ahmedabad-airport-transfer',
    title: 'Ahmedabad Airport to Anywhere in Gujarat',
    from: 'Ahmedabad Airport (SVPIA)',
    to: 'All Gujarat Towns & Pilgrimages',
    distanceKm: 100,
    estDuration: 'Flexible',
    vehicleType: 'Sedan / SUV / Carens / Tempo',
    ratePerKm: 13,
    category: 'airport',
    image: innovaImg,
    highlights: ['Driver waiting with name board', 'Flight tracking for on-time pickup', 'Luggage assistance included', 'AC enabled prior to boarding'],
    popular: true,
    estimatedTotalSedan: 1900,
    estimatedTotalSUV: 2800
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: 'outstation',
    title: 'Outstation Cab Booking',
    description: 'Safe, round-the-clock one-way and round-trip outstation cabs connecting Somnath, Dwarka, Ahmedabad, Rajkot, and all Indian cities.',
    startingRate: '₹13/KM',
    features: ['Transparent per-KM billing', 'Zero hidden charges', 'Doorstep pickup & drop', 'Experienced highway chauffeurs']
  },
  {
    id: 'pilgrimage',
    title: 'Gujarat Temple & Yatra Tours',
    description: 'Specialized pilgrimage packages designed with devotees in mind. Somnath Jyotirlinga, Dwarkadhish Temple, Nageshwar, Girnar & Ambaji.',
    startingRate: 'Custom Fixed Packages',
    features: ['Temple darshan timings coordination', 'Senior citizen friendly stops', 'Sanskrit & Gujarati versed drivers', 'Luggage security assured']
  },
  {
    id: 'airport',
    title: 'Airport Transfers (24x7)',
    description: 'Punctual airport pick-up and drop services for Ahmedabad (AMD), Rajkot Hirasar (HSR), Jamnagar, Diu, and Mumbai airports.',
    startingRate: 'Flat & KM Rates Available',
    features: ['Complimentary waiting up to 45 mins', 'Flight delay monitoring', 'Meet & Greet service', 'Air-conditioned clean vehicles']
  },
  {
    id: 'group',
    title: 'Tempo Travellers & 45-Seat Bus',
    description: 'Spacious Tempo Travellers (12 to 26 seats) at ₹27-₹35/KM and luxury 45-seater AC tourist coach buses at ₹55/KM for pilgrim sanghs and weddings.',
    startingRate: '₹27/KM to ₹55/KM',
    features: ['High-roof walk-in luxury cabins', 'Reclining push-back seats', 'Huge underfloor luggage holds', 'Dual AC & Sound System']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh & Suman Sharma',
    location: 'New Delhi',
    routeTaken: 'Ahmedabad - Somnath - Dwarka 5 Days Tour',
    rating: 5,
    comment: 'We booked an Innova Crysta for our parents\' dream pilgrimage to Somnath and Dwarkadhish. Driver Mukesh bhai was exceptionally courteous, patient at temple queues, and drove so smoothly on coastal highways. Very transparent billing with no surprise fees.',
    travelDate: 'October 2024',
    vehicleUsed: 'Toyota Innova Crysta (₹22/KM)'
  },
  {
    id: 't2',
    name: 'Bhavin Patel',
    location: 'Surat, Gujarat',
    routeTaken: 'Rajkot to Somnath & Diu Family Trip',
    rating: 5,
    comment: 'Booked an Ertiga 6+1 for 6 of us at ₹15/km. The car arrived 15 minutes before reporting time at Rajkot. Super clean seats, strong AC, and the driver knew all the best highway Kathiyawadi food spots. Shiv Shakti Taxi is our permanent travel partner now!',
    travelDate: 'December 2024',
    vehicleUsed: 'Maruti Ertiga (₹15/KM)'
  },
  {
    id: 't3',
    name: 'Dr. Anand Deshmukh',
    location: 'Pune, Maharashtra',
    routeTaken: 'Dwarka to Somnath One Way',
    rating: 5,
    comment: 'Clean Swift Dzire, polite driver, and very reasonable ₹13/km rate. We were traveling with elderly mother and needed frequent breaks, which the chauffeur accommodated with a genuine smile. Quick confirmation over phone and WhatsApp.',
    travelDate: 'January 2025',
    vehicleUsed: 'Swift Dzire (₹13/KM)'
  },
  {
    id: 't4',
    name: 'Jignesh Shah & Devotee Sangh',
    location: 'Ahmedabad',
    routeTaken: 'Saurashtra Jyotirlinga Darshan (45-Seater Bus)',
    rating: 5,
    comment: 'Our 40-member community group hired the 45-seater luxury AC tourist coach at ₹55/km. High-back pushback seats, superb AC, powerful mic for bhajans, and huge luggage space. The office team followed up daily to check our comfort.',
    travelDate: 'February 2025',
    vehicleUsed: '45 Seat Luxury Bus (₹55/KM)'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How are the taxi fares calculated at Shiv Shakti Taxi Services?',
    answer: 'Our rates are strictly transparent based on per-kilometer pricing: Swift Dzire at ₹13/KM, Maruti Ertiga at ₹15/KM, Kia Carens at ₹17/KM, Innova Crysta at ₹22/KM, Tempo Travellers from ₹27 to ₹35/KM, and full-size 45-seater luxury AC tourist buses at ₹55/KM. For outstation trips, distance is calculated from pickup to drop, with zero hidden extras.',
    category: 'Pricing'
  },
  {
    id: 'faq-2',
    question: 'Are toll taxes, parking charges, and state taxes included in the quote?',
    answer: 'Base taxi fares cover the vehicle, fuel, and experienced chauffeur charges. Toll taxes, local parking fees, and interstate permit charges (if traveling outside Gujarat into Maharashtra/Rajasthan) are payable as per actual receipts. Drivers provide original digital toll fastag slips and municipal parking slips for complete transparency.',
    category: 'Billing'
  },
  {
    id: 'faq-3',
    question: 'How experienced are your drivers for pilgrimage and night highway driving?',
    answer: 'All our drivers have a minimum of 6 to 10 years of commercial passenger driving experience across Gujarat highways (NH-51, NH-27, coastal belts). They undergo background verification, maintain a zero-alcohol policy, speak Gujarati and Hindi, and possess deep local knowledge of temple darshan timings, VIP passes, and clean highway rest-stops.',
    category: 'Drivers'
  },
  {
    id: 'faq-4',
    question: 'What is the booking and confirmation process? Do I need to pay online right now?',
    answer: 'No online payment or credit card is required to submit an inquiry! Simply fill out our website booking widget or click to call/WhatsApp (+917499320650). Our customer representative will immediately confirm vehicle availability, share driver details, and agree upon your pickup time and total fare.',
    category: 'Booking'
  },
  {
    id: 'faq-5',
    question: 'What is your cancellation policy if our train/flight gets delayed or plan changes?',
    answer: 'We understand pilgrimage and travel plans can change. We offer free cancellation and rescheduling up to 6 hours before scheduled pickup. For flights or trains delayed en-route, your driver will adjust arrival time at no additional waiting penalty.',
    category: 'Cancellation'
  },
  {
    id: 'faq-6',
    question: 'Can I book a one-way taxi from Somnath to Dwarka or Ahmedabad?',
    answer: 'Yes! We are known for our popular one-way taxi service across Gujarat. You pay only for the one-way route without being forced into expensive two-way return fares. Popular one-way routes include Somnath to Dwarka, Somnath to Ahmedabad, and Rajkot to Somnath.',
    category: 'Routes'
  },
  {
    id: 'faq-7',
    question: 'What vehicle types are available and what is the luggage capacity?',
    answer: 'We offer Swift Dzire (4+1 @ ₹13/KM), Maruti Ertiga (6+1 @ ₹15/KM), Kia Carens (6+1 @ ₹17/KM), Toyota Innova Crysta (7+1 @ ₹22/KM), Maharaja Tempo Travellers (12 to 26 seats @ ₹27-₹35/KM), and 45-seater luxury AC buses (@ ₹55/KM). All vehicles are 100% air-conditioned and sanitized.',
    category: 'Fleet'
  }
];

export const DRIVER_STANDARDS: DriverFeature[] = [
  {
    id: 'vetting',
    title: 'Strict Police Verification & Licensing',
    description: 'Every chauffeur holds a commercial badge with verified identity, clean driving records, and continuous background checks.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'pilgrimage-knowledge',
    title: 'Pilgrimage & Coastal Route Expertise',
    description: 'Expert knowledge of Somnath, Dwarka, Girnar, Ambaji, and Saurashtra routes, including optimal temple aarti timings and peaceful stopovers.',
    iconName: 'Compass'
  },
  {
    id: 'hygiene-safety',
    title: 'Immaculate Vehicle Cleanliness',
    description: 'Daily cabin vacuuming, freshly scented interiors, working speed governors (max 80 km/h highway safety), and functional air conditioning.',
    iconName: 'Sparkles'
  },
  {
    id: 'courtesy',
    title: 'Devotee-Friendly & Polite Conduct',
    description: 'Respectful, patient demeanour toward senior citizen pilgrims and families, zero-tobacco, and zero-alcohol strict operational code.',
    iconName: 'HeartHandshake'
  }
];

export const GUJARAT_CITIES = [
  'Somnath',
  'Dwarka',
  'Veraval',
  'Rajkot',
  'Ahmedabad',
  'Jamnagar',
  'Junagadh',
  'Sasan Gir',
  'Porbandar',
  'Diu Island',
  'Bhuj (Kutch)',
  'Morbi',
  'Gandhinagar',
  'Vadodara',
  'Surat',
  'Statue of Unity (Kevadia)',
  'Ambaji',
  'Pune',
  'Mumbai'
];
