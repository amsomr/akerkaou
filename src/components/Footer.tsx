import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-300 pt-20 pb-10 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-primary">جمعية أقرقاو للتنمية</span>
            </h2>
            <p className="leading-relaxed text-zinc-400 max-w-sm">
              جمعية أقرقاو للتنمية هي منظمة غير ربحية تهدف إلى تحسين الظروف المعيشية لسكان دوار أقرقاو من خلال مشاريع مستدامة وتنموية شاملة.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://maps.app.goo.gl/tuNLUb4xUCfFc9CC7" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:text-white transition-colors">
                    <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <span>المغرب، أكادير، تامري، دوار أقرقاو</span>
                </a>
              </li>
              <li>
                <a href="tel:+212600000000" className="flex items-center gap-4 group hover:text-white transition-colors">
                    <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
                    <span dir="ltr" className="font-mono text-lg">+212 600 000 000</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@akerkaou.org" className="flex items-center gap-4 group hover:text-white transition-colors">
                    <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <span>contact@akerkaou.org</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Bank Details - High Visibility */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">ساهم في التغيير</h3>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-2xl border border-zinc-700/50 shadow-xl relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cta opacity-50"></div>
              
              <p className="text-xs text-zinc-400 mb-3 uppercase tracking-wider font-semibold">رقم الحساب البنكي (RIB)</p>
              <div className="font-mono text-xl text-white tracking-widest break-all mb-4 selection:bg-primary selection:text-white">
                123 456 7890123456789012 34
              </div>
              
              <div className="flex items-center justify-between mt-4 text-sm border-t border-zinc-700/50 pt-4">
                  <span className="text-zinc-400">البنك الشعبي</span>
                  <span className="text-primary font-medium">BP Bank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} جمعية أقرقاو للتنمية. جميع الحقوق محفوظة.
          </p>
          
          <div className="flex items-center gap-4">
            <Link 
              href="https://web.facebook.com/p/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A3%D9%82%D8%B1%D9%82%D8%A7%D9%88-%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-100081871149550" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zinc-800 p-2 rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300"
              aria-label="صفحتنا على فيسبوك"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
