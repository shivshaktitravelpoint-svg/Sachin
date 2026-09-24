import React, { useState } from 'react';
import { ShieldCheck, Compass, Sparkles, HeartHandshake, Award, CheckCircle2, Phone, ArrowRight, UserCheck, AlertTriangle } from 'lucide-react';
import { DRIVER_STANDARDS, COMPANY_INFO } from '../data/mockData';

interface DriverStandardsSectionProps {
  onBookNowClick: () => void;
  isFullPage?: boolean;
}

export const DriverStandardsSection: React.FC<DriverStandardsSectionProps> = ({
  onBookNowClick,
  isFullPage = false
}) => {
  const [showRecruitmentModal, setShowRecruitmentModal] = useState(false);
  const [driverName, setDriverName] = useState('');
  const [driverPhone, setDriverPhone] = useState('');
  const [vehicleOwned, setVehicleOwned] = useState('Swift Dzire');
  const [drivingExp, setDrivingExp] = useState('5+ Years');
  const [recruitmentSubmitted, setRecruitmentSubmitted] = useState(false);

  const handleDriverSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!driverName || !driverPhone) return;
    setRecruitmentSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Driver Training & Passenger Safety Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight">
            Our Professional Chauffeurs & Highway Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Your safety and spiritual comfort rest in the hands of our verified chauffeurs. Every driver represents our core values of respect, local expertise, and calm highway discipline.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DRIVER_STANDARDS.map((std) => {
            const getIcon = () => {
              switch (std.iconName) {
                case 'ShieldCheck':
                  return <ShieldCheck className="w-6 h-6 text-[#C41E3A]" />;
                case 'Compass':
                  return <Compass className="w-6 h-6 text-[#1A3A5C]" />;
                case 'Sparkles':
                  return <Sparkles className="w-6 h-6 text-amber-600" />;
                default:
                  return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
              }
            };

            return (
              <div
                key={std.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {getIcon()}
                </div>
                <h3 className="font-bold text-[#1A3A5C] text-base mb-2">
                  {std.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {std.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Driver Vetting Protocol Details */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#C41E3A] uppercase tracking-wider">
                The Shiv Shakti Driver Code
              </span>
              <h3 className="text-2xl font-black text-[#1A3A5C]">
                4-Point Verification & Training Protocol
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Before any driver is assigned a pilgrim or outstation trip, they must complete our mandatory verification program:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Police Verification & Aadhar Validation:</strong> Clean criminal history and authenticated identity.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Substance Policy:</strong> Strict sobriety pledge before every departure, with spot breathalyzer checks.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Saurashtra Route Mastery:</strong> Thorough understanding of bypasses, temple timings, and hospital access points.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Elderly & Family Courtesy:</strong> Trained to assist with heavy luggage, wheelchairs, and gentle acceleration.</span>
                </div>
              </div>
            </div>

            {/* Recruitment CTA box */}
            <div className="lg:col-span-4 bg-[#1A3A5C] text-white p-6 rounded-xl text-center space-y-4">
              <UserCheck className="w-10 h-10 text-[#F5A623] mx-auto" />
              <h4 className="text-lg font-bold">Are You An Experienced Commercial Driver?</h4>
              <p className="text-xs text-slate-300">
                Join Shiv Shakti’s trusted Gujarat network. Enjoy dignified pay, timely settlements, and respected pilgrimage tours.
              </p>
              <button
                onClick={() => setShowRecruitmentModal(true)}
                className="w-full py-2.5 px-4 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs font-bold rounded-lg shadow-md transition-all"
              >
                Join Our Team (Driver Application)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA for Rider Conversion */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-red-50 border border-red-200 rounded-2xl gap-4">
          <div>
            <h4 className="text-lg font-extrabold text-[#1A3A5C]">
              Ready for a Safe, Dignified Gujarat Journey?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Book your sanitized cab with an experienced local driver today.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBookNowClick}
              className="py-3 px-6 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Book a Ride Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="py-3 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-[#1A3A5C] text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C41E3A]" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Driver Application Modal */}
      {showRecruitmentModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            {!recruitmentSubmitted ? (
              <form onSubmit={handleDriverSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-[#1A3A5C]">
                    Driver Partner Application
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowRecruitmentModal(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs text-slate-500">
                  Apply to drive with Shiv Shakti Taxi Services. Commercial driver license and verified credentials required.
                </p>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                    placeholder="e.g. Ramesh Bhai Patel"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">Mobile Number (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    value={driverPhone}
                    onChange={(e) => setDriverPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">Vehicle Owned / Intended</label>
                  <select
                    value={vehicleOwned}
                    onChange={(e) => setVehicleOwned(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="Swift Dzire">Swift Dzire (Sedan)</option>
                    <option value="Maruti Ertiga">Maruti Ertiga (SUV)</option>
                    <option value="Kia Carens">Kia Carens (Luxury MUV)</option>
                    <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                    <option value="Tempo Traveller">Tempo Traveller (12/17/26)</option>
                    <option value="45 Seater Bus">45-Seater Tourist Coach Bus</option>
                    <option value="Driver Only (No Vehicle)">Driver Only (Looking for fleet car)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">Commercial Driving Experience</label>
                  <select
                    value={drivingExp}
                    onChange={(e) => setDrivingExp(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                  >
                    <option value="2-4 Years">2 to 4 Years</option>
                    <option value="5+ Years">5 to 9 Years</option>
                    <option value="10+ Years">10+ Years (Senior Chauffeur)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowRecruitmentModal(false)}
                    className="w-1/2 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs font-bold rounded-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-[#1A3A5C]">Application Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{driverName}</strong>. Our fleet transport manager will reach out to <strong>{driverPhone}</strong> within 24 hours for license and document verification.
                </p>
                <button
                  onClick={() => {
                    setRecruitmentSubmitted(false);
                    setShowRecruitmentModal(false);
                  }}
                  className="py-2 px-6 bg-[#1A3A5C] text-white text-xs font-bold rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
