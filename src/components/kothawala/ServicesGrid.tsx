"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Stethoscope, Activity, Sparkle, Award, Smile, ShieldCheck, ArrowRight, X } from "lucide-react";

interface ServicesGridProps {
  onOpenBooking: () => void;
}

interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

export default function ServicesGrid({ onOpenBooking }: ServicesGridProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Root Canal Treatment (RCT)",
      subtitle: "Endodontic Care",
      description: "Specialist, pain-free precision root canal therapy designed to preserve natural tooth structure with advanced single-sitting technology.",
      icon: Stethoscope
    },
    {
      id: 2,
      title: "Advanced Dental Implants",
      subtitle: "Permanent Restoration",
      description: "Lifelong fixed artificial teeth restoration using biocompatible titanium implants for maximum chew force and aesthetics.",
      icon: Activity
    },
    {
      id: 3,
      title: "Cosmetic & Aesthetic Dentistry",
      subtitle: "Smile Design",
      description: "Digital smile design, teeth reshaping, laser whitening, and professional teeth polishing for a flawless smile.",
      icon: Sparkle
    },
    {
      id: 4,
      title: "Crowns & Bridges Fixing",
      subtitle: "Ceramic Restorations",
      description: "Premium high-translucency Zirconia and ceramic restorations engineered to fix weakened or missing tooth structures.",
      icon: Award
    },
    {
      id: 5,
      title: "Orthodontics",
      subtitle: "Teeth Alignment",
      description: "Modern metal braces, ceramic aesthetic braces, and invisible clear aligner solutions for perfect bite alignment.",
      icon: Smile
    },
    {
      id: 6,
      title: "Comprehensive Oral Health",
      subtitle: "Family Care",
      description: "Complete treatment for bleeding gums, severe toothaches, restorative fillings, and specialized gentle pediatric care.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="services" className="py-28 lg:py-36 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkle className="w-3.5 h-3.5" /> Specialized Treatments
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            Comprehensive Dental <span className="text-[#0D9488]">Services</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Delivered with cutting-edge technology and 100% sterilization by expert consultants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedService(service)}
                className="group p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#0D9488]/50 hover:shadow-xl hover:shadow-[#0D9488]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-teal-50 text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white flex items-center justify-center p-3 shadow-sm border border-teal-100 transition-colors duration-300 mb-6">
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1.5 block">
                    {service.subtitle}
                  </span>

                  <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3 group-hover:text-[#0D9488] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#0D9488]">
                  <span>Learn Details & Book</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#0D9488] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                {selectedService.subtitle}
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">
                {selectedService.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedService.description} At Dr. Kothawala's Dental Cure & Care Center, treatments are meticulously planned by 7 expert consultants to ensure pain-free precision and maximum comfort.
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0D9488]">World-class Care</span>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  Book Consultation →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
