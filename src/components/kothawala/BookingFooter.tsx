"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, MapPin, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";

interface BookingFooterProps {
  onOpenBooking: () => void;
}

export default function BookingFooter({ onOpenBooking }: BookingFooterProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialty: "Root Canal Treatment (RCT)",
    preferredDate: "",
    notes: ""
  });

  const specialties = [
    "Root Canal Treatment (RCT)",
    "Advanced Dental Implants",
    "Cosmetic & Smile Design",
    "Crowns & Bridges Fixing",
    "Orthodontics & Braces",
    "Comprehensive Oral Health",
    "Pediatric Dentistry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Dr. Kothawala's Dental Cure & Care Center!\nI would like to book an appointment.\n\n👤 *Patient:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n🩺 *Specialty:* ${formData.specialty}\n📅 *Preferred Date:* ${formData.preferredDate || "Earliest Available"}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encoded}`, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-slate-800">
          
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/20">
                Contact & Timings
              </span>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Dr. Kothawala's Dental Cure & Care Center
              </h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Headed by Dr. Abrar Kothawala & Dr. Khadeja Kothawala with 7 expert dental consultants.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 space-y-4 shadow-xl">
              <h4 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0D9488]" /> Operating Hours
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                  <span className="text-slate-400 font-medium">Monday – Saturday</span>
                  <span className="font-extrabold text-white bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700">
                    10:00 AM – 9:30 PM
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-400 font-medium">Sunday</span>
                  <span className="font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                    10:00 AM – 2:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#10B981]" /> Clinic Locations & Branches
              </h4>

              <div className="p-5 rounded-3xl bg-slate-800/50 border border-slate-800 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-heading font-bold text-white text-base">Main Multi-Specialty Center</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
                      Premier Multi-Specialty Dental Center • State-of-the-art Operatory Suites
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                    Main Branch
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-bold text-xs flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-900 border border-slate-100 relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Instant Reservation
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2">
                Quick Appointment Booking
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Fill in your details for direct confirmation with clinic reception.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-slate-900">Request Sent!</h4>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto">
                    We have launched WhatsApp to confirm your preferred slot directly with our medical team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Specialty *
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-800 text-sm bg-white transition-all"
                    >
                      {specialties.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0D9488] text-slate-800 text-sm bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#10B981] text-white font-extrabold text-base shadow-lg shadow-[#0D9488]/20 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" /> Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Kothawala's Dental Cure & Care Center. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
