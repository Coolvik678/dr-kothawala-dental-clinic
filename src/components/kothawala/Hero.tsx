"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Award, Users, Sparkles, Play, Stethoscope } from "lucide-react";
import Image from "next/image";

import { AmbientShaderBackground } from "@/components/ui/react-bits/AmbientShaderBackground";
import { LiquidGlassCard } from "@/components/ui/kokonut/LiquidGlassCard";
import { ShinyButton } from "@/components/ui/magic/ShinyButton";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-slate-950 text-slate-100">
      {/* 1. REACT BITS: GPU WebGL Canvas Background Shader */}
      <AmbientShaderBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* KOKONUTUI Liquid Glass Live Availability Badge */}
            <LiquidGlassCard className="mb-6 py-2 px-4" badgeText="15+ YEARS MULTI-SPECIALTY EXCELLENCE">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Stethoscope className="h-4 w-4 text-teal-400 animate-pulse" />
                <span>Dr. Abrar & Dr. Khadeja Kothawala + 7 Consultant Team</span>
              </div>
            </LiquidGlassCard>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight mb-6">
              Where Expertise Meets a <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">Confident Smile</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Experience premium multi-specialty family dentistry led by <strong>Dr. Abrar Kothawala</strong> & <strong>Dr. Khadeja Kothawala</strong> along with a dedicated team of <strong>7 expert dental consultants</strong>. Prioritizing world-class sterilization, patient comfort, and advanced digital care.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <ShinyButton onClick={onOpenBooking} className="h-14 px-8 text-base">
                <span>Book an Appointment</span>
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </ShinyButton>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-teal-500/30 shadow-md backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>Explore 7 Specialties</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-950 border border-teal-500/30 text-teal-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">100% Sterilized</h4>
                  <p className="text-[11px] text-slate-400">Hospital Grade</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">7 Consultants</h4>
                  <p className="text-[11px] text-slate-400">Specialist Panel</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-amber-950 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">5.0 ★ Rated</h4>
                  <p className="text-[11px] text-slate-400">Google Verified</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-emerald-500/20 to-transparent blur-2xl -z-10" />

            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-teal-500/30 shadow-2xl relative space-y-6 backdrop-blur-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 shadow-lg group">
                <Image
                  src="/kothawala/dr-abrar.jpg"
                  alt="Dr. Abrar Kothawala"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-teal-500/40 text-xs font-bold text-white flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" /> BNI Crorepati Club Member
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-extrabold text-lg leading-tight">
                    Dr. Abrar Kothawala
                  </h3>
                  <p className="text-xs text-teal-300 font-medium">
                    Dental Surgeon & Implantologist • 15+ Yrs Exp.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-teal-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block">Operational Theme</span>
                    <h4 className="font-heading font-bold text-sm text-white">"Dentistry is TeamWork"</h4>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  7 Specialists
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
