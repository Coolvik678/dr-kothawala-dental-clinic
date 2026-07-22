"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/kothawala/Navbar";
import Hero from "@/components/kothawala/Hero";
import AboutSection from "@/components/kothawala/AboutSection";
import ServicesGrid from "@/components/kothawala/ServicesGrid";
import ClinicGallery from "@/components/kothawala/ClinicGallery";
import TestimonialsSection from "@/components/kothawala/TestimonialsSection";
import FAQSection from "@/components/kothawala/FAQSection";
import BookingFooter from "@/components/kothawala/BookingFooter";
import BookingModal from "@/components/kothawala/BookingModal";
import WhatsAppFAB from "@/components/kothawala/WhatsAppFAB";

import { AnimatedBeam } from "@/components/ui/magic/AnimatedBeam";
import { InteractiveGlobe } from "@/components/ui/magic/InteractiveGlobe";
import { ClinicalRecoveryChart } from "@/components/ui/charts/ClinicalRecoveryChart";
import { ToothModelViewer3D } from "@/components/ui/3d/ToothModelViewer3D";
import { LiquidGlassDrawer } from "@/components/ui/kokonut/LiquidGlassDrawer";
import { TreatmentCostCalculator } from "@/components/ui/calculator/TreatmentCostCalculator";
import { BeforeAfterSlider } from "@/components/ui/slider/BeforeAfterSlider";
import { SterilizationChamber } from "@/components/ui/sterilization/SterilizationChamber";
import { HygieneQuiz } from "@/components/ui/quiz/HygieneQuiz";
import { ScrollProgressBar } from "@/components/ui/navigation/ScrollProgressBar";
import { EmergencyHotlinePill } from "@/components/ui/pill/EmergencyHotlinePill";

import { useAnimePathDraw, useAnimeStagger } from "@/hooks/use-anime";
import { Scan, Cpu, Stethoscope, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { ShinyButton } from "@/components/ui/magic/ShinyButton";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useAnimeStagger("#kothawala-main", ".kothawala-card");
  useAnimePathDraw(".kothawala-svg-path");

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-[#0D9488] selection:text-white antialiased">
      {/* 12. TOP GLOWING SCROLL PROGRESS BAR */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Showcase */}
      <main id="kothawala-main" className="flex-grow">
        {/* HERO SECTION */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 1. 3D TOOTH MESH & 6. STERILIZATION CHAMBER SHOWCASE SECTION */}
        <section className="py-16 px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ToothModelViewer3D />
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 text-teal-400 border border-teal-500/30 text-xs font-bold">
                <Sparkles className="h-4 w-4" /> 10-MICRON DIGITAL PRECISION
              </div>
              <h2 className="text-3xl font-extrabold text-white leading-tight">
                3D Anatomical Precision & Class B UV-C Sterilization
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Experience real-time 3D implant simulations alongside 100% hospital grade autoclaved sterilization protocols.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <SterilizationChamber />
                <ShinyButton onClick={() => setIsDrawerOpen(true)} className="h-12 text-xs">
                  Open Virtual Consultation Drawer
                </ShinyButton>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* 3. TREATMENT COST & 0% EMI CALCULATOR */}
        <section className="py-16 px-6 max-w-7xl mx-auto w-full">
          <TreatmentCostCalculator onOpenBooking={handleOpenBooking} />
        </section>

        {/* MAGIC UI ANIMATED BEAM: 4-Step Patient Pathway */}
        <section className="py-16 px-4 max-w-7xl mx-auto w-full">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
              MAGIC UI ANIMATED BEAM CONNECTOR
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">4-Step Precision Patient Treatment Pathway</h3>
          </div>

          <AnimatedBeam
            steps={[
              {
                title: "1. 3D Digital Scan",
                description: "Ultra-high resolution intraoral mapping.",
                icon: <Scan className="h-6 w-6" />,
              },
              {
                title: "2. 7-Consultant Case Review",
                description: "Multi-specialty expert panel evaluation.",
                icon: <Cpu className="h-6 w-6" />,
              },
              {
                title: "3. Micro-Invasive Treatment",
                description: "Pain-free 100% sterilized procedure.",
                icon: <Stethoscope className="h-6 w-6" />,
              },
              {
                title: "4. Lifetime Smile Warranty",
                description: "Continuous digital post-care tracking.",
                icon: <CheckCircle2 className="h-6 w-6" />,
              },
            ]}
          />
        </section>

        {/* SERVICES GRID */}
        <ServicesGrid onOpenBooking={handleOpenBooking} />

        {/* 4. BEFORE / AFTER SMILE TRANSFORMATION SLIDER & 14. HYGIENE QUIZ */}
        <section className="py-16 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <BeforeAfterSlider />
          </div>
          <div>
            <HygieneQuiz onOpenBooking={handleOpenBooking} />
          </div>
        </section>

        {/* BKLIT CHARTS & MAGIC UI 3D GLOBE */}
        <section className="py-20 px-6 border-t border-white/10 bg-slate-950/80">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <ClinicalRecoveryChart />
            </div>
            <div className="flex flex-col items-center">
              <InteractiveGlobe />
              <p className="text-xs text-slate-400 mt-4 text-center">
                Connected with international multi-specialty dental technology networks.
              </p>
            </div>
          </div>
        </section>

        <ClinicGallery />
        <TestimonialsSection />
        <FAQSection />
      </main>

      {/* Footer & Booking */}
      <BookingFooter onOpenBooking={handleOpenBooking} />

      {/* 7. EMERGENCY HOTLINE PILL */}
      <EmergencyHotlinePill />

      {/* 2. LIQUID GLASS DRAWER */}
      <LiquidGlassDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Floating Action Elements */}
      <WhatsAppFAB />
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
