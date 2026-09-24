import React from 'react';
import { Phone, MessageSquare, Car } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface StickyContactBarProps {
  onBookNowClick: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onBookNowClick }) => {
  return (
    <aside
      aria-label="Quick Contact and Booking"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A3A5C] border-t border-slate-700 shadow-2xl px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-slate-800 text-white rounded-lg text-[11px] font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#F5A623] mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-600 text-white rounded-lg text-[11px] font-bold active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookNowClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#C41E3A] text-white rounded-lg text-[11px] font-bold active:scale-95 transition-transform shadow-sm"
        >
          <Car className="w-4 h-4 text-white mb-0.5" />
          <span>Book Cab</span>
        </button>
      </div>
    </aside>
  );
};
