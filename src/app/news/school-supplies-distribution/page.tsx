import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, MapPin, GraduationCap, Bus, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "توزيع المستلزمات المدرسية ومناقشة ملف النقل المدرسي | جمعية أقرقاو للتنمية",
  description: "توزيع المستلزمات والمحافظ المدرسية لفائدة تلاميذ دوار أقرقاو بمسجد الدوار، وتدارس سبل توفير النقل المدرسي لأسلاك الإعدادي والتأهيلي بتنسيق مع جماعة التامري.",
};

export default function SchoolSuppliesDistributionArticle() {
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
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>العمل الاجتماعي • دعم التمدرس والتعليم</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
            توزيع المستلزمات المدرسية على أبناء دوار أقرقاو ومناقشة ملف النقل المدرسي
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-500 text-xs sm:text-sm pt-2 border-t border-stone-200/80 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>أحدث الأنشطة والمبادرات</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              <span>جمعية أقرقاو للتنمية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span>مسجد دوار أقرقاو</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 shadow-xl rounded-3xl overflow-hidden border border-stone-200 bg-stone-100">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
            <Image 
              src="/images/school-supplies/distribution.jpg"
              alt="توزيع المستلزمات والمحافظ المدرسية بمسجد أقرقاو"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>
          <div className="bg-white px-5 py-3 border-t border-stone-100 text-center text-xs sm:text-sm text-slate-500 font-medium">
            صورة جماعية للمستفيدين من التلاميذ وأولياء أمورهم وأعضاء الجمعية داخل مسجد أقرقاو
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          
          {/* Main Statement Quote */}
          <div className="p-5 sm:p-7 bg-emerald-50/70 border border-emerald-100 rounded-2xl">
            <p className="font-bold text-slate-900 text-lg sm:text-xl leading-relaxed text-emerald-950">
              «في إطار أنشطتها الاجتماعية والتربوية، نظمت جمعية أقرقاو للتنمية عملية توزيع المستلزمات المدرسية لفائدة أبناء دوار أقرقاو الذين يتابعون دراستهم بمختلف الأسلاك الدراسية، وذلك برحاب مسجد أقرقاو وبحضور عدد من أولياء أمورهم.»
            </p>
          </div>

          {/* School Supplies Initiative */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 text-primary">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span>تشجيع التمدرس والتخفيف عن كاهل الأسر</span>
            </h2>
            <p>
              تأتي هذه المبادرة الإنسانية الهادفة ترسيخاً لروح التضامن والتكافل الاجتماعي التي تحرص جمعية أقرقاو على نشرها، وسعياً منها لتوفير الظروف الملائمة لتلميذات وتلاميذ المنطقة من أجل انطلاقة دراسية موفقة ومحفزة، ومحاربة الهدر المدرسي وتشجيع الأجيال الصاعدة على مواصلة تحصيلهم العلمي والمعرفي.
            </p>
          </div>

          {/* School Transport Meeting */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/60 rounded-2xl border border-teal-200/80 space-y-4">
            <div className="flex items-center gap-3 text-teal-900">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Bus className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                تدارس ملف النقل المدرسي لتلاميذ الإعدادي والتأهيلي
              </h2>
            </div>
            
            <p className="text-slate-700">
              شكل هذا اللقاء التواصلي محطة بالغة الأهمية وفرصة سانحة لمناقشة إمكانية توفير النقل المدرسي لفائدة التلاميذ الذين يتابعون دراستهم بالسلكين الثانوي الإعدادي والثانوي التأهيلي، وذلك بحضور سائقي النقل المزدوج بالمدرسة الجماعاتية تيكزيرين.
            </p>

            <div className="bg-white/90 p-4 rounded-xl border border-teal-100 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>أبرز محاور اللقاء التشاوري:</span>
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-slate-600 pr-5 list-disc">
                <li>الوقوف الميداني عند أهم الإكراهات والصعوبات التي تواجه تنقل التلاميذ يومياً.</li>
                <li>تقديم مقترحات وبدائل عملية قصد تجويد النقل وضمان سلامة وراحة التلاميذ ذهاباً وإياباً.</li>
                <li>تعزيز التنسيق الوثيق بين الجمعية، السائقين، أولياء الأمور، والمجلس الجماعي.</li>
              </ul>
            </div>
          </div>

          {/* Acknowledgments and Special Thanks */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 rounded-2xl border border-amber-200/80 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
              <span>شكر وتقدير وامتنان لكل الفاعلين والداعمين</span>
            </h2>

            <p className="text-slate-700">
              بهذه المناسبة الطيبة، تتقدم جمعية أقرقاو للتنمية بجزيل الشكر وعظيم الامتنان لكل من ساهم في توفير هذه المستلزمات المدرسية ودعم أبناء المنطقة، ولكافة أعضاء الجمعية، ورئيسها ونوابه الأفاضل، ولكل من حضر وشارك في إنجاح هذا النشاط المتميز.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Special Mention: Mr. Abderrahim Idoukhraz */}
              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>تنويه وإشادة خاصة:</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  ننوه بالمجهود المتواصل الذي يبذله السيد <strong>عبدالرحيم إدوخراز</strong> وتفانيه الدائم من أجل كل ما فيه مصلحة ونماء لدوار أقرقاو ولأبناء المنطقة الكرام.
                </p>
              </div>

              {/* Special Thanks: Commune President */}
              <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>شكر لرئيس جماعة التامري:</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  نتقدم بجزيل الشكر لـ <strong>رئيس جماعة التامري</strong> على توفيره للنقل المدرسي واستماعه المستمر لكافة الإكراهات التي تواجه أبناء المنطقة لمواصلة دراستهم في جميع الأسلاك التعليمية.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Factsheet */}
          <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
            <h3 className="font-bold text-xl text-primary mb-4 border-b border-stone-200 pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>بطاقة المبادرة والنشاط:</span>
            </h3>
            <ul className="space-y-3.5 list-none p-0 m-0 text-sm sm:text-base">
              <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-slate-900 sm:min-w-36">الجهة المنظمة:</span>
                <span className="text-slate-700">جمعية أقرقاو للتنمية.</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-slate-900 sm:min-w-36">المكان:</span>
                <span className="text-slate-700">مسجد دوار أقرقاو.</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-slate-900 sm:min-w-36">الفئة المستفيدة:</span>
                <span className="text-slate-700">تلميذات وتلاميذ دوار أقرقاو بمختلف الأسلاك الدراسية (الابتدائي، الإعدادي، التأهيلي).</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-slate-900 sm:min-w-36">المحاور:</span>
                <span className="text-slate-700">توزيع المستلزمات والمحافظ المدرسية + تدارس ملف وإكراهات النقل المدرسي.</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-slate-900 sm:min-w-36">الشركاء والفاعلون:</span>
                <span className="text-slate-700">المحسنون وأبناء الدوار، جماعة التامري، سائقو النقل المزدوج بالمدرسة الجماعاتية تيكزيرين.</span>
              </li>
            </ul>

            <p className="text-center font-bold text-base sm:text-lg text-primary mt-8 pt-6 border-t border-stone-200/80">
              نسأل الله التوفيق والنجاح لجميع أبنائنا وبناتنا في مسارهم الدراسي، وبارك الله في جهود كل المساهمين.
            </p>
          </div>

        </div>

      </div>
    </article>
  );
}
