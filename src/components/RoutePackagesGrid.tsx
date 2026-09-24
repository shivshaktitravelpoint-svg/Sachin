import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, MessageSquare, Compass, CheckCircle2, X, Phone, ShieldCheck } from 'lucide-react';
import { ROUTE_PACKAGES, COMPANY_INFO } from '../data/mockData';
import { RoutePackage } from '../types';

interface RoutePackagesGridProps {
  onSelectRoute: (from: string, to: string) => void;
}

export const RoutePackagesGrid: React.FC<RoutePackagesGridProps> = ({ onSelectRoute }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pilgrimage' | 'coastal' | 'intercity' | 'airport'>('all');
  const [activeModalPackage, setActiveModalPackage] = useState<RoutePackage | null>(null);

  const filteredRoutes = ROUTE_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'all') return true;
    return pkg.category === selectedCategory;
  });

  const getWhatsAppRouteLink = (pkg: RoutePackage) => {
    const text = encodeURIComponent(
      `Hello Shiv Shakti Taxi Services! I want to inquire about the *${pkg.title}* package (${pkg.distanceKm} KM, approx ${pkg.estDuration}). Please confirm car availability and exact fare quotation.`
    );
    return `https://wa.me/17499320650?text=${text}`;
  };

  return (
    <section id="packages-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Gujarat & Outstation Tours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight">
              Book Our Taxi Packages
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              Specialized routes connecting holy Jyotirlingas, coastal tourist destinations, and commercial expressways with fixed per-KM rates and optional one-way savings.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-xl shadow-xs border border-slate-200 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Routes' },
              { id: 'pilgrimage', label: 'Pilgrimage Yatras' },
              { id: 'coastal', label: 'Coastal & Diu' },
              { id: 'intercity', label: 'Intercity Express' },
              { id: 'airport', label: 'Airport Transfers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#C41E3A] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dense 4-Column Grid on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRoutes.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Vehicle Type Badge */}
                  <span className="absolute top-2.5 left-2.5 bg-[#1A3A5C]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {pkg.vehicleType}
                  </span>

                  {/* Per KM Price Badge */}
                  <div className="absolute bottom-2 right-2.5 bg-[#C41E3A] text-white text-xs font-extrabold px-2 py-1 rounded shadow-sm">
                    ₹{pkg.ratePerKm}/KM
                  </div>

                  {/* Distance & Duration badge */}
                  <div className="absolute bottom-2 left-2.5 text-white text-[11px] font-medium flex items-center gap-1.5">
                    <span>{pkg.distanceKm} KM</span>
                    <span className="text-white/40">·</span>
                    <span className="flex items-center gap-0.5">
                      <Clock className="w-3 h-3 text-[#F5A623]" />
                      {pkg.estDuration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-start gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C41E3A] shrink-0 mt-0.5" />
                    <span className="truncate">
                      {pkg.from} ➔ {pkg.to}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#1A3A5C] text-sm leading-snug group-hover:text-[#C41E3A] transition-colors line-clamp-2">
                    {pkg.title}
                  </h3>

                  {/* Highlights */}
                  <div className="space-y-1 pt-1">
                    {pkg.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Estimated Price Tag */}
                  {pkg.estimatedTotalSedan && (
                    <div className="bg-slate-50 border border-slate-100 rounded-md p-2 flex items-center justify-between text-xs mt-2">
                      <span className="text-slate-500">Est. Sedan One-Way:</span>
                      <span className="font-bold text-slate-800">₹{pkg.estimatedTotalSedan.toLocaleString()}*</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-0 space-y-2">
                <button
                  onClick={() => setActiveModalPackage(pkg)}
                  className="w-full text-xs text-slate-600 hover:text-[#C41E3A] font-semibold py-1 text-center transition-colors"
                >
                  View Itinerary & Fare Details →
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectRoute(pkg.from.split('/')[0].trim(), pkg.to.split('/')[0].trim())}
                    className="w-full py-2 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <a
                    href={getWhatsAppRouteLink(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-600" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Route Details Modal */}
        {activeModalPackage && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden transform animate-in fade-in zoom-in-95">
              <div className="relative h-48 bg-slate-800">
                <img
                  src={activeModalPackage.image}
                  alt={activeModalPackage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <button
                  onClick={() => setActiveModalPackage(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#F5A623] font-bold">
                    {activeModalPackage.vehicleType}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {activeModalPackage.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-400 block">Distance & Time:</span>
                    <span className="text-sm font-bold text-slate-800">
                      {activeModalPackage.distanceKm} KM ({activeModalPackage.estDuration})
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Per-KM Tariff:</span>
                    <span className="text-sm font-bold text-[#C41E3A]">
                      From ₹{activeModalPackage.ratePerKm}/KM
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Route En-Route Stops & Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeModalPackage.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeModalPackage.estimatedTotalSedan && (
                  <div className="border-t border-slate-100 pt-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Estimated One-Way Fares (All Fuel Included)
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-red-50 border border-red-100">
                        <span className="text-slate-600 block">Sedan (Dzire 4+1)</span>
                        <span className="text-base font-extrabold text-[#C41E3A]">
                          ₹{activeModalPackage.estimatedTotalSedan.toLocaleString()}*
                        </span>
                      </div>
                      {activeModalPackage.estimatedTotalSUV && (
                        <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100">
                          <span className="text-slate-600 block">SUV (Ertiga / Innova)</span>
                          <span className="text-base font-extrabold text-[#1A3A5C]">
                            ₹{activeModalPackage.estimatedTotalSUV.toLocaleString()}*
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-1.5">
                      *Tolls & state taxes extra as per actual receipts. Zero hidden driver allowances.
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => {
                      const fromCity = activeModalPackage.from.split('/')[0].trim();
                      const toCity = activeModalPackage.to.split('/')[0].trim();
                      setActiveModalPackage(null);
                      onSelectRoute(fromCity, toCity);
                    }}
                    className="flex-1 py-3 bg-[#C41E3A] hover:bg-[#a81931] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Book This Route</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="p-3 bg-slate-100 hover:bg-slate-200 text-[#1A3A5C] rounded-xl transition-colors"
                    title="Call Support"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
