import { Target, Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">من نحن</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            جمعية أقرقاو للتنمية هي منظمة غير حكومية، مستقلة، تسعى لتحقيق التنمية الشاملة في دوار أقرقاو والمناطق المجاورة. نؤمن بأن العمل الجماعي والتطوعي هو السبيل الأمثل لبناء مجتمع متكافل ومزدهر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">رسالتنا</h3>
            <p className="text-zinc-600">
              تحسين جودة الحياة في الدوار من خلال مشاريع تنموية مستدامة في البنية التحتية، التعليم، والصحة.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">قيمنا</h3>
            <p className="text-zinc-600">
              الشفافية، المصداقية، التعاون، والتضامن هي القيم الجوهرية التي توجه كل خطوة نخطوها.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">أهدافنا</h3>
            <p className="text-zinc-600">
              تعزيز قيم التكافل الاجتماعي، دعم الفئات الهشة، وتشجيع المبادرات الشبابية والنسوية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
