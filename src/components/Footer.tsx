"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, Copy, Check, Heart, MessageCircle, Sparkles } from "lucide-react";
import DonationModal from "./DonationModal";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const ribNumber = "2121188927040009";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ribNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* About & Identity */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-900/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  جمعية أقرقاو للتنمية
                </h2>
              </div>

              <p className="leading-relaxed text-slate-400 text-sm sm:text-base max-w-md">
                منظمة غير حكومية تنموية تسعى للنهوض بقرية أقرقاو وفك العزلة عنها وتأهيل البنية التحتية، ودعم التكافل الإنساني بشراكة وثيقة مع الساكنة والمحسنين.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsDonationOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-amber-500 hover:from-amber-600 hover:to-accent text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>ساهم في مشاريعنا</span>
                  <Heart className="w-4 h-4 fill-white" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-white text-base font-bold tracking-wide border-b border-slate-800 pb-2">
                معلومات التواصل
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a 
                    href="https://maps.app.goo.gl/tuNLUb4xUCfFc9CC7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 group hover:text-white transition-colors"
                  >
                    <div className="bg-slate-900 p-2 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="leading-snug">المغرب، عمالة أكادير إداوتنان، قيادة وجماعة تامري، دوار أقرقاو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+212666054625" 
                    className="flex items-center gap-3 group hover:text-white transition-colors"
                  >
                    <div className="bg-slate-900 p-2 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span dir="ltr" className="font-mono text-base tracking-wider">0666054625</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contact@akerkaou.org" 
                    className="flex items-center gap-3 group hover:text-white transition-colors"
                  >
                    <div className="bg-slate-900 p-2 rounded-xl text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-sm">contact@akerkaou.org</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Bank Details with Copy Feature */}
            <div className="md:col-span-4 space-y-6">
              <h3 className="text-white text-base font-bold tracking-wide border-b border-slate-800 pb-2">
                الحساب البنكي الرسمي
              </h3>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-accent opacity-70" />
                
                <div className="mb-3">
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">اسم الحساب</p>
                  <p className="text-xs sm:text-sm text-white font-medium">Association Akarkaou Pour Le Développement</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">رقم الحساب (RIB)</p>
                    <span className="text-[11px] text-emerald-400 font-bold">البنك الشعبي</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-slate-950/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="font-mono text-sm sm:text-base text-amber-300 tracking-wider select-all" dir="ltr">
                      {ribNumber}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                      aria-label="نسخ رقم الحساب البنكي"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>تم!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>نسخ</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/212666054625?text=${encodeURIComponent("السلام عليكم، أود التواصل بشأن التبرع لجمعية أقرقاو.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white py-2 rounded-xl text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>تأكيد التحويل عبر واتساب</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} جمعية أقرقاو للتنمية. جميع الحقوق محفوظة.
            </p>
            
            <div className="flex items-center gap-4">
              <Link 
                href="https://web.facebook.com/p/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A3%D9%82%D8%B1%D9%82%D8%A7%D9%88-%D9%84%D9%84%D8%AA%D9%86%D9%8A%D8%A9-100081871149550" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all"
                aria-label="صفحة فيسبوك للجمعية"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <a 
                href="https://wa.me/212666054625"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="محادثة واتساب"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/212666054625"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          aria-label="تواصل مباشر عبر واتساب"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-300 text-xs font-bold whitespace-nowrap">
            تواصل معنا عبر واتساب
          </span>
        </a>
      </footer>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </>
  );
}
