"use client";

import React from "react";
import { PhoneCall, MessageCircle, Activity } from "lucide-react";

export function EmergencyHotlinePill() {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 rounded-full border border-white/20 bg-slate-900/80 p-2 pr-4 shadow-2xl backdrop-blur-xl">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white font-bold animate-pulse">
        <Activity className="h-5 w-5" />
      </div>
      <div>
        <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
          24/7 DENTAL URGENT CARE
        </span>
        <a href="tel:+919876543210" className="text-xs font-bold text-white hover:text-teal-300">
          +91 98765 43210
        </a>
      </div>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
      </a>
    </div>
  );
}
