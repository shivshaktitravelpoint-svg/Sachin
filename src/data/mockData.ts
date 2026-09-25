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
  phoneFormatted: '+91 74993 20650',
  whatsappUrl: 'https://wa.me/917499320650',
  email: 'shivshaktitravelpoint@gmail.com',
  address: 'Food Park Road, Shinde Wasti, Ravet, PCMC, Pune 412101, India',
  serviceHubs: 'Pune, PCMC, Mumbai, Nashik, Sambhaji Nagar, Kolhapur, Satara, Konkan, Sangli & Solapur',
  experienceYears: '12+',
  tripsCompleted: '45,000+',
  satisfactionRate: '99.4%',
  pricingRange: '₹13/KM to ₹55/KM',
  operatingHours: '24 Hours / 7 Days a Week'
};

export const OPERATING_HUBS = [
  'Pune',
  'PCMC',
  'Mumbai',
  'Nashik',
  'Sambhaji Nagar',
  'Kolhapur',
  'Satara',
  'Konkan',
  'Sangli',
  'Solapur'
];

export const QUICK_ROUTES = [
  { from: 'Pune', to: 'Mumbai' },
  { from: 'Mumbai', to: 'Pune' },
  { from: 'Pune', to: 'Nashik' },
  { from: 'Pune', to: 'Kolhapur' },
  { from: 'Pune', to: 'Sambhaji Nagar' },
  { from: 'Pune', to: 'Satara' }
];

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
    features: ['Chilled Air Conditioning', 'Ample Legroom', 'Clean White Upholstery', 'USB Mobile Charging', 'Experienced Pune Chauffeur'],
    description: 'Fuel-efficient, comfortable sedan ideal for solo travelers, couples, or small families on Pune–Mumbai trips, local PCMC rides, and airport transfers.',
    recommendedFor: 'Pune–Mumbai one-way, Pune airport transfers, Satara & Nashik trips'
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
    features: ['Dual AC Vents for all rows', 'Flexible 3-Row Seating', 'Smooth Expressway Ride', 'Sanitized Interiors', 'First Aid Box'],
    description: 'The preferred family choice for Pune yatras to Shirdi, Bhimashankar, and Trimbakeshwar. Spacious seating with great luggage utility.',
    recommendedFor: 'Family yatras from Pune, group airport pickups'
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
    description: 'Modern, high-comfort premium MUV with refined ride quality. Perfect for Pune–Goa, Pune–Kolhapur, and long Maharashtra highway drives.',
    recommendedFor: 'Premium family travel, Konkan & Goa tours, corporate trips'
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
    description: 'The gold standard in long-distance comfort for Pune to all Jyotirlinga circuits, Goa, and Sambhaji Nagar. Unequalled legroom and passenger safety.',
    recommendedFor: 'VIP guests, elderly pilgrims, multi-day Maharashtra yatras'
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
    description: 'Custom luxury 12-seater for devotee groups and families traveling together from Pune to Shirdi, Mahalaxmi Kolhapur, and Ellora.',
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
    description: 'Our most popular group vehicle for Pune and Mumbai pilgrimage yatras, Konkan tours, and wedding travel.',
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
    description: 'Spacious tourist coach for medium yatra groups and community pilgrimages across Maharashtra from Pune and Mumbai.',
    recommendedFor: 'Yatra groups, tourist delegations'
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
    description: 'Full-size AC tourist coach for large yatra groups, all-Jyotirlinga tours, school/college excursions, and wedding transportation from Pune.',
    recommendedFor: 'Large yatra groups (40-45 pax), convention transport, community tours'
  }
];

const SEDAN_RATE = 13;
const SUV_RATE = 15;

export const ROUTE_PACKAGES: RoutePackage[] = [
  {
    id: 'pune-mumbai',
    title: 'Pune to Mumbai Expressway Cab',
    from: 'Pune / PCMC',
    to: 'Mumbai',
    distanceKm: 160,
    estDuration: '3 - 3.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Via Mumbai–Pune Expressway', 'Drop at Mumbai Airport, Thane, Navi Mumbai or South Mumbai', 'Lonavala food stop on request', '24x7 pickup from Ravet, Wakad, Hinjewadi'],
    popular: true,
    estimatedTotalSedan: 160 * SEDAN_RATE,
    estimatedTotalSUV: 160 * SUV_RATE
  },
  {
    id: 'mumbai-pune',
    title: 'Mumbai to Pune One-Way Cab',
    from: 'Mumbai',
    to: 'Pune / PCMC',
    distanceKm: 160,
    estDuration: '3 - 3.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Pickup from Mumbai Airport (T1/T2) or any location', 'One-way fare, no return charges', 'Drop anywhere in Pune & PCMC'],
    popular: true,
    estimatedTotalSedan: 160 * SEDAN_RATE,
    estimatedTotalSUV: 160 * SUV_RATE
  },
  {
    id: 'pune-nashik',
    title: 'Pune to Nashik Outstation Cab',
    from: 'Pune',
    to: 'Nashik',
    distanceKm: 220,
    estDuration: '4.5 - 5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo',
    ratePerKm: SEDAN_RATE,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Via Chakan, Sangamner NH-60', 'Panchavati & Ramkund darshan', 'Wine country Sula Vineyards drop'],
    popular: true,
    estimatedTotalSedan: 220 * SEDAN_RATE,
    estimatedTotalSUV: 220 * SUV_RATE
  },
  {
    id: 'pune-sambhajinagar',
    title: 'Pune to Sambhaji Nagar Cab',
    from: 'Pune',
    to: 'Sambhaji Nagar',
    distanceKm: 250,
    estDuration: '5 - 5.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'intercity',
    image: tempoImg,
    highlights: ['Via Ahmednagar highway', 'Bibi Ka Maqbara & Daulatabad Fort', 'Extend to Ajanta & Ellora Caves'],
    popular: true,
    estimatedTotalSedan: 250 * SEDAN_RATE,
    estimatedTotalSUV: 250 * SUV_RATE
  },
  {
    id: 'pune-kolhapur',
    title: 'Pune to Kolhapur Cab',
    from: 'Pune',
    to: 'Kolhapur',
    distanceKm: 250,
    estDuration: '4.5 - 5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo',
    ratePerKm: SEDAN_RATE,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Smooth NH-48 via Satara & Karad', 'Mahalaxmi Temple drop', 'Famous Kolhapuri food stops'],
    popular: true,
    estimatedTotalSedan: 250 * SEDAN_RATE,
    estimatedTotalSUV: 250 * SUV_RATE
  },
  {
    id: 'pune-satara',
    title: 'Pune to Satara Cab',
    from: 'Pune',
    to: 'Satara',
    distanceKm: 130,
    estDuration: '2.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova',
    ratePerKm: SEDAN_RATE,
    category: 'intercity',
    image: innovaImg,
    highlights: ['Via Khambatki Ghat NH-48', 'Kaas Plateau & Thoseghar extension', 'Mahabaleshwar & Panchgani add-on'],
    popular: false,
    estimatedTotalSedan: 130 * SEDAN_RATE,
    estimatedTotalSUV: 130 * SUV_RATE
  },
  {
    id: 'pune-goa',
    title: 'Pune to Goa Holiday Cab',
    from: 'Pune',
    to: 'Goa',
    distanceKm: 600,
    estDuration: '10 - 11 Hours',
    vehicleType: 'Dzire / Carens / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'coastal',
    image: dwarkaImg,
    highlights: ['Via Kolhapur & Amboli Ghat', 'Drop at North or South Goa beaches', 'Konkan coastal route option'],
    popular: true,
    estimatedTotalSedan: 600 * SEDAN_RATE,
    estimatedTotalSUV: 600 * SUV_RATE
  },
  {
    id: 'pune-bhimashankar',
    title: 'Pune to Bhimashankar Jyotirlinga',
    from: 'Pune',
    to: 'Bhimashankar',
    distanceKm: 110,
    estDuration: '3 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo',
    ratePerKm: SEDAN_RATE,
    category: 'pilgrimage',
    image: heroSomnathImg,
    highlights: ['Bhimashankar Jyotirlinga darshan', 'Scenic Sahyadri ghat drive', 'Same-day return trip available'],
    popular: true,
    estimatedTotalSedan: 110 * SEDAN_RATE,
    estimatedTotalSUV: 110 * SUV_RATE
  },
  {
    id: 'pune-trimbakeshwar',
    title: 'Pune to Trimbakeshwar Jyotirlinga',
    from: 'Pune',
    to: 'Trimbakeshwar',
    distanceKm: 250,
    estDuration: '5.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'pilgrimage',
    image: dwarkaImg,
    highlights: ['Trimbakeshwar Jyotirlinga darshan', 'Combine with Nashik Panchavati', 'Kalsarp puja coordination'],
    popular: true,
    estimatedTotalSedan: 250 * SEDAN_RATE,
    estimatedTotalSUV: 250 * SUV_RATE
  },
  {
    id: 'pune-shirdi',
    title: 'Pune to Shirdi Sai Baba Darshan',
    from: 'Pune',
    to: 'Shirdi',
    distanceKm: 200,
    estDuration: '4.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'pilgrimage',
    image: heroSomnathImg,
    highlights: ['Sai Baba Samadhi Mandir darshan', 'Shani Shingnapur add-on', 'Same-day or overnight packages'],
    popular: true,
    estimatedTotalSedan: 200 * SEDAN_RATE,
    estimatedTotalSUV: 200 * SUV_RATE
  },
  {
    id: 'pune-ellora',
    title: 'Pune to Sambhaji Nagar – Ellora & Grishneshwar',
    from: 'Pune',
    to: 'Ellora',
    distanceKm: 270,
    estDuration: '5.5 - 6 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'pilgrimage',
    image: tempoImg,
    highlights: ['Grishneshwar Jyotirlinga darshan', 'Ellora Caves UNESCO site', 'Daulatabad Fort en-route'],
    popular: false,
    estimatedTotalSedan: 270 * SEDAN_RATE,
    estimatedTotalSUV: 270 * SUV_RATE
  },
  {
    id: 'pune-mahalaxmi-jotiba',
    title: 'Pune to Mahalaxmi & Jotiba Darshan',
    from: 'Pune',
    to: 'Kolhapur Mahalaxmi',
    distanceKm: 270,
    estDuration: '5.5 Hours',
    vehicleType: 'Dzire / Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'pilgrimage',
    image: dwarkaImg,
    highlights: ['Ambabai Mahalaxmi Temple darshan', 'Jotiba Temple hill visit', 'Narsobawadi add-on'],
    popular: true,
    estimatedTotalSedan: 270 * SEDAN_RATE,
    estimatedTotalSUV: 270 * SUV_RATE
  },
  {
    id: 'pune-all-jyotirlinga',
    title: 'Pune to All Maharashtra Jyotirlinga Yatra',
    from: 'Pune',
    to: 'All Jyotirlingas',
    distanceKm: 1500,
    estDuration: '5 - 6 Days',
    vehicleType: 'Ertiga / Innova / Tempo / Bus',
    ratePerKm: SEDAN_RATE,
    category: 'pilgrimage',
    image: busImg,
    highlights: ['Bhimashankar, Trimbakeshwar, Grishneshwar', 'Aundha Nagnath & Parli Vaijnath', 'Custom multi-day itinerary with stays'],
    popular: true,
    estimatedTotalSedan: 1500 * SEDAN_RATE,
    estimatedTotalSUV: 1500 * SUV_RATE
  },
  {
    id: 'pune-airport-transfer',
    title: 'Pune Airport to Anywhere in Maharashtra',
    from: 'Pune Airport (Lohegaon)',
    to: 'Pune, PCMC & Outstation',
    distanceKm: 30,
    estDuration: 'Flexible',
    vehicleType: 'Sedan / SUV / Carens / Tempo',
    ratePerKm: SEDAN_RATE,
    category: 'airport',
    image: innovaImg,
    highlights: ['Driver waiting with name board', 'Flight tracking for on-time pickup', 'Luggage assistance included', 'AC enabled prior to boarding'],
    popular: false,
    estimatedTotalSedan: 30 * SEDAN_RATE,
    estimatedTotalSUV: 30 * SUV_RATE
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: 'outstation',
    title: 'Outstation Cab Booking',
    description: 'Safe, round-the-clock one-way and round-trip outstation cabs from Pune & PCMC to Mumbai, Nashik, Kolhapur, Goa, and all Indian cities.',
    startingRate: '₹13/KM',
    features: ['Transparent per-KM billing', 'Zero hidden charges', 'Doorstep pickup & drop', 'Experienced highway chauffeurs']
  },
  {
    id: 'pilgrimage',
    title: 'Pune & Mumbai Pilgrimage Yatras',
    description: 'Yatra packages for Bhimashankar, Trimbakeshwar, Shirdi, Grishneshwar, Mahalaxmi & Jotiba, and all Jyotirlingas.',
    startingRate: 'Custom Fixed Packages',
    features: ['Temple darshan timings coordination', 'Senior citizen friendly stops', 'Marathi & Hindi speaking drivers', 'Luggage security assured']
  },
  {
    id: 'airport',
    title: 'Airport Transfers (24x7)',
    description: 'Punctual airport pick-up and drop services for Pune (Lohegaon) and Mumbai (CSMIA) airports.',
    startingRate: 'Flat & KM Rates Available',
    features: ['Complimentary waiting up to 45 mins', 'Flight delay monitoring', 'Meet & Greet service', 'Air-conditioned clean vehicles']
  },
  {
    id: 'group',
    title: 'Tempo Travellers & 45-Seat Bus',
    description: 'Spacious Tempo Travellers (12 to 26 seats) at ₹27-₹35/KM and luxury 45-seater AC tourist buses at ₹55/KM for yatras and weddings.',
    startingRate: '₹27/KM to ₹55/KM',
    features: ['High-roof walk-in luxury cabins', 'Reclining push-back seats', 'Huge underfloor luggage holds', 'Dual AC & Sound System']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh & Suman Sharma',
    location: 'Wakad, Pune',
    routeTaken: 'Pune to All Jyotirlinga 5 Days Yatra',
    rating: 5,
    comment: 'We booked an Innova Crysta for our parents\' dream Jyotirlinga yatra. The driver was exceptionally courteous, patient at temple queues, and drove smoothly through the ghats. Very transparent billing with no surprise fees.',
    travelDate: 'October 2024',
    vehicleUsed: 'Toyota Innova Crysta (₹22/KM)'
  },
  {
    id: 't2',
    name: 'Amit Kulkarni',
    location: 'Ravet, PCMC',
    routeTaken: 'Pune to Shirdi Family Trip',
    rating: 5,
    comment: 'Booked an Ertiga 6+1 for 6 of us at ₹15/km. The car arrived 15 minutes before reporting time. Super clean seats, strong AC, and the driver knew all the best food stops. Shiv Shakti Taxi is our permanent travel partner now!',
    travelDate: 'December 2024',
    vehicleUsed: 'Maruti Ertiga (₹15/KM)'
  },
  {
    id: 't3',
    name: 'Dr. Anand Deshmukh',
    location: 'Pune, Maharashtra',
    routeTaken: 'Pune to Mumbai Airport One Way',
    rating: 5,
    comment: 'Clean Swift Dzire, polite driver, and very reasonable ₹13/km rate. We were traveling with elderly mother and needed breaks, which the chauffeur accommodated with a genuine smile. Quick confirmation over phone and WhatsApp.',
    travelDate: 'January 2025',
    vehicleUsed: 'Swift Dzire (₹13/KM)'
  },
  {
    id: 't4',
    name: 'Sachin Patil & Bhajani Mandal',
    location: 'Pimpri-Chinchwad',
    routeTaken: 'Pune to Mahalaxmi & Jotiba Yatra (45-Seater Bus)',
    rating: 5,
    comment: 'Our 40-member group hired the 45-seater luxury AC tourist coach at ₹55/km. High-back pushback seats, superb AC, powerful mic for bhajans, and huge luggage space. The office team followed up daily to check our comfort.',
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
    answer: 'Base taxi fares cover the vehicle, fuel, and experienced chauffeur charges. Toll taxes (including Mumbai–Pune Expressway), local parking fees, and interstate permit charges (e.g. Goa, Karnataka, Gujarat) are payable as per actual receipts. Drivers provide FASTag and parking slips for complete transparency.',
    category: 'Billing'
  },
  {
    id: 'faq-3',
    question: 'How experienced are your drivers for pilgrimage and night highway driving?',
    answer: 'All our drivers have a minimum of 6 to 10 years of commercial driving experience across Maharashtra highways, the Mumbai–Pune Expressway, and Sahyadri ghats. They undergo background verification, maintain a zero-alcohol policy, speak Marathi and Hindi, and know temple darshan timings and clean rest-stops.',
    category: 'Drivers'
  },
  {
    id: 'faq-4',
    question: 'What is the booking and confirmation process? Do I need to pay online right now?',
    answer: 'No online payment or credit card is required to submit an inquiry! Simply fill out our website booking widget or click to call/WhatsApp (+91 74993 20650). Our customer representative will immediately confirm vehicle availability, share driver details, and agree upon your pickup time and total fare.',
    category: 'Booking'
  },
  {
    id: 'faq-5',
    question: 'What is your cancellation policy if our train/flight gets delayed or plan changes?',
    answer: 'We understand travel plans can change. We offer free cancellation and rescheduling up to 6 hours before scheduled pickup. For flights or trains delayed en-route, your driver will adjust arrival time at no additional waiting penalty.',
    category: 'Cancellation'
  },
  {
    id: 'faq-6',
    question: 'Can I book a one-way taxi from Pune to Mumbai or other cities?',
    answer: 'Yes! We are known for our one-way taxi service from Pune & PCMC. You pay only for the one-way route without expensive return fares. Popular one-way routes include Pune to Mumbai, Mumbai to Pune, Pune to Nashik, and Pune to Kolhapur.',
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
    title: 'Pilgrimage & Ghat Route Expertise',
    description: 'Expert knowledge of Shirdi, Bhimashankar, Trimbakeshwar, Kolhapur, Konkan, and Expressway routes, including temple aarti timings and peaceful stopovers.',
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
  'Pune',
  'PCMC (Pimpri-Chinchwad)',
  'Ravet',
  'Wakad',
  'Hinjewadi',
  'Pune Airport (Lohegaon)',
  'Mumbai',
  'Mumbai Airport',
  'Thane',
  'Navi Mumbai',
  'Lonavala',
  'Nashik',
  'Shirdi',
  'Trimbakeshwar',
  'Bhimashankar',
  'Sambhaji Nagar',
  'Ellora',
  'Kolhapur',
  'Satara',
  'Mahabaleshwar',
  'Sangli',
  'Solapur',
  'Konkan',
  'Goa'
];
