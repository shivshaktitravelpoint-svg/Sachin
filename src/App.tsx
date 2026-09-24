import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { AboutSection } from './components/AboutSection';
import { FleetShowcase } from './components/FleetShowcase';
import { RoutePackagesGrid } from './components/RoutePackagesGrid';
import { ServicesSection } from './components/ServicesSection';
import { DriverStandardsSection } from './components/DriverStandardsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyContactBar } from './components/StickyContactBar';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { AboutPage } from './components/AboutPage';
import { BookingInquiry } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'about' | 'driver' | 'contact'>('home');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>('swift-dzire');
  const [initialFromCity, setInitialFromCity] = useState<string>('Somnath');
  const [initialToCity, setInitialToCity] = useState<string>('Dwarka');
  const [confirmedInquiry, setConfirmedInquiry] = useState<BookingInquiry | null>(null);

  // Scroll to booking form widget
  const handleScrollToBooking = () => {
    if (activePage !== 'home') {
      setActivePage('home');
    }
    setTimeout(() => {
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 50);
  };

  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    handleScrollToBooking();
  };

  const handleSelectRoute = (from: string, to: string) => {
    setInitialFromCity(from);
    setInitialToCity(to);
    handleScrollToBooking();
  };

  const handleFormSubmitted = (inquiry: BookingInquiry) => {
    setConfirmedInquiry(inquiry);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2D3748] pb-16 md:pb-0">
      {/* Top Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onBookNowClick={handleScrollToBooking}
      />

      {/* Main Page Routing & Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* Hero Section with Floating Booking Form Widget */}
            <HeroBanner
              onFormSubmitted={handleFormSubmitted}
              selectedVehicleId={selectedVehicleId}
              initialFromCity={initialFromCity}
              initialToCity={initialToCity}
              onBookNowClick={handleScrollToBooking}
            />

            {/* About Us Preview Section */}
            <AboutSection
              onBookNowClick={handleScrollToBooking}
              onNavigateAbout={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Fleet Showcase Section */}
            <FleetShowcase onSelectVehicle={handleSelectVehicle} />

            {/* Route Packages Grid */}
            <RoutePackagesGrid onSelectRoute={handleSelectRoute} />

            {/* Service Categories Section */}
            <ServicesSection onBookNowClick={handleScrollToBooking} />

            {/* Driver Standards Section */}
            <DriverStandardsSection onBookNowClick={handleScrollToBooking} />

            {/* Customer Testimonials Section */}
            <TestimonialsSection />

            {/* FAQ Accordion Section */}
            <FaqSection />

            {/* Quick Contact & Office Section */}
            <ContactSection />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage
            onBookNowClick={handleScrollToBooking}
            onContactClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activePage === 'driver' && (
          <div className="pt-4">
            <DriverStandardsSection
              onBookNowClick={handleScrollToBooking}
              isFullPage={true}
            />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-4">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onSelectRoute={handleSelectRoute}
      />

      {/* Mobile Sticky Action Bar */}
      <StickyContactBar onBookNowClick={handleScrollToBooking} />

      {/* Booking Confirmation Dialog Modal */}
      <BookingConfirmationModal
        inquiry={confirmedInquiry}
        onClose={() => setConfirmedInquiry(null)}
      />
    </div>
  );
}
