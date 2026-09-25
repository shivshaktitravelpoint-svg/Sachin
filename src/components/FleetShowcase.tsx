import React, { useState } from 'react';
import { Users, Briefcase, Snowflake, MessageSquare, ArrowRight, Check, Sparkles } from 'lucide-react';
import { VEHICLES, COMPANY_INFO } from '../data/mockData';
import { Vehicle } from '../types';

interface FleetShowcaseProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onSelectVehicle }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sedan' | 'suv' | 'tempo' | 'bus'>('all');

  const filteredVehicles = VEHICLES.filter((v) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sedan') return v.category === 'Sedan';
    if (activeFilter === 'suv') return v.category === 'Compact SUV' || v.category === 'Premium SUV' || v.category === 'Luxury MUV';
    if (activeFilter === 'tempo') return v.category === 'Tempo Traveller';
    if (activeFilter === 'bus') return v.category === 'Tourist Coach Bus';
    return true;
  });

  const generateWhatsAppLink = (vehicle: Vehicle) => {
    const text = encodeURIComponent(
      `Hello Shiv Shakti Taxi Services! I am interested in booking the *${vehicle.name} (${vehicle.seatingCapacity})* at ₹${vehicle.perKmRate}/KM for my upcoming journey from Pune. Please share availability and tariff details.`
    );
    return `https://wa.me/917499320650?text=${text}`;
  };

  return (
    <section id="fleet-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clean, Sanitized & Modern Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight">
              Our Taxi For Hire
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Transparent per-KM rates starting from <span className="text-[#C41E3A] font-bold">₹13/KM</span> to{' '}
              <span className="text-[#C41E3A] font-bold">₹55/KM</span>. All cabs and buses feature chilled AC, licensed chauffeurs, and 24x7 highway support.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1A3A5C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Fleet ({VEHICLES.length})
            </button>
            <button
              onClick={() => setActiveFilter('sedan')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'sedan'
                  ? 'bg-[#1A3A5C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sedan (₹13)
            </button>
            <button
              onClick={() => setActiveFilter('suv')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'suv'
                  ? 'bg-[#1A3A5C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SUVs & Carens (₹15 - ₹22)
            </button>
            <button
              onClick={() => setActiveFilter('tempo')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'tempo'
                  ? 'bg-[#1A3A5C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tempo (₹27 - ₹35)
            </button>
            <button
              onClick={() => setActiveFilter('bus')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeFilter === 'bus'
                  ? 'bg-[#1A3A5C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              45-Seat Bus (₹55)
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Seating badge */}
                <div className="absolute top-3 left-3 bg-[#1A3A5C]/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span>{vehicle.seatingCapacity} Seater</span>
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-3 right-3 bg-[#C41E3A] text-white px-3.5 py-1.5 rounded-lg shadow-md">
                  <span className="text-lg font-black tracking-tight">₹{vehicle.perKmRate}</span>
                  <span className="text-xs font-semibold text-white/90"> / KM</span>
                </div>

                {/* AC Indicator */}
                <div className="absolute bottom-3 left-3 text-white text-xs flex items-center gap-1 drop-shadow-sm font-medium">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Chilled AC Guaranteed</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {vehicle.category}
                    </span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Available 24/7
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A3A5C] leading-snug group-hover:text-[#C41E3A] transition-colors">
                    {vehicle.name}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5">
                    {vehicle.description}
                  </p>

                  {/* Luggage & Specs */}
                  <div className="flex items-center gap-4 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{vehicle.luggageCapacity}</span>
                    </span>
                  </div>

                  {/* Bullet Key Features */}
                  <div className="mt-3 space-y-1">
                    {vehicle.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs: Book Now and Chat Now */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectVehicle(vehicle.id)}
                    className="py-2.5 px-3 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={generateWhatsAppLink(vehicle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
