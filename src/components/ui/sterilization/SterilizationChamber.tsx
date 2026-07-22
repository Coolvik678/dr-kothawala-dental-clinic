"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export function SterilizationChamber() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-emerald-500/30 bg-slate-900/90 p-5 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            CLASS B UV-C STERILIZER ACTIVE
          </span>
        </div>
        <Zap className="h-4 w-4 text-emerald-400" />
      </div>

      <div className="mt-4 rounded-xl border border-emerald-500/20 bg-slate-950 p-4 text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          <ShieldCheck className="h-8 w-8" />
        </motion.div>

        <h4 className="mt-3 text-sm font-bold text-white">100% Hospital Grade Protocol</h4>
        <p className="mt-1 text-xs text-slate-300">
          Autoclaved pouches opened exclusively in front of the patient.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-semibold text-emerald-300">
          <div className="flex items-center justify-center gap-1 rounded-lg bg-emerald-950/40 p-1.5 border border-emerald-500/20">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> 134°C Autoclave
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-emerald-950/40 p-1.5 border border-emerald-500/20">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> HEPA Air Scrub
          </div>
        </div>
      </div>
    </div>
  );
}
