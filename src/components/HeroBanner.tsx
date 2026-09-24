import React from 'react';
import { Phone, ShieldCheck, Award, Clock } from 'lucide-react';
import heroSomnathImg from '../assets/images/hero_somnath_temple_1790232678746.jpg';
import { BookingFormWidget } from './BookingFormWidget';
import { BookingInquiry } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface HeroBannerProps {
  onFormSubmitted: (inquiry: BookingInquiry) => void;
  selectedVehicleId?: string | null;
  initialFromCity?: string;
  initialToCity?: string;
  onBookNowClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onFormSubmitted,
  selectedVehicleId,
  initialFromCity,
  initialToCity,
  onBookNowClick
}) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with Somnath temple and deep navy gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSomnathImg}
          alt="Somnath Temple Gujarat Pilgrimage Heritage by the Arabian Sea"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90"
        />
        {/* Gradients: Navy and deep black scrim for high WCAG legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5C]/95 via-[#1A3A5C]/85 to-[#0F172A]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Top Banner Action Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold self-start">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
            <span>Gujarat's Most Trusted Pilgrimage & Outstation Taxi Network</span>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Call +917499320650</span>
            </a>
            <button
              onClick={onBookNowClick}
              className="px-5 py-2 rounded-lg bg-[#C41E3A] hover:bg-[#a51830] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-red-900/30 transition-all uppercase tracking-wider active:scale-95"
            >
              BOOK YOUR RIDE NOW
            </button>
          </div>
        </div>

        {/* Headlines */}
        <div className="text-center max-w-3xl mx-auto mb-8 text-white space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-sm text-balance">
            Quick & Safe And Budget Cab
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto text-balance">
            Search Best Cab Now | Quick, Simple & Easy | Safety Assured, Lowest Fare
          </p>

          {/* Value Micro-Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Highway Drivers
            </span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#F5A623]" />
              Fares Starting ₹13/KM
            </span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              Instant Somnath & Dwarka Pickup
            </span>
          </div>
        </div>

        {/* Floating Centered Booking Form Widget */}
        <div className="mt-4">
          <BookingFormWidget
            onFormSubmitted={onFormSubmitted}
            selectedVehicleId={selectedVehicleId}
            initialFromCity={initialFromCity}
            initialToCity={initialToCity}
          />
        </div>
      </div>
    </section>
  );
};
