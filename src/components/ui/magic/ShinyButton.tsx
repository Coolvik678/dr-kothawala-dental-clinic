"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function ShinyButton({ children, className, onClick, ...props }: ShinyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-[#E5C158]/50 bg-gradient-to-r from-amber-950/90 via-slate-900/90 to-cyan-950/90 px-6 py-3 font-bold text-amber-200 shadow-xl backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-[#E5C158] hover:shadow-[0_0_30px_rgba(229,193,88,0.3)] active:scale-[0.98] cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5C158]/20 to-transparent animate-[shine_3s_infinite]" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
