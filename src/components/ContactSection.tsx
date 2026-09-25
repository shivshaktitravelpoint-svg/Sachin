import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Shield, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, OPERATING_HUBS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Outstation Round Trip');
  const [travelDate, setTravelDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Booking Desk & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight">
            Contact Shiv Shakti Taxi Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Need an urgent cab pickup, customized temple package, or group tempo traveller? Reach out directly via call, WhatsApp, or the inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Box */}
            <div className="bg-[#1A3A5C] text-white p-7 rounded-2xl shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C41E3A] flex items-center justify-center text-white font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5A623] font-semibold">
                    Instant Telephone Booking
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {COMPANY_INFO.phone}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Available 24 hours a day, 7 days a week for immediate pickups, airport rides, and pilgrimage reservations.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex-1 py-3 px-4 bg-[#C41E3A] hover:bg-[#a81931] text-white text-xs font-bold rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Address & Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-[#C41E3A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Head Office Address</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1A3A5C] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Email</h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-[#1A3A5C] hover:text-[#C41E3A] transition-colors mt-0.5 block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Operating Schedule</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    24 Hours / 7 Days a Week (All Festival Days Included)
                  </p>
                </div>
              </div>
            </div>

            {/* Static Service Area Representation */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Key Operating Hubs (Pune & Beyond)
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                {OPERATING_HUBS.map((hub, idx) => (
                  <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-md font-medium text-slate-700">
                    {hub}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                *Doorstep pickup from any hotel, residence, railway station, or airport across Western India.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry & Message Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1A3A5C]">
                    Send a Direct Service Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your travel requirements. We will review your route and respond with a transparent fare quote within 15 minutes.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#C41E3A]" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Narendra Bhai"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Mobile Number (For Call & WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Service Required
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                    >
                      <option value="Pune Pilgrimage Yatra">Pune Pilgrimage Yatra</option>
                      <option value="Outstation One-Way Taxi">Outstation One-Way Taxi</option>
                      <option value="Outstation Round Trip">Outstation Round Trip</option>
                      <option value="Airport Pickup / Drop">Airport Pickup / Drop</option>
                      <option value="Luxury Tempo Traveller Group">Luxury Tempo Traveller Group (12-26)</option>
                      <option value="45-Seater Luxury Tourist Bus">45-Seater Luxury Tourist Bus (₹55/KM)</option>
                      <option value="Local Sightseeing">Local Sightseeing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Planned Date of Journey
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Trip Details & Notes (Pickup Address, Passenger Count, Special Requests)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. We are 5 passengers needing an Ertiga or Innova from Ravet, Pune to Shirdi on 15th morning..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#C41E3A] hover:bg-[#a81931] text-white text-sm font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry (Instant Callback)</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    No online payment required. Confirmation will be provided over phone or WhatsApp.
                  </p>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1A3A5C]">
                    Inquiry Received, {name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                    Thank you for reaching out to Shiv Shakti Taxi Services. Our booking manager will call you at <strong>{phone}</strong> within 15 minutes with vehicle options and exact tariff details.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl max-w-sm mx-auto border border-slate-200 text-xs text-slate-600 text-left space-y-1">
                  <div><strong>Service:</strong> {serviceType}</div>
                  {travelDate && <div><strong>Date:</strong> {travelDate}</div>}
                  <div><strong>Customer Helpline:</strong> {COMPANY_INFO.phone}</div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={`https://wa.me/917499320650?text=${encodeURIComponent(
                      `Hello Shiv Shakti Taxi Services! I just submitted an inquiry on your website: ${name} (${phone}) for ${serviceType}. Please confirm availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-5 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow-up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
