import React from 'react';
import { Compass, Plane, Users2, Landmark, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface ServicesSectionProps {
  onBookNowClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookNowClick }) => {
  const services = [
    {
      id: 'outstation',
      icon: Compass,
      title: 'Outstation Cabs (One-Way & Round Trip)',
      description: 'Reliable doorstep taxi service from Pune & PCMC across Maharashtra, Goa & beyond. Never pay return fare for one-way journeys.',
      rate: 'Starting ₹13/KM',
      badge: 'Best Value',
      points: ['Doorstep pickup & drop', '24/7 highway assistance', 'Clean AC vehicles', 'Luggage support']
    },
    {
      id: 'pilgrimage',
      icon: Landmark,
      title: 'Maharashtra & Jyotirlinga Yatra Tours',
      description: 'Yatra packages from Pune & Mumbai to Bhimashankar, Trimbakeshwar, Shirdi, Ellora, Mahalaxmi & Jotiba, and all Jyotirlingas.',
      rate: 'Fixed Packages Available',
      badge: 'Devotee Choice',
      points: ['Darshan timings coordination', 'Senior citizen pace', 'Temple pass assistance', 'Experienced guide chauffeurs']
    },
    {
      id: 'airport',
      icon: Plane,
      title: 'Airport Pick & Drop Transfers',
      description: 'Fixed-rate airport taxi for Pune (Lohegaon) and Mumbai airports with complimentary flight tracking.',
      rate: 'Starting ₹1,499 Flat / KM',
      badge: 'Zero Waiting Charge',
      points: ['Complimentary waiting 45m', 'Name board meet & greet', 'Luggage assistance', 'Early morning rides']
    },
    {
      id: 'group',
      icon: Users2,
      title: 'Tempo Travellers & 45-Seat Bus',
      description: 'Spacious 12/17/26-seater Tempo Travellers (₹27-₹35/KM) and luxury 45-seater AC tourist coach bus (₹55/KM) for devotee sanghs and grand tours.',
      rate: '₹27/KM to ₹55/KM',
      badge: '12 to 45 Seats',
      points: ['Pushback reclining seats', 'High-roof walkthrough', 'Massive luggage capacity', 'High-power dual AC & mic']
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Comprehensive Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight">
            Our Taxi Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whether for a sacred temple darshan, an urgent flight pickup, or a family holiday, Shiv Shakti provides transparent, stress-free travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 text-[#C41E3A] flex items-center justify-center group-hover:bg-[#C41E3A] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1A3A5C] text-lg mb-2 leading-snug group-hover:text-[#C41E3A] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {svc.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-200/60 mb-4">
                    {svc.points.map((pt, i) => (
                      <div key={i} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#C41E3A]" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-black text-[#C41E3A] mb-3">
                    {svc.rate}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="py-2 px-2.5 rounded-lg bg-slate-200/70 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C41E3A]" />
                      <span>Call Now</span>
                    </a>
                    <button
                      onClick={onBookNowClick}
                      className="py-2 px-2.5 rounded-lg bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
