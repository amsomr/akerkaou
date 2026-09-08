"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Heart, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import DonationModal from "./DonationModal";

export default function Hero() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden -mt-20 pt-24 pb-16">
        
        {/* Background with Ambient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="دوار أقرقاو - جماعة تامري"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Subtle multi-layer gradient overlay for high text contrast without darkening excessively */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50 z-10" />
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center max-w-4xl pt-12 pb-6">
          
          {/* Badge / Announcement */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-md mb-8 shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-emerald-100 text-xs sm:text-sm font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>أقرقاو • جماعة تامري • عمالة أكادير إداوتنان</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.15] text-white tracking-tight mb-6">
            يداً بيد من أجل <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-amber-400">
              نهضة وتنمية أقرقاو
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
            نعمل بروح التطوع والتكافل لفك العزلة، وتأهيل البنية التحتية، ودعم الأسر، ورعاية أجيال المستقبل في قريتنا الحبيبة.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => setIsDonationOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-accent to-amber-500 hover:from-amber-600 hover:to-accent text-white px-8 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-amber-600/25 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 cursor-pointer focus-visible:ring-4 focus-visible:ring-amber-400/40"
              aria-label="ساهم وتبرع الآن"
            >
              <span>ساهم في التغيير</span>
              <Heart className="w-5 h-5 fill-white animate-pulse" />
            </button>
            <Link 
              href="#projects" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-1 active:translate-y-0"
            >
              <span>اكتشف مشاريعنا</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* Real Impact Badges (replaces fake avatar circles) */}
          <div className="pt-12 sm:pt-16 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="glass-dark rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">+50</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">مشروع ومبادرة منجزة</div>
            </div>
            <div className="glass-dark rounded-2xl p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">+200</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">أسرة مستفيدة مباشرة</div>
            </div>
            <div className="glass-dark rounded-2xl p-3 sm:p-4 text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">تطوع وشفافية كاملة</div>
            </div>
          </div>

        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </>
  );
}
