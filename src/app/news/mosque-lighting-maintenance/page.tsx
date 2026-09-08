import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, MapPin, CheckCircle2, Lightbulb, Heart, Sparkles } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export const metadata = {
  title: "إصلاح الإنارة العمومية وتزيين صومعة مسجد أقرقاو | جمعية أقرقاو للتنمية",
  description: "في إطار تتبع جودة خدمات الإنارة العمومية، تم إصلاح عدة مصابيح بأحياء أقرقاو وإضافة لمسة فنية لصومعة المسجد بشراكة مع جماعة تامري.",
};

export default function MosqueLightingMaintenanceArticle() {
  const images = [
    "/images/mosque-lighting/mosque-minaret.jpg",
    "/images/mosque-lighting/artistic-touch.jpg",
    "/images/mosque-lighting/pole-repair.jpg",
    "/images/mosque-lighting/commune-truck.jpg",
    "/images/mosque-lighting/lamp-lit.jpg",
  ];

  const locations = [
    "الحاج محند أخبار (أيت أوفقير)",
    "محمد أوسعيد",
    "الحسن بتاح",
    "الحاج محمد بطاح",
    "أحمد أولحسن أماسين",
    "الحاج محمد المضوي",
  ];

  const upcomingLocations = [
    "أوسيلات",
    "إكزارن",
    "دوتاما",
  ];

  return (
    <article className="py-20 sm:py-28 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all gap-2 text-sm bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-2xs"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة إلى الصفحة الرئيسية</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>البنية التحتية والإنارة العمومية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            إصلاح مصابيح الإنارة العمومية وإضافة لمسة فنية لصومعة مسجد أقرقاو
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm pt-2 border-t border-stone-200/80 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>مبادرة حديثة</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>جمعية أقرقاو للتنمية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span>دوار أقرقاو • جماعة تامري</span>
            </div>
          </div>
        </header>

        {/* Featured Slider */}
        <div className="mb-12 shadow-lg rounded-3xl overflow-hidden border border-stone-200">
          <ImageSlider images={images} />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          
          <div className="p-4 sm:p-6 bg-emerald-50/70 border border-emerald-100 rounded-2xl">
            <p className="font-bold text-slate-900 text-lg sm:text-xl leading-relaxed text-emerald-950">
              «السلام عليكم أيت مازيرت، <br />
              في إطار التتبع المستمر لجمعية أقرقاو للتنمية لجودة خدمات الإنارة العمومية وتلبية تطلعات الساكنة، تم اليوم بفضل الله وتوفيقه إنجاز عملية صيانة شاملة وإصلاح عدة مصابيح للإنارة العمومية بمختلف أحياء القرية.»
            </p>
          </div>

          {/* Locations List */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2 text-primary">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span>المواقع والنقاط المستفيدة من الصيانة:</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm sm:text-base">{loc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mosque Minaret Highlight */}
          <div className="p-6 bg-gradient-to-br from-amber-50/60 to-orange-50/40 rounded-2xl border border-amber-200/70">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  لمسة فنية وجمالية لصومعة مسجد أقرقاو
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  إلى جانب صيانة نقاط الإنارة العمومية في أزقة الدوار، تم تتويج هذا العمل بإضافة لمسة فنية وجمالية مميزة لصومعة مسجد أقرقاو، مما يمنح هذا المعلم الديني والرمزي بهجة وإضاءة زاهية تليق بمكانته في قلوب أهل القرية.
                </p>
              </div>
            </div>
          </div>

          {/* Thanks and Partnership */}
          <div className="border-t border-stone-200 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              <span>شكر وتقدير للشركاء والفاعلين:</span>
            </h2>
            <p className="mb-4">
              تتقدم جمعية أقرقاو للتنمية بجزيل الشكر وعظيم الامتنان لكل من ساهم في نجاح هذا الورش الميداني، ونخص بالذكر:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-stone-50 p-3 rounded-xl">
                <span className="font-bold text-primary">1.</span>
                <span>
                  <strong>رئيس جماعة تامري، السيد مولي حسن الإدريسي:</strong> الذي دعم هذه المبادرة بمساهمة كريمة تمثلت في <strong>ثلاث مصابيح جديدة</strong> وشاحنة الصيانة التابعة للجماعة.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-stone-50 p-3 rounded-xl">
                <span className="font-bold text-primary">2.</span>
                <span>
                  <strong>الكهربائي السيد حسن عتيق:</strong> تقديراً لمجهوداته وتفانيه المهني الكبير في إنجاز أعمال الصيانة بكل احترافية وسلامة.
                </span>
              </li>
            </ul>
          </div>

          {/* Upcoming Schedule */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-amber-300 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>المرحلة القادمة من الصيانة (قريباً بحول الله):</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              نخبر الساكنة الكريمة أن الجمعية قد ضربت موعداً مقبلاً لمواصلة صيانة وتأهيل باقي مصابيح الإنارة العمومية لتشمل المناطق التالية:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {upcomingLocations.map((item, i) => (
                <span key={i} className="px-4 py-1.5 bg-slate-800 text-emerald-300 font-bold rounded-xl text-sm border border-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
              معرض صور التدخل الميداني
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:scale-102 transition-transform">
                  <Image 
                    src={img} 
                    alt={`صورة من أشغال الإنارة ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </article>
  );
}
