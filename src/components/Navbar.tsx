import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  activePage: 'home' | 'about' | 'driver' | 'contact';
  setActivePage: (page: 'home' | 'about' | 'driver' | 'contact') => void;
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onBookNowClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'driver' | 'contact') => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Trust Strip */}
      <div className="bg-[#1A3A5C] text-white text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#F5A623]" />
              <span className="hidden sm:inline">24x7 Gujarat Pilgrimage & Outstation Taxi</span>
              <span className="sm:hidden">24x7 Gujarat Cabs</span>
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-slate-300">
              Somnath · Dwarka · Ahmedabad · Rajkot · Airport Transfers
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1 font-semibold text-[#F5A623] hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Zone 1: Single text element Brand Wordmark */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-lg bg-[#C41E3A] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1A3A5C] leading-none">
                  Shiv Shakti
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C41E3A] mt-0.5">
                  Taxi & Tour Services
                </span>
              </div>
            </div>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-sm font-semibold transition-colors pb-1 border-b-2 ${
                  activePage === 'home'
                    ? 'text-[#C41E3A] border-[#C41E3A]'
                    : 'text-slate-700 border-transparent hover:text-[#C41E3A]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-sm font-semibold transition-colors pb-1 border-b-2 ${
                  activePage === 'about'
                    ? 'text-[#C41E3A] border-[#C41E3A]'
                    : 'text-slate-700 border-transparent hover:text-[#C41E3A]'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('driver')}
                className={`text-sm font-semibold transition-colors pb-1 border-b-2 ${
                  activePage === 'driver'
                    ? 'text-[#C41E3A] border-[#C41E3A]'
                    : 'text-slate-700 border-transparent hover:text-[#C41E3A]'
                }`}
              >
                Driver Standards
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-semibold transition-colors pb-1 border-b-2 ${
                  activePage === 'contact'
                    ? 'text-[#C41E3A] border-[#C41E3A]'
                    : 'text-slate-700 border-transparent hover:text-[#C41E3A]'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Zone 3: Primary Action buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#1A3A5C] text-sm font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#C41E3A]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={onBookNowClick}
                className="px-5 py-2.5 rounded-lg bg-[#C41E3A] hover:bg-[#a51830] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                BOOK YOUR RIDE NOW
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-2 rounded-lg bg-red-50 text-[#C41E3A]"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2 rounded-md text-base font-semibold ${
                  activePage === 'home' ? 'bg-red-50 text-[#C41E3A]' : 'text-slate-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left px-3 py-2 rounded-md text-base font-semibold ${
                  activePage === 'about' ? 'bg-red-50 text-[#C41E3A]' : 'text-slate-800'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('driver')}
                className={`text-left px-3 py-2 rounded-md text-base font-semibold ${
                  activePage === 'driver' ? 'bg-red-50 text-[#C41E3A]' : 'text-slate-800'
                }`}
              >
                Driver Standards
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left px-3 py-2 rounded-md text-base font-semibold ${
                  activePage === 'contact' ? 'bg-red-50 text-[#C41E3A]' : 'text-slate-800'
                }`}
              >
                Contact Us
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="w-full py-3 bg-[#C41E3A] text-white font-bold rounded-lg text-center"
              >
                BOOK YOUR RIDE NOW
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-[#1A3A5C] font-semibold text-sm rounded-lg"
                >
                  <Phone className="w-4 h-4 text-[#C41E3A]" />
                  Call Now
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-700 font-semibold text-sm rounded-lg"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
