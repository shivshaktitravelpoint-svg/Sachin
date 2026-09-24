import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C41E3A] mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Real Devotees & Travellers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A3A5C] tracking-tight">
            Why People Love Shiv Shakti
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read unedited feedback from pilgrims, families, and business travelers who entrust their sacred journeys to us.
          </p>
        </div>

        {/* Featured Rotating Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 relative shadow-md">
            <Quote className="w-16 h-16 text-slate-200 absolute top-6 right-8 -z-0" />

            <div className="relative z-10 space-y-6">
              {/* Star rating */}
              <div className="flex items-center gap-1 text-[#F5A623]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#F5A623]" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic">
                "{current.comment}"
              </blockquote>

              {/* Author Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-200/80 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A5C] text-white flex items-center justify-center font-bold text-lg">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {current.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {current.location} · {current.routeTaken}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-semibold text-[#C41E3A] block">
                    {current.vehicleUsed}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Traveled in {current.travelDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? 'w-6 bg-[#C41E3A]' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#1A3A5C] hover:text-white transition-colors shadow-xs"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#1A3A5C] hover:text-white transition-colors shadow-xs"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Grid mini testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 text-[#F5A623] mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F5A623]" />
                ))}
              </div>
              <p className="text-xs text-slate-600 line-clamp-3 italic mb-3">
                "{item.comment}"
              </p>
              <div className="text-xs font-bold text-[#1A3A5C]">{item.name}</div>
              <div className="text-[11px] text-slate-400">{item.location} · {item.routeTaken}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
