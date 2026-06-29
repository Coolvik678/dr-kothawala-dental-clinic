"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/kothawala/Navbar";
import Hero from "@/components/kothawala/Hero";
import AboutSection from "@/components/kothawala/AboutSection";
import ServicesGrid from "@/components/kothawala/ServicesGrid";
import ClinicGallery from "@/components/kothawala/ClinicGallery";
import TestimonialsSection from "@/components/kothawala/TestimonialsSection";
import BookingFooter from "@/components/kothawala/BookingFooter";
import BookingModal from "@/components/kothawala/BookingModal";
import WhatsAppFAB from "@/components/kothawala/WhatsAppFAB";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#0D9488] selection:text-white antialiased">
      {/* Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <AboutSection />
        <ServicesGrid onOpenBooking={handleOpenBooking} />
        <ClinicGallery />
        <TestimonialsSection />
      </main>

      {/* Footer & Booking */}
      <BookingFooter onOpenBooking={handleOpenBooking} />

      {/* Floating Action Elements */}
      <WhatsAppFAB />
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
