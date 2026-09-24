import React from 'react';
import { Shield, Clock, HeartHandshake, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroSomnathImg from '../assets/images/hero_somnath_temple_1790232678746.jpg';
import innovaImg from '../assets/images/fleet_innova_crysta_1790232704839.jpg';
import { COMPANY_INFO } from '../data/mockData';

interface AboutSectionProps {
  onBookNowClick: () => void;
  onNavigateAbout?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookNowClick, onNavigateAbout }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Montage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <img
                src={heroSomnathImg}
                alt="Somnath Temple Heritage Backdrop"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-[#F5A623] uppercase tracking-wider">
                  Devoted Service Since 2012
                </span>
                <p className="text-base font-bold">
                  Connecting Somnath, Dwarka & Saurashtra's Holy Shrines
                </p>
              </div>
            </div>

            {/* Overlapping Vehicle Image Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={innovaImg}
                alt="Shiv Shakti Fleet Innova"
                referrerPolicy="no-referrer"
                className="w-full h-36 object-cover"
              />
              <div className="p-2 bg-[#1A3A5C] text-white flex items-center justify-between text-xs">
                <span className="font-semibold">Toyota Innova Crysta</span>
                <span className="text-[#F5A623] font-bold">₹22/KM</span>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-[#C41E3A] flex items-center justify-center font-bold text-lg">
                12+
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Over a decade of</span>
                <span className="text-sm font-bold text-slate-900">Local Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Welcome Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
                <span className="w-2 h-0.5 bg-[#C41E3A]" />
                <span>Our Heritage & Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight text-balance leading-tight">
                Welcome To Shiv Shakti Tour & Travels
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Welcome to <strong>Shiv Shakti Tour & Travels</strong>, your go-to taxi service for a comfortable, safe, and reliable journey in Somnath and beyond. As a locally-rooted company with deep commitment to our community, we offer transportation tailored to your needs.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are an elderly pilgrim embarking on the sacred Dwarka-Somnath Jyotirlinga circuit, an NRI family exploring the Rann of Kutch, or a business executive needing dependable airport transfers at Ahmedabad or Rajkot, our courteous chauffeurs and meticulously sanitized fleet ensure absolute peace of mind.
            </p>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-[#C41E3A] flex items-center justify-center mb-2.5">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Safety First</h3>
                <p className="text-xs text-slate-500">
                  Speed-regulated vehicles, certified highway chauffeurs, and 24/7 highway assistance.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1A3A5C] flex items-center justify-center mb-2.5">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Punctual Pickups</h3>
                <p className="text-xs text-slate-500">
                  Never miss temple darshan aarti timings or train and flight departures.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">Fair & Transparent</h3>
                <p className="text-xs text-slate-500">
                  Zero hidden costs. Per-KM rates fixed upfront from ₹13/KM with digital billing.
                </p>
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={onBookNowClick}
                className="px-6 py-3 rounded-xl bg-[#C41E3A] hover:bg-[#a81931] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Book Your Cab Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#1A3A5C] border border-slate-300 font-bold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C41E3A]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              {onNavigateAbout && (
                <button
                  onClick={onNavigateAbout}
                  className="text-xs font-semibold text-slate-600 hover:text-[#C41E3A] underline underline-offset-4 ml-auto"
                >
                  Read Our Full Story →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
