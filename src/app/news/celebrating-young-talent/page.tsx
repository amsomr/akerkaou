import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, MapPin } from "lucide-react";

export default function SportsInitiativeArticle() {
  return (
    <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-zinc-50 border-b border-zinc-100 pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">اجتماعي - رياضي</span>
                        <span className="text-zinc-400">|</span>
                        <span className="text-zinc-500 text-sm">18 شتنبر 2024</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
                        جمعية أقرقاو للتنمية تحتفي بأبطال الدوار: مبادرة رياضية لدعم الطاقات الشابة
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

        {/* Featured Image Placeholder */}
        <div className="container mx-auto px-4 -mt-8 mb-12 relative z-10">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl aspect-video bg-zinc-200 relative">
                <Image 
                    src="/images/projects/young-talent.jpg"
                    alt="تكريم لاعبي شباب أقرقاو"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-20">
            <div className="max-w-3xl mx-auto prose prose-lg prose-zinc font-secondary text-zinc-700 leading-loose">
                
                <p className="lead text-xl md:text-2xl font-medium text-zinc-900 mb-8">
                    في أجواء مفعمة بالحيوية والاعتزاز، وفي إطار برنامجها المستمر لتشجيع الطاقات المحلية، نظمت جمعية أقرقاو للتنمية لقاءً تواصلياً احتفت خلاله بشباب الدوار، مجسدةً بذلك دورها الريادي كداعم أساسي للأجيال الصاعدة.
                </p>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">تتويج مستحق وأجواء احتفالية</h2>
                <p>
                    شهد اللقاء تكريماً خاصاً للاعبي فريق شباب أقرقاو، وذلك تقديراً لإنجازهم الرياضي المتميز بعد انتزاعهم لقب <strong>"أبطال دوري عيد الأضحى بتكزيرين"</strong>. وفي لفتة تشجيعية، قامت الجمعية بتوزيع جوائز عبارة عن أحذية رياضية عالية الجودة على اللاعبين، لمساعدتهم على مواصلة مشوارهم الرياضي وتحفيزهم على تحقيق المزيد من الألقاب.
                </p>

                <figure className="my-12 rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                    <Image
                        src="/images/projects/young-talent-2.jpg"
                        alt="جانب من التكريم"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                    <figcaption className="text-center text-zinc-500 text-sm mt-3 py-2 bg-zinc-50">جانب من حفل التكريم وتوزيع الجوائز</figcaption>
                </figure>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">دعم مستمر ولا مشروط</h2>
                <p>
                    هذه المبادرة ليست غريبة على جمعية أقرقاو للتنمية، التي وضعت نصب أعينها منذ تأسيسها النهوض بوضعية شباب الدوار. فالجمعية لا تكتفي بالدعم في المجال الرياضي فحسب، بل تمتد يد العون لتشمل مختلف المجالات التنموية والاجتماعية، إيماناً منها بأن الاستثمار في الشباب هو الاستثمار الحقيقي في مستقبل "أقرقاو".
                </p>

                <blockquote className="border-r-4 border-primary pl-4 pr-4 py-2 my-8 bg-primary/5 rounded-r-lg italic">
                    <p className="text-lg font-medium text-zinc-900 mb-2">
                        "إن ما تقوم به الجمعية اليوم هو واجب اتجاه شبابنا الطموح، ونحن ملتزمون بالبقاء بجانبهم لتذليل الصعاب وإبراز مواهبهم في كل المحافل."
                    </p>
                    <cite className="text-sm text-zinc-500 not-italic">— أحد أعضاء الجمعية</cite>
                </blockquote>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">شكر وامتنان</h2>
                <p>
                    وبهذه المناسبة، يتوجه شباب وأهالي الدوار بجزيل الشكر والامتنان لكافة أعضاء الجمعية الكرام على مجهوداتهم الجبارة ودعمهم اللامشروط. إن مثل هذه الالتفاتات هي التي تقوي الروابط الاجتماعية وتزرع روح المثابرة في نفوس الناشئة.
                </p>
                
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mt-12 text-center">
                    <p className="font-bold text-xl text-primary">
                        كل التوفيق لشبابنا، ومزيداً من العطاء لجمعيتنا العتيدة.
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
