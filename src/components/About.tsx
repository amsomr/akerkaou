import { Target, Eye, HeartHandshake, CheckCircle, Sparkles, Compass } from "lucide-react";

export default function About() {
  const pillars = [
    "فك العزلة وتأهيل البنية التحتية والمسالك القروية",
    "تحسين الخدمات الأساسية والإنارة العمومية المستدامة",
    "التضامن الاجتماعي ودعم الأسر في الأعياد والمناسبات",
    "رعاية الشباب والأنشطة التربوية والرياضية الهادفة",
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-stone-50 via-white to-stone-50 border-t border-stone-200/80">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Intro Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>هويتنا ورسالتنا</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              جمعية أقرقاو للتنمية: <br />
              <span className="text-primary">إرادة محلية تصنع التغيير الحقيقي</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              تأسست جمعية أقرقاو للتنمية كمنظمة مدنية مستقلة غير ربحية، تنبع من صميم تطلعات ساكنة دوار أقرقاو بجماعة تامري. نؤمن بأن التنمية الحقيقية تبدأ من سواعد أبنائها، وأن التعاون الوثيق بين المجتمع المدني والفاعلين المحليين والمحسنين هو الطريق لبناء قرية عصرية تحافظ على أصالتها وتوفر العيش الكريم لأهلها.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-stone-200/70 shadow-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl overflow-hidden border border-emerald-800/40">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  شعارنا الدائم: <br />
                  <span className="text-amber-300">«يداً بيد من أجل أقرقاو»</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  كل مشروع ننجزه، من إصلاح طريق أو إنارة ممر إلى مساعدة أسرة، هو خطوة نحو مستقبل أفضل لأبنائنا وشيوخنا، بفضل الله ثم تضامنكم السخي.
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>منطقة أقرقاو، قيادة وجماعة تامري</span>
                  <span className="text-emerald-300 font-semibold">تأسست 2019</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Cards: Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-emerald-50 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-emerald-100">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">رسالتنا</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                تحسين جودة الحياة اليومية لساكنة أقرقاو من خلال إنجاز مشاريع مستدامة في البنية التحتية، وتسهيل الولوج للخدمات الأساسية، وتثبيت الساكنة بأرضها.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-amber-100">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">رؤيتنا المستدامة</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                أن تصبح قرية أقرقاو نموذجاً للتنمية القروية التشاركية المتكاملة في جهة سوس ماسة، مع بيئة آمنة وطرق سالكة وشباب مؤهل ومجتمع متضامن.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-teal-50 text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-teal-100">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">قيمنا الجوهرية</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                الشفافية التامة، والمصداقية في تدبير الموارد، وروح التطوع اللامشروط، والعمل التشاركي المنفتح على الجميع لخدمة الصالح العام.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
