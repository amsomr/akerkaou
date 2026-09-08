"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart, Sparkles, MessageCircle } from "lucide-react";
import DonationModal from "./DonationModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/#projects", label: "مشاريعنا" },
    { href: "/#stats", label: "أرقامنا" },
    { href: "/#about", label: "من نحن" },
    { href: "/#board", label: "أعضاء المكتب" },
    { href: "/#contact", label: "تواصل معنا" },
  ];

  return (
    <>
      <header className="sticky top-3 z-40 px-3 sm:px-6 w-full max-w-7xl mx-auto">
        <div className="glass-header rounded-2xl border border-slate-200/80 shadow-sm shadow-emerald-950/5 px-4 sm:px-6 h-18 flex items-center justify-between transition-all">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1" 
            aria-label="جمعية أقرقاو للتنمية - الصفحة الرئيسية"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-primary transition-colors">
                جمعية أقرقاو للتنمية
              </span>
              <span className="text-[11px] text-emerald-700 font-medium hidden sm:block">
                يداً بيد من أجل أقرقاو
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" role="navigation" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-primary hover:bg-emerald-50/70 px-3 py-2 rounded-xl transition-all font-medium text-sm lg:text-base focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/212666054625"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#25D366] hover:bg-emerald-50/50 rounded-xl transition-colors cursor-pointer"
              aria-label="مراسلتنا عبر واتساب"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>واتساب</span>
            </a>

            {/* Donation Button */}
            <button 
              onClick={() => setIsDonationOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-accent to-amber-500 hover:from-amber-600 hover:to-accent text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-amber-600/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus-visible:ring-4 focus-visible:ring-amber-500/30"
              aria-label="فتح نافذة التبرع"
            >
              <span>تـبـرع الآن</span>
              <Heart className="w-4 h-4 fill-white animate-pulse" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-700 hover:text-primary p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden mt-2 glass-header rounded-2xl border border-slate-200 shadow-xl p-5 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-800 hover:text-primary hover:bg-emerald-50 px-4 py-3 rounded-xl transition-colors font-medium text-base"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsDonationOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  <span>ساهم وتبرع للجمعية</span>
                  <Heart className="w-4 h-4 fill-white" />
                </button>
                <a
                  href="https://wa.me/212666054625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366]/10 text-emerald-800 py-3 rounded-xl font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>تواصل عبر واتساب مباشرة</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Donation Modal instance controlled by navbar */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </>
  );
}
