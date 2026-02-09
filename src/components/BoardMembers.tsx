import { User } from "lucide-react";

const members = [
  { name: "الحسين الخداش", role: "الرئيس" },
  { name: "محمد ايت امسين", role: "نائب الأول للرئيس" },
  { name: "محمد أبشوش", role: "نائب الثاني للرئيس" },
  { name: "ابراهيم الخداش", role: "نائب الثالث للرئيس" },
  { name: "عزيز ايت امسين", role: "نائب الرابع للرئيس" },
  { name: "حسن أكزار", role: "نائب الخامس للرئيس" },
  { name: "عبدالله اسالت", role: "الكاتب العام" },
  { name: "عبدالرحيم اد وخراز", role: "أمين المال" },
  { name: "رشيد أخبار", role: "نائب أمين المال" },
  { name: "محمد إميش", role: "مستشار" },
  { name: "حميد أكوز", role: "مستشار" },
  { name: "محمد الخداش", role: "مستشار" },
  { name: "عمر الخداش", role: "مستشار" },
  { name: "عبدالله حيكون", role: "مستشار" },
  { name: "أحمد العامري", role: "مستشار" },
  { name: "لحسن عبيد", role: "مستشار" },
];

export default function BoardMembers() {
  return (
    <section id="board" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">أعضاء المكتب</h2>
          <p className="text-zinc-600">الفريق الذي يسهر على تسيير شؤون الجمعية.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-48 h-48 rounded-full bg-zinc-100 overflow-hidden mb-6 border-4 border-zinc-50 shadow-inner flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                 <User className="w-20 h-20 text-zinc-300" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">{member.name}</h3>
              <span className="text-primary font-medium">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
