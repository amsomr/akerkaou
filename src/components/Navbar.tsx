import Link from "next/link";
import { Menu, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-zinc-200 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo - First for SEO/Screen Readers */}
        <Link href="/" className="font-bold text-2xl text-primary flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-cta rounded-lg p-1" aria-label="جمعية أقرقاو للتنمية - الصفحة الرئيسية">
          <span>جمعية أقرقاو للتنمية</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="القائمة الرئيسية">
          <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg focus-visible:ring-2 focus-visible:ring-cta rounded px-2 py-1">
            الرئيسية
          </Link>
          <Link href="#projects" className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg focus-visible:ring-2 focus-visible:ring-cta rounded px-2 py-1">
            مشاريعنا
          </Link>
          <Link href="#board" className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg focus-visible:ring-2 focus-visible:ring-cta rounded px-2 py-1">
            من نحن
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg focus-visible:ring-2 focus-visible:ring-cta rounded px-2 py-1">
            تواصل معنا
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
            <Link 
              href="#donate" 
              className="hidden md:flex items-center gap-2 bg-cta text-cta-foreground px-6 py-3 rounded-full hover:bg-cta/90 transition-all font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-cta/30"
              aria-label="تبرع الآن"
            >
                <span>تـبـرع</span>
                <Heart className="w-5 h-5 fill-current animate-pulse" />
            </Link>

            {/* Mobile Menu Button - Accessible Touch Target */}
            <button 
              className="md:hidden text-foreground hover:text-primary p-2 -mr-2 focus-visible:ring-2 focus-visible:ring-cta rounded-lg"
              aria-label="فتح القائمة"
            >
                <Menu className="w-8 h-8" />
            </button>
        </div>
      </div>
    </header>
  );
}
