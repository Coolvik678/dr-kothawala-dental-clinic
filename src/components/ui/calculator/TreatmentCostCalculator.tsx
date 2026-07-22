"use client";

import React, { useState } from "react";
import { Calculator, Check, Sparkles } from "lucide-react";
import { ShinyButton } from "@/components/ui/magic/ShinyButton";

const treatments = [
  { id: "implant", name: "Single Dental Implant", basePrice: 25000 },
  { id: "aligners", name: "Invisible Braces / Aligners", basePrice: 45000 },
  { id: "rct", name: "Single-Visit Laser RCT", basePrice: 6500 },
  { id: "whitening", name: "Laser Teeth Whitening", basePrice: 8500 },
];

export function TreatmentCostCalculator({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [emiMonths, setEmiMonths] = useState(6);

  const estimatedEMI = Math.round(selectedTreatment.basePrice / emiMonths);

  return (
    <div className="w-full rounded-2xl border border-teal-500/30 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-950 border border-teal-500/40 text-teal-400">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
            INTERACTIVE PATIENT UTILITY
          </span>
          <h3 className="text-lg font-bold text-white">Procedure Cost & 0% EMI Calculator</h3>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-300">Select Treatment</label>
          <div className="mt-3 space-y-2">
            {treatments.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTreatment(t)}
                className={`flex w-full items-center justify-between rounded-xl border p-3 text-xs font-semibold transition-all cursor-pointer ${
                  selectedTreatment.id === t.id
                    ? "border-teal-400 bg-teal-950/60 text-white shadow-lg shadow-teal-500/10"
                    : "border-white/10 bg-slate-950/60 text-slate-400 hover:border-white/20"
                }`}
              >
                <span>{t.name}</span>
                <span className="font-bold text-teal-300">₹{t.basePrice.toLocaleString("en-IN")}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-slate-950/80 p-5">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Tenure (Months):</span>
              <span className="text-sm font-bold text-teal-400">{emiMonths} Months</span>
            </div>

            <input
              type="range"
              min="3"
              max="12"
              step="3"
              value={emiMonths}
              onChange={(e) => setEmiMonths(Number(e.target.value))}
              className="mt-3 w-full accent-teal-500 cursor-pointer"
            />

            <div className="mt-6 border-t border-white/10 pt-4">
              <span className="text-xs text-slate-400">Estimated Zero-Interest Monthly EMI:</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">₹{estimatedEMI.toLocaleString("en-IN")}</span>
                <span className="text-xs text-emerald-400 font-semibold">/ month</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                0% Interest • 0 Down Payment options available with Bajaj & HDFC Health Cards.
              </p>
            </div>
          </div>

          <ShinyButton onClick={onOpenBooking} className="mt-4 w-full h-11 text-xs">
            <Sparkles className="h-4 w-4" /> Book Consultation with EMI Plan
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
