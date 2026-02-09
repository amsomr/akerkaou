import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for Village Image - Replace 'bg-zinc-800' with actual Image component or img tag */}
        <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white/20 text-4xl font-bold">
           [صورة القرية]
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          يداً بيد من أجل <span className="text-primary">أقرقاو</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-zinc-100 font-light">
          نعمل معاً لتحسين البنية التحتية، تعزيز التعليم، ودعم الأسر في قريتنا الحبيبة.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link 
            href="#join" 
            className="group bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>انضم إلينا</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
