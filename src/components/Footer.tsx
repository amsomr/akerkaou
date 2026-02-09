import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">جمعية أقرقاو للتنمية</span>
            </h3>
            <p className="leading-relaxed text-sm">
              جمعية أقرقاو للتنمية هي منظمة غير ربحية تهدف إلى تحسين الظروف المعيشية لسكان دوار أقرقاو من خلال مشاريع مستدامة.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>المغرب، أكادير، تامري، دوار أقرقاو</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span dir="ltr">+212 600 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@aguerguaou.org</span>
              </li>
            </ul>
          </div>

          {/* Bank Details */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">ساهم معنا</h3>
            <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
              <p className="text-xs text-zinc-400 mb-2">رقم الحساب البنكي (RIB)</p>
              <div className="font-mono text-lg text-white tracking-wider break-all">
                123 456 7890123456789012 34
              </div>
              <p className="text-xs text-secondary mt-2">البنك الشعبي</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} جمعية أقرقاو للتنمية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="https://web.facebook.com/p/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A3%D9%82%D8%B1%D9%82%D8%A7%D9%88-%D9%84%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-100081871149550" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
