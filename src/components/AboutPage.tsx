import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Clock, MapPin, Phone, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';
import heroSomnathImg from '../assets/images/hero_somnath_temple_1790232678746.jpg';
import dwarkaImg from '../assets/images/pilgrimage_dwarkadhish_route_1790232737355.jpg';
import { COMPANY_INFO, GUJARAT_CITIES } from '../data/mockData';

interface AboutPageProps {
  onBookNowClick: () => void;
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookNowClick, onContactClick }) => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#1A3A5C] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={heroSomnathImg}
            alt="Somnath Shore"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#F5A623] text-xs font-bold uppercase tracking-wider">
            Locally Rooted · Pilgrimage Specialists
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-balance">
            About Shiv Shakti Taxi Services
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
            Providing reliable, safe, and transparent transportation across Somnath, Dwarka, and Western India for over a decade.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C41E3A]">
              Our Origins
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A3A5C]">
              Born on the Sacred Shores of Somnath & Saurashtra
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded over 12 years ago, <strong>Shiv Shakti Taxi Services</strong> began with a single mission: to provide pilgrims arriving at the sacred shrines of Somnath Jyotirlinga and Dwarkadhish Dham with dignified, punctual, and transparent transportation.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike generic corporate cab aggregators who rely on surge pricing and unfamiliar drivers, our network is anchored by veteran local chauffeurs who revere these routes and treat every devotee like family. Today, we have served over 45,000 successful trips across Gujarat, Maharashtra, and Rajasthan.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src={dwarkaImg}
              alt="Dwarka Highway Pilgrimage Route"
              referrerPolicy="no-referrer"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-[#1A3A5C]">Our Core Values</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding every kilometer we travel and every customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C41E3A] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Uncompromising Safety</h4>
              <p className="text-xs text-slate-500">
                Speed governors, emergency tools, verified licenses, and alcohol-free chauffeurs.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#1A3A5C] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Time Reliability</h4>
              <p className="text-xs text-slate-500">
                15-minute early reporting for train and flight pickups. Zero cancellation surprises.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Price Transparency</h4>
              <p className="text-xs text-slate-500">
                Fixed per-KM rates starting from ₹13/KM. No hidden driver fees or empty return charges for one-way rides.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Community Service</h4>
              <p className="text-xs text-slate-500">
                Special assistance and priority scheduling for elderly pilgrims and charitable groups.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Regions Coverage */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-[#C41E3A] font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Service Coverage Area</span>
          </div>
          <h3 className="text-xl font-bold text-[#1A3A5C]">
            Operating Hubs Across Gujarat & Western India
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            We operate outstation and pilgrimage taxi services across all major cities, railway stations, and airports:
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {GUJARAT_CITIES.map((city, idx) => (
              <span
                key={idx}
                className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 shadow-2xs"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="p-8 rounded-2xl bg-[#1A3A5C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-2xl font-black">Plan Your Gujarat Journey With Us</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Call our 24/7 travel desk for customized itineraries and lowest per-KM estimates.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBookNowClick}
              className="py-3 px-6 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Book a Cab Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F5A623]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
