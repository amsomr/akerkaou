import { Calendar, CheckCircle2, Users } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "+5",
    label: "سنوات من العطاء",
  },
  {
    icon: CheckCircle2,
    value: "+12",
    label: "مشروع منجز",
  },
  {
    icon: Users,
    value: "+200",
    label: "أسرة مستفيدة",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-zinc-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-background rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <stat.icon className="w-8 h-8" />
              </div>
              <span className="text-4xl font-bold text-zinc-900 mb-2">{stat.value}</span>
              <span className="text-zinc-600 font-medium text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
