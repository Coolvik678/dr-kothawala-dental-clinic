"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  badgeText?: string;
  className?: string;
}

export function LiquidGlassCard({ children, badgeText, className }: LiquidGlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[#E5C158]/35 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-cyan-950/40 p-6 shadow-2xl backdrop-blur-2xl transition-all hover:border-[#E5C158]/60 hover:shadow-[0_0_35px_rgba(229,193,88,0.15)]",
        className
      )}
    >
      {/* Frosted Gold Light Reflections */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#E5C158]/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />

      {badgeText && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#E5C158]/40 bg-amber-950/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#E5C158] shadow-md backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#E5C158] animate-ping" />
          {badgeText}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
