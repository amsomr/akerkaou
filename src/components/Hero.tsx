import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900">
      
      {/* Background with Accessible Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-black/30 z-10" />
        {/* Note: In production, use Next.js Image with priority */}
        <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-60 scale-105 animate-slow-zoom"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center space-y-10 max-w-4xl">
        
        {/* Badge / Announcement */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
            </span>
            <span className="text-primary-foreground font-medium text-sm">أكثر من 50 مشروع تنموي منجز</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight animate-fade-in-up delay-100">
          يداً بيد من أجل <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cta">مستقبل أقرقاو</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-200 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          نعمل معاً لتحسين البنية التحتية، وتعزيز التعليم، ودعم الأسر لبناء مجتمع متكافل ومزدهر.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-300">
          <Link 
            href="#donate" 
            className="w-full sm:w-auto bg-cta text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-cta/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-cta/20 hover:shadow-xl hover:-translate-y-1 hover:scale-105 focus-visible:ring-4 focus-visible:ring-cta/30"
            aria-label="ساهم الآن في مشاريعنا"
          >
            <span>ساهم في التغيير</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link 
            href="#projects" 
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            <span>اكتشف مشاريعنا</span>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="pt-12 flex items-center justify-center gap-4 animate-fade-in-up delay-500">
            <div className="flex -space-x-4 space-x-reverse">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                        <Users className="w-4 h-4" />
                    </div>
                ))}
            </div>
            <div className="text-right">
                <p className="text-white font-bold text-sm">إنضم إلى +500 عضو</p>
                <p className="text-zinc-400 text-xs text-right">يساهمون في تنمية القرية</p>
            </div>
        </div>

      </div>
    </section>
  );
}
