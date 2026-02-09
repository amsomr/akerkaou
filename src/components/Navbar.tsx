import Link from "next/link";
import { Menu, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button - Left on RTL (actually Right visually because flex-row-reverse behavior in RTL? No, flex-row is default) 
            In RTL:
            - justify-between puts first item on Right, last item on Left.
            So:
            - Logo (First child) -> Right
            - Mobile Menu (Hidden on desktop)
            - Links (Middle)
            - Donate Button (Last child) -> Left
        */}
        
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-primary flex items-center gap-2">
          <span>جمعية أقرقاو للتنمية</span>
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
            {/* 
                margin-left in RTL adds space to the left side, pushing subsequent items left.
                But in RTL flex container, items flow Right to Left.
                So gap handles spacing.
             */}
          <Link href="/" className="text-zinc-600 hover:text-primary transition-colors font-medium">
            الرئيسية
          </Link>
          <Link href="#projects" className="text-zinc-600 hover:text-primary transition-colors font-medium">
            مشاريعنا
          </Link>
          <Link href="#board" className="text-zinc-600 hover:text-primary transition-colors font-medium">
            من نحن
          </Link>
          <Link href="#contact" className="text-zinc-600 hover:text-primary transition-colors font-medium">
            تواصل معنا
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
            <Link href="#donate" className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-sm hover:shadow-md">
                <span>تـبـرع</span>
                <Heart className="w-4 h-4 fill-current" />
            </Link>

            <button className="md:hidden text-zinc-600 hover:text-primary">
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </div>
    </nav>
  );
}
