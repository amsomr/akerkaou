import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, MapPin, Truck, Sparkles, Heart } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export const metadata = {
  title: "تفريغ أحجار التبليط (البافي) لتهيئة طريق أوسيلات | جمعية أقرقاو للتنمية",
  description: "استقبال وتفريغ ثلاث شاحنات من أحجار التبليط (البافي) أمام طريق أوسيلات بدوار أقرقاو في إطار مشاريع تأهيل البنية التحتية.",
};

export default function RoadPavingOussilatArticle() {
  const images = [
    "/images/road-oussilat/img1.jpg",
    "/images/road-oussilat/img2.jpg",
    "/images/road-oussilat/img3.jpg",
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
            <Truck className="w-3.5 h-3.5 text-amber-600" />
            <span>أوراش البنية التحتية • فك العزلة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            انطلاق الاستعدادات لتهيئة طريق أوسيلات: تفريغ 3 شاحنات من أحجار التبليط (البافي)
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm pt-2 border-t border-stone-200/80 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>مستجدات الأوراش الميدانية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>جمعية أقرقاو للتنمية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span>طريق أوسيلات • دوار أقرقاو</span>
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
              تم اليوم بحول الله وقوته تفريغ ثلاث شاحنات من أحجار التبليط (البافي) أمام طريق أوسيلات، نسأل الله أن يوفقنا جميعاً لما فيه الخير والصلاح لبلدتنا وساكنتها الكريمة.»
            </p>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 text-primary">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span>خطوة هامة نحو فك العزلة وتحسين المسالك</span>
            </h2>
            <p>
              يأتي هذا الإنزال الميداني الهام في إطار البرنامج التنموي المتواصل لجمعية أقرقاو للتنمية، الهادف إلى تعبيد وتبليط المسالك الوعرة داخل الدوار وتسهيل حركة تنقل الساكنة والمركبات في ظروف آمنة وكريمة.
            </p>
            <p>
              وقد تمت عملية التفريغ بسلاسة بفضل التنسيق الميداني وحضور آليات الشحن والجرف، في انتظار استكمال وصول باقي المواد ومستلزمات الورش للانطلاق الفعلي في أشغال التبليط والتركيب بحول الله.
            </p>
          </div>

          {/* Gratitude & Dua */}
          <div className="p-6 bg-gradient-to-br from-amber-50/70 to-orange-50/50 rounded-2xl border border-amber-200/70">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span>شكر ودعاء موصول لرئيس جماعة تامري:</span>
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              وفي انتظار استكمال باقي المواد، نسأل الله العلي القدير أن يوفق رئيس جماعة تامري، السيد <strong>مولي حسن الإدريسي</strong>، لما فيه من خير ونماء لدوار أقرقاو، جزاه الله خير الجزاء وبارك الله في صحته وعائلته الكريمة، وتقبل الله منا ومنه صالح الأعمال يارب العالمين.
            </p>
          </div>

          {/* Gallery */}
          <div className="pt-6 border-t border-stone-200">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
              معرض صور تفريغ شاحنات البافي بطريق أوسيلات
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:scale-102 transition-transform">
                  <Image 
                    src={img} 
                    alt={`صور تفريغ البافي بطريق أوسيلات ${i + 1}`}
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
