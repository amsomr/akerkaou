"use client";

import { useState, useEffect } from "react";
import { X, Copy, Check, Heart, ShieldCheck, Phone, MessageSquare } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false);
  const ribNumber = "2121188927040009";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ribNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="donation-modal-title">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-emerald-900/10 overflow-hidden z-10 transition-all">
        {/* Decorative Top Accent */}
        <div className="h-2.5 bg-gradient-to-r from-primary via-emerald-500 to-accent w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-emerald-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner border border-emerald-100">
              <Heart className="w-7 h-7 fill-current text-primary animate-pulse" />
            </div>
            <h2 id="donation-modal-title" className="text-2xl font-bold text-slate-900 mb-1">
              ساهم في تنمية أقرقاو
            </h2>
            <p className="text-sm text-slate-600">
              مساهمتكم تصنع فرقاً حقيقياً في حياة أسر وقرى منطقتنا
            </p>
          </div>

          {/* Bank Information Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 sm:p-6 mb-6 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs text-emerald-400 font-semibold block">المؤسسة البنكية</span>
                <span className="text-base font-bold">البنك الشعبي (Banque Populaire)</span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs text-slate-400 font-semibold block mb-1">اسم صاحب الحساب</span>
              <p className="text-sm font-medium text-slate-100 tracking-wide font-mono">
                Association Akarkaou Pour Le Développement
              </p>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-semibold block mb-1">رقم الحساب البنكي (RIB)</span>
              <div className="flex items-center justify-between gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                <span className="font-mono text-lg sm:text-xl font-bold tracking-wider text-amber-300 select-all" dir="ltr">
                  {ribNumber}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="نسخ رقم الحساب"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>نسخ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Verification / WhatsApp CTA */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/212666054625?text=${encodeURIComponent("السلام عليكم، أود التأكيد بشأن مساهمة لجمعية أقرقاو للتنمية.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/10 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>إرسال إشعار التحويل عبر واتساب</span>
            </a>

            <a
              href="tel:+212666054625"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>الاتصال بأمين المال مباشرة: 0666054625</span>
            </a>
          </div>

          {/* Trust Note */}
          <p className="text-center text-xs text-slate-400 mt-5">
            جمعية معترف بها قانونياً وتخضع لحكامة مالية شفافة وتقرير سنوي منشور.
          </p>
        </div>
      </div>
    </div>
  );
}
