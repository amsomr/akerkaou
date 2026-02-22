import Link from "next/link";
import { ArrowRight, Calendar, User, MapPin } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export default function NtourirtIndaliRoadRepairArticle() {
  return (
    <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-zinc-50 border-b border-zinc-100 pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">البنية التحتية</span>
                        <span className="text-zinc-400">|</span>
                        <span className="text-zinc-500 text-sm">22 فبراير 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
                        إصلاح طريق نتوريرت إنضالي: ثمرة تعاون وجهود جماعية لخدمة دوار أقرقاو
                    </h1>
                    <div className="flex items-center gap-6 text-zinc-500 text-sm md:text-base border-t border-zinc-200 pt-6">
                         <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            <span>جمعية أقرقاو للتنمية</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>دوار أقرقاو</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Featured Image Slider */}
        <div className="container mx-auto px-4 -mt-8 mb-12 relative z-10">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl aspect-video bg-zinc-200 relative">
                <ImageSlider images={[
                    "/images/news-ntourirt/featured.jpg",
                    "/images/news-ntourirt/ntourirt-indali-1.jpg",
                    "/images/news-ntourirt/ntourirt-indali-3.jpg",
                    "/images/news-ntourirt/ntourirt-indali-4.jpg",
                    "/images/news-ntourirt/ntourirt-indali-5.jpg"
                ]} />
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-20">
            <div className="max-w-3xl mx-auto prose prose-lg prose-zinc font-secondary text-zinc-700 leading-loose">
                
                <p className="lead text-xl md:text-2xl font-medium text-zinc-900 mb-8">
                    الحمد لله وفضله، تم إنجاز إصلاح طريق نتوريرت إنضالي، في خطوة مهمة تعكس روح التعاون والتآزر بين أبناء المنطقة وحرصهم الصادق على خدمة الصالح العام. ويُعد هذا المشروع ثمرة جهود مشتركة ساهم فيها العديد من المحسنين وأبناء الدوار، سواء بعملهم أو بمالهم أو بوقتهم، إيمانًا منهم بأهمية تحسين البنية التحتية وتعزيز ظروف العيش الكريم.
                </p>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">شكر وعرفان بالجميل</h2>
                <p>
                    وبهذه المناسبة، نتقدم بخالص الشكر والامتنان لكل من كانت له يد في إنجاح هذا العمل، سائلين الله عز وجل أن يتقبل منا ومنكم صالح الأعمال، وأن يجزي الجميع خير الجزاء على ما قدموه من دعم ومساندة.
                </p>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">حضور داعم وتشجيع مستمر</h2>
                <p>
                    كما تشرف الحاضرون بحضور رئيس الجمعية السابق، الحاج الحسين بشيش، الذي عبّر عن سعادته الكبيرة باستمرار مجهودات الجمعية في تنمية دوار أقرقاو، ومواصلة مسيرة العطاء التي تهدف إلى تحقيق التنمية المحلية وخدمة الساكنة.
                </p>

                <blockquote className="border-r-4 border-primary pl-4 pr-4 py-2 my-8 bg-primary/5 rounded-r-lg italic">
                    <p className="text-lg font-medium text-zinc-900 mb-2">
                        إن إصلاح طريق نتوريرت إنضالي ليس مجرد مشروع بنية تحتية، بل هو دليل حي على قوة التضامن وروح المسؤولية الجماعية التي يتميز بها أبناء المنطقة، ودافع لمزيد من المبادرات التي تسهم في تنمية الدوار وتحسين جودة الحياة فيه.
                    </p>
                </blockquote>
                
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mt-12 text-center">
                    <p className="font-bold text-xl text-primary">
                        حفظ الله قريتنا دوار أقرقاو، وأدام عليها نعمة التعاون والتآخي.
                    </p>
                </div>

            </div>

             {/* Navigation */}
            <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-zinc-200 flex justify-between items-center">
                <Link href="/" className="inline-flex items-center text-zinc-600 hover:text-primary transition-colors font-medium">
                    <ArrowRight className="ml-2 w-5 h-5 rotate-180" />
                    العودة للرئيسية
                </Link>
            </div>
        </div>
    </article>
  );
}
