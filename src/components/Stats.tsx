import { Calendar, CheckCircle2, Users, HeartHandshake, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "+5",
    unit: "سنوات",
    label: "من العطاء والعمل الميداني",
    description: "نخدم دوار أقرقاو ومحيطه بكل إخلاص منذ 2019",
    color: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-700",
  },
  {
    icon: CheckCircle2,
    value: "+50",
    unit: "مشروعاً",
    label: "مبادرة تنموية منجزة",
    description: "فك العزلة، الإنارة، إصلاح المسالك، وتأهيل المرافق",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-700",
  },
  {
    icon: Users,
    value: "+200",
    unit: "أسرة",
    label: "استفادت من برامج الدعم",
    description: "قفة رمضان، المساعدات الموسمية، ومساندة الحالات الحرجة",
    color: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-700",
  },
  {
    icon: HeartHandshake,
    value: "100%",
    unit: "تطوع",
    label: "شفافية وتضامن محلي",
    description: "مسيرو الجمعية متطوعون بالكامل لخدمة الصالح العام",
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-700",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 sm:py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50 border-y border-stone-200/70" aria-label="إحصائيات الجمعية">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>حصيلة العمل الجمعوي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            أثر ملموس وأرقام تتحدث عن إنجازاتنا
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            جهود متواصلة بفضل تكاتف أبناء القرية ومساهمات المحسنين الكرام.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-7 border border-stone-200/80 shadow-sm hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-emerald-700">
                    {stat.unit}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">
                  {stat.label}
                </h3>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed pt-3 border-t border-stone-100 mt-4">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
