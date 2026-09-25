import React from 'react';
import { Navigation, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, ROUTE_PACKAGES } from '../data/mockData';

interface FooterProps {
  setActivePage: (page: 'home' | 'about' | 'driver' | 'contact') => void;
  onSelectRoute: (from: string, to: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onSelectRoute }) => {
  const handleNav = (page: 'home' | 'about' | 'driver' | 'contact') => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A3A5C] text-slate-300 pt-16 pb-12 border-t-4 border-[#C41E3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C41E3A] flex items-center justify-center text-white font-bold">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white leading-none block">
                  Shiv Shakti
                </span>
                <span className="text-[11px] text-[#F5A623] font-semibold uppercase tracking-wider block mt-0.5">
                  Taxi & Tour Services
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              24x7 Pune PCMC cab service. Comfortable, safe, and transparent per-KM journeys connecting Pune, Mumbai, Nashik, Kolhapur, Sambhaji Nagar, Goa, and all Indian cities.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-2 rounded-lg bg-white/10 hover:bg-[#C41E3A] text-white transition-colors"
                aria-label="Call Helpline"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-emerald-600 text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-2 rounded-lg bg-white/10 hover:bg-blue-600 text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us & Company Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('driver')}
                  className="hover:text-white transition-colors text-left"
                >
                  Driver Standards & Vetting
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us & Office Address
                </button>
              </li>
              <li>
                <a
                  href="#fleet-section"
                  className="hover:text-white transition-colors block"
                >
                  Our Taxi Fleet & Fares
                </a>
              </li>
              <li>
                <a
                  href="#packages-section"
                  className="hover:text-white transition-colors block"
                >
                  Pune Tour Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Pilgrimage Packages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Popular Pune Yatras
            </h4>
            <ul className="space-y-2 text-xs">
              {ROUTE_PACKAGES.filter((pkg) => pkg.category === 'pilgrimage').map((pkg) => (
                <li key={pkg.id}>
                  <button
                    onClick={() => {
                      handleNav('home');
                      onSelectRoute(pkg.from.split('/')[0].trim(), pkg.to.split('/')[0].trim());
                    }}
                    className="hover:text-[#F5A623] transition-colors text-left truncate max-w-full block"
                  >
                    {pkg.from.split('/')[0].trim()} ➔ {pkg.to.split('/')[0].trim()} (₹{pkg.ratePerKm}/KM)
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-white/10 pb-2">
              Contact & Booking Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">24/7 Booking Helpline:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white font-bold hover:text-[#F5A623] transition-colors text-sm"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Email Address:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white hover:underline truncate block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Registered Office:</span>
                  <p className="text-slate-200 leading-snug">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block">Service Hours:</span>
                  <p className="text-emerald-300 font-medium">
                    24x7 All Year Round
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Shiv Shakti Taxi Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Transparent Per-KM Pricing</span>
            <span>·</span>
            <span>Safety Assured</span>
            <span>·</span>
            <span>Zero Advance Required</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
