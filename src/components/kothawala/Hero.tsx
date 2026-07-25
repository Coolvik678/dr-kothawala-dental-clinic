"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, Users, Sparkles, PhoneCall, Stethoscope } from "lucide-react";
import Image from "next/image";

import { AmbientShaderBackground } from "@/components/ui/react-bits/AmbientShaderBackground";
import { LiquidGlassCard } from "@/components/ui/kokonut/LiquidGlassCard";
import { ShinyButton } from "@/components/ui/magic/ShinyButton";
import { ToothModelViewer3D } from "@/components/ui/3d/ToothModelViewer3D";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-[#070A0F] text-slate-100">
      {/* 21. REACT BITS: GPU WebGL Canvas Background Shader */}
      <AmbientShaderBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* 1. KOKONUTUI Liquid Glass Live Availability Badge */}
            <LiquidGlassCard className="mb-6 py-2 px-4" badgeText="NAGPUR DUAL CLINIC LOCATIONS">
              <div className="flex items-center gap-2 text-xs font-semibold text-high-emphasis">
                <Stethoscope className="h-4 w-4 text-[#E5C158] animate-pulse" />
                <span>Teen Nal Chowk (Itwari) & New Mankapur • Open Today</span>
              </div>
            </LiquidGlassCard>

            {/* 4. Cinematic Hero Typography & Animated Gradient Shimmer */}
            <h1 className="font-serif-display font-normal text-5xl sm:text-6xl lg:text-7xl text-high-emphasis leading-[1.08] tracking-tight mb-6">
              Your Great Smile Begins With A{" "}
              <span className="bg-gradient-to-r from-[#E5C158] via-amber-200 to-[#06B6D4] bg-clip-text text-transparent animate-[shine_4s_infinite] italic font-normal">
                Great Dentist
              </span>
            </h1>

            <p className="text-base sm:text-lg text-medium-emphasis leading-relaxed max-w-2xl mb-8 font-normal">
              Led by <strong className="text-high-emphasis">Dr. Abrar Kothawala</strong> & <strong className="text-high-emphasis">Dr. Khadeja Kothawala</strong> along with a dedicated team of <strong className="text-high-emphasis">7 expert dental consultants</strong>. Prioritizing 100% Class B autoclaved sterilization, painless digital care, and 3D implant restoration.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <ShinyButton onClick={onOpenBooking} className="h-14 px-8 text-base">
                <span>Book Appointment Now</span>
                <ArrowRight className="w-5 h-5 ml-2 inline-block text-[#E5C158]" />
              </ShinyButton>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:9326888667"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-high-emphasis font-bold text-base border border-[#E5C158]/30 shadow-md backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4 text-cyan-400" />
                <span>+91 9326888667</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-[#E5C158]/40 text-[#E5C158] flex items-center justify-center flex-shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-high-emphasis">Class B Autoclave</h4>
                  <p className="text-[11px] text-medium-emphasis">100% Sterile</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-high-emphasis">7 Consultants</h4>
                  <p className="text-[11px] text-medium-emphasis">Specialist Panel</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-[#E5C158]/40 text-[#E5C158] flex items-center justify-center flex-shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-high-emphasis">5.0 ★ Rated</h4>
                  <p className="text-[11px] text-medium-emphasis">Nagpur Verified</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. ROTATABLE 3D HERO CANVAS CENTERPIECE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#E5C158]/20 via-cyan-500/20 to-transparent blur-2xl -z-10" />
            <ToothModelViewer3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
