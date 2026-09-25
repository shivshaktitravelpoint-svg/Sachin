import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Phone, AlertCircle, ArrowRightLeft, Car, Check } from 'lucide-react';
import { ServiceTab, TripType, BookingInquiry } from '../types';
import { GUJARAT_CITIES, VEHICLES, QUICK_ROUTES } from '../data/mockData';

interface BookingFormWidgetProps {
  onFormSubmitted: (inquiry: BookingInquiry) => void;
  selectedVehicleId?: string | null;
  initialFromCity?: string;
  initialToCity?: string;
}

export const BookingFormWidget: React.FC<BookingFormWidgetProps> = ({
  onFormSubmitted,
  selectedVehicleId,
  initialFromCity,
  initialToCity
}) => {
  const [serviceTab, setServiceTab] = useState<ServiceTab>('outstation');
  const [tripType, setTripType] = useState<TripType>('one-way');
  const [fromCity, setFromCity] = useState(initialFromCity || 'Pune');
  const [toCity, setToCity] = useState(initialToCity || 'Mumbai');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('08:00');
  const [returnDate, setReturnDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [vehicleId, setVehicleId] = useState(selectedVehicleId || 'swift-dzire');
  const [errorMessage, setErrorMessage] = useState('');

  // Set default date to tomorrow's date
  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrowStr = today.toISOString().split('T')[0];
    setDate(tomorrowStr);

    const afterTomorrow = new Date();
    afterTomorrow.setDate(afterTomorrow.getDate() + 3);
    setReturnDate(afterTomorrow.toISOString().split('T')[0]);
  }, []);

  // Sync if props change
  useEffect(() => {
    if (selectedVehicleId) {
      setVehicleId(selectedVehicleId);
    }
  }, [selectedVehicleId]);

  useEffect(() => {
    if (initialFromCity) setFromCity(initialFromCity);
    if (initialToCity) setToCity(initialToCity);
  }, [initialFromCity, initialToCity]);

  // Handle service tab change
  const handleServiceChange = (tab: ServiceTab) => {
    setServiceTab(tab);
    setErrorMessage('');
    if (tab === 'local') {
      setToCity('Local Sightseeing (8Hr / 80KM)');
    } else if (tab === 'airport') {
      setFromCity('Pune Airport (Lohegaon)');
      setToCity('PCMC (Pimpri-Chinchwad)');
    } else {
      setFromCity('Pune');
      setToCity('Mumbai');
    }
  };

  const swapCities = () => {
    if (serviceTab === 'outstation') {
      const temp = fromCity;
      setFromCity(toCity);
      setToCity(temp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fromCity.trim() || !toCity.trim()) {
      setErrorMessage('Please specify both pickup and destination locations.');
      return;
    }

    if (!date) {
      setErrorMessage('Please select a journey date.');
      return;
    }

    const selectedDateObj = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDateObj < today) {
      setErrorMessage('Please select a future date and time for your journey.');
      return;
    }

    if (tripType === 'round-trip' && returnDate) {
      const returnDateObj = new Date(returnDate);
      if (returnDateObj < selectedDateObj) {
        setErrorMessage('Return date cannot be earlier than your journey start date.');
        return;
      }
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for callback confirmation.');
      return;
    }

    const inquiry: BookingInquiry = {
      serviceTab,
      tripType,
      fromCity,
      toCity,
      date,
      time,
      returnDate: tripType === 'round-trip' ? returnDate : undefined,
      mobileNumber: cleanMobile,
      selectedVehicleId: vehicleId,
      createdAt: new Date().toISOString()
    };

    onFormSubmitted(inquiry);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-4xl mx-auto backdrop-blur-md">
      {/* Primary Tab Navigation */}
      <div className="bg-[#1A3A5C] p-2 sm:p-2.5 flex items-center justify-between border-b border-slate-700">
        <div className="grid grid-cols-3 gap-1.5 w-full">
          <button
            type="button"
            onClick={() => handleServiceChange('outstation')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all text-center ${
              serviceTab === 'outstation'
                ? 'bg-[#C41E3A] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Outstation Cab
          </button>
          <button
            type="button"
            onClick={() => handleServiceChange('local')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all text-center ${
              serviceTab === 'local'
                ? 'bg-[#C41E3A] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Local City Rides
          </button>
          <button
            type="button"
            onClick={() => handleServiceChange('airport')}
            className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all text-center ${
              serviceTab === 'airport'
                ? 'bg-[#C41E3A] text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            Airport Transfer
          </button>
        </div>
      </div>

      {/* Outstation Sub-tabs: One Way vs Round Trip */}
      {serviceTab === 'outstation' && (
        <div className="bg-slate-100 px-6 py-2.5 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={tripType === 'one-way'}
                onChange={() => setTripType('one-way')}
                className="w-4 h-4 text-[#C41E3A] accent-[#C41E3A]"
              />
              <span>One Way Journey</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-700">
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={tripType === 'round-trip'}
                onChange={() => setTripType('round-trip')}
                className="w-4 h-4 text-[#C41E3A] accent-[#C41E3A]"
              />
              <span>Round Trip (Discounted)</span>
            </label>
          </div>
          <span className="hidden sm:inline-block text-xs font-medium text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
            Pay Only For One-Way (No Empty Return Fees)
          </span>
        </div>
      )}

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
        {errorMessage && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#C41E3A]" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup City */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Pickup Location (From)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-[#C41E3A]" />
              </div>
              <input
                type="text"
                list="gujarat-cities"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                placeholder="Enter pickup city or landmark"
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A] transition-colors"
              />
            </div>
          </div>

          {/* Destination City with swap button */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Destination Location (To)
              </label>
              {serviceTab === 'outstation' && (
                <button
                  type="button"
                  onClick={swapCities}
                  className="text-xs text-[#1A3A5C] hover:text-[#C41E3A] flex items-center gap-1 font-medium transition-colors"
                  title="Swap From and To"
                >
                  <ArrowRightLeft className="w-3 h-3" />
                  <span>Swap</span>
                </button>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <input
                type="text"
                list="gujarat-cities"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                placeholder="Enter destination city or temple"
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Journey Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4 text-[#1A3A5C]" />
              </div>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Pickup Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Clock className="w-4 h-4 text-[#1A3A5C]" />
              </div>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
              />
            </div>
          </div>

          {serviceTab === 'outstation' && tripType === 'round-trip' && (
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                Return Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Calendar className="w-4 h-4 text-[#1A3A5C]" />
                </div>
                <input
                  type="date"
                  value={returnDate}
                  min={date || new Date().toISOString().split('T')[0]}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
                />
              </div>
            </div>
          )}

          {/* Vehicle Type Selection */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Vehicle Preference
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Car className="w-4 h-4 text-[#1A3A5C]" />
              </div>
              <select
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
              >
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} ({v.seatingCapacity}) - ₹{v.perKmRate}/KM
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Number for Callback */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Mobile Number (For Call)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4 text-emerald-600" />
              </div>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="10-digit mobile number"
                maxLength={13}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C41E3A]/40 focus:border-[#C41E3A]"
              />
            </div>
          </div>
        </div>

        {/* Quick Route Shortcuts for convenience */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-500 font-medium">Quick Routes:</span>
          {QUICK_ROUTES.map((r, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setFromCity(r.from);
                setToCity(r.to);
                setServiceTab('outstation');
              }}
              className="text-xs bg-slate-100 hover:bg-red-50 hover:text-[#C41E3A] text-slate-700 px-2.5 py-1 rounded-md transition-colors border border-slate-200"
            >
              {r.from} ➔ {r.to}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-[#C41E3A] hover:bg-[#b01730] text-white text-base font-extrabold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99] tracking-wide"
          >
            <span>Search Cab & Check Lowest Fare</span>
          </button>
          <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-2">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Instant Callback
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              No Payment Needed Now
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Transparent Per-KM Billing
            </span>
          </div>
        </div>
      </form>

      {/* Datalist for service cities */}
      <datalist id="gujarat-cities">
        {GUJARAT_CITIES.map((city) => (
          <option key={city} value={city} />
        ))}
      </datalist>
    </div>
  );
};
