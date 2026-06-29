"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Users, Sparkles, Play } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white">
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#0D9488]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-teal-100 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Multi-Specialty Care Since 2010
              </span>
              <span className="text-xs text-[#0D9488] font-bold">• 15+ Yrs Excellence</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight mb-6">
              Where Expertise Meets a <span className="bg-gradient-to-r from-[#0D9488] to-[#10B981] bg-clip-text text-transparent">Confident Smile</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Experience premium multi-specialty family dentistry led by <strong>Dr. Abrar Kothawala</strong> & <strong>Dr. Khadeja Kothawala</strong> along with a dedicated team of <strong>7 expert dental consultants</strong>. Prioritizing world-class sterilization, patient comfort, and advanced digital care.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-base shadow-lg shadow-[#0D9488]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 tracking-wide group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200/80 shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/70 w-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center flex-shrink-0 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">100% Sterilized</h4>
                  <p className="text-[11px] text-slate-500">World-class Hygiene</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center flex-shrink-0 font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">7 Consultants</h4>
                  <p className="text-[11px] text-slate-500">Specialist Team</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">5.0 ★ Rated</h4>
                  <p className="text-[11px] text-slate-500">Patient Satisfaction</p>
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
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0D9488]/20 via-[#10B981]/20 to-transparent blur-2xl -z-10" />

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-2xl relative space-y-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-lg group">
                <Image
                  src="/kothawala/dr-abrar.jpg"
                  alt="Dr. Abrar Kothawala"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-bold text-slate-900 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" /> BNI Crorepati Club Member
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-extrabold text-lg leading-tight">
                    Dr. Abrar Kothawala
                  </h3>
                  <p className="text-xs text-teal-200 font-medium">
                    Dental Surgeon & Implantologist • 15+ Yrs Exp.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D9488] text-white flex items-center justify-center shadow-md">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider block">Operational Theme</span>
                    <h4 className="font-heading font-bold text-sm text-slate-900">"Dentistry is TeamWork"</h4>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[#10B981] text-[10px] font-bold">
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
