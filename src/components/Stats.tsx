import { Calendar, CheckCircle2, Users } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "+5",
    label: "سنوات من العطاء",
    description: "نخدم المجتمع منذ 2019"
  },
  {
    icon: CheckCircle2,
    value: "+12",
    label: "مشروع منجز",
    description: "مشاريع تنموية مستدامة"
  },
  {
    icon: Users,
    value: "+200",
    label: "أسرة مستفيدة",
    description: "دعم مباشر للأسر المتعففة"
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-zinc-50 border-b border-zinc-200" aria-label="إحصائيات الجمعية">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <stat.icon className="w-10 h-10" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <span className="block text-5xl font-extrabold text-zinc-900 tracking-tight">{stat.value}</span>
                <h3 className="text-xl font-bold text-zinc-800">{stat.label}</h3>
                <p className="text-zinc-500 text-sm font-medium">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
