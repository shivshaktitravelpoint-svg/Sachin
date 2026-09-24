import React from 'react';
import { CheckCircle2, Phone, MessageSquare, X, Calendar, Clock, MapPin, Shield } from 'lucide-react';
import { BookingInquiry } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface BookingConfirmationModalProps {
  inquiry: BookingInquiry | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({ inquiry, onClose }) => {
  if (!inquiry) return null;

  // Build pre-filled WhatsApp message
  const whatsappMsg = encodeURIComponent(
    `Namaste Shiv Shakti Taxi Services! I have submitted a booking inquiry on your website:\n` +
    `• Service: ${inquiry.serviceTab.toUpperCase()} (${inquiry.tripType.toUpperCase()})\n` +
    `• Route: ${inquiry.fromCity} ➔ ${inquiry.toCity}\n` +
    `• Date: ${inquiry.date} at ${inquiry.time}\n` +
    (inquiry.returnDate ? `• Return Date: ${inquiry.returnDate}\n` : '') +
    `• Contact: ${inquiry.mobileNumber}\n` +
    `Please confirm the vehicle availability and lowest fare quote. Thank you!`
  );

  const whatsappDirectLink = `https://wa.me/17499320650?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Header with brand colors */}
        <div className="bg-[#1A3A5C] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                Inquiry Received
              </span>
              <h3 className="text-xl font-bold text-white">Booking Inquiry Submitted!</h3>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-5">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-slate-800 font-semibold text-base leading-snug">
              Thank you! Our team will call you shortly to confirm your booking.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Your pickup details have been dispatched to our Somnath / Saurashtra dispatch desk.
            </p>
          </div>

          {/* Route Summary */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2.5 py-1.5 border-b border-slate-100">
              <MapPin className="w-4 h-4 text-[#C41E3A] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block">Route & Trip Type</span>
                <span className="font-semibold text-slate-800">
                  {inquiry.fromCity} ➔ {inquiry.toCity}
                </span>
                <span className="text-xs text-slate-500 ml-2 font-medium capitalize">
                  ({inquiry.tripType.replace('-', ' ')})
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 py-1.5 border-b border-slate-100">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Journey Date</span>
                  <span className="font-semibold text-slate-800">{inquiry.date}</span>
                  {inquiry.returnDate && (
                    <span className="text-xs text-slate-500 block">Ret: {inquiry.returnDate}</span>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Pickup Time</span>
                  <span className="font-semibold text-slate-800">{inquiry.time}</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 py-1.5">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block">Customer Mobile</span>
                <span className="font-semibold text-slate-800">{inquiry.mobileNumber}</span>
              </div>
            </div>
          </div>

          {/* Immediate Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Instant Confirmation via WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 py-1">
              <span>Need immediate assistance? Call our 24/7 helpline:</span>
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-2.5 px-4 bg-[#1A3A5C] hover:bg-[#122840] text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F5A623]" />
              <span>Direct Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>Zero Advance Required · Clean Sanitized Vehicle Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
