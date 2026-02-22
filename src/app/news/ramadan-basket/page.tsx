import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User, MapPin } from "lucide-react";

export default function RamadanBasketArticle() {
  return (
    <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-zinc-50 border-b border-zinc-100 pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">اجتماعي</span>
                        <span className="text-zinc-400">|</span>
                        <span className="text-zinc-500 text-sm">رمضان 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
                        جمعية أقرقاو للتنمية تطلق مبادرة "قفة رمضان" لدعم الأسر المعوزة
                    </h1>
                    <div className="flex items-center gap-6 text-zinc-500 text-sm md:text-base border-t border-zinc-200 pt-6">
                         <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            <span>جمعية أقرقاو للتنمية</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>أقرقاو</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="container mx-auto px-4 -mt-8 mb-12 relative z-10">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl aspect-video bg-zinc-200 relative">
                <Image 
                    src="/images/projects/ramadan-basket-3.jpg"
                    alt="مبادرة قفة رمضان"
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
                    في أجواء مفعمة بالإيمان وقيم التضامن الإنساني، ومع حلول شهر رمضان المبارك لعام 2026، أعلنت جمعية أقرقاو للتنمية عن نجاح مبادرتها التضامنية السنوية الموجهة لفائدة الأسر المعوزة في المنطقة.
                </p>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">عطاء وتكافل</h2>
                <p>
                    بفضل تظافر جهود المحسنين وأعضاء الجمعية، تمكنت الجمعية من توزيع <strong>26 قفة رمضانية</strong> تحتوي على المواد الغذائية الأساسية. وتأتي هذه الخطوة لتخفيف العبء المادي عن الأسر المستفيدة وإدخال الفرحة على قلوبهم في هذا الشهر الكريم، تجسيداً لقيم التآزر التي جبل عليها المجتمع المغربي.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <figure className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full m-0">
                        <div className="relative aspect-[4/3] w-full bg-zinc-100">
                            <Image
                                src="/images/projects/ramadan-basket-2.jpg"
                                alt="تجهيز قفة رمضان"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                    <figure className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full m-0">
                        <div className="relative aspect-[4/3] w-full bg-zinc-100">
                            <Image
                                src="/images/projects/ramadan-basket-3.jpg"
                                alt="توزيع المواد الغذائية"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                </div>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">خير الناس أنفعهم للناس</h2>
                <p>
                    وفي تصريح لممثلي الجمعية، أكدوا أن هذا العمل الخيري ما كان ليرى النور لولا فضل الله أولاً، ثم مساهمات ذوي الأريحية والقلوب الرحيمة الذين استجابوا لنداء الواجب الإنساني. ورفعت الجمعية أكف الضراعة إلى العلي القدير أن يتقبل من الجميع صالح الأعمال، وأن يجعل هذا العطاء في ميزان حسنات كل من ساهم من قريب أو بعيد.
                </p>

                <blockquote className="border-r-4 border-primary pl-4 pr-4 py-2 my-8 bg-primary/5 rounded-r-lg italic">
                    <p className="text-lg font-medium text-zinc-900 mb-2">
                        "إن خير الناس أنفعهم للناس" – شعارٌ اتخذته الجمعية نبراساً لها في مسيرتها التنموية والاجتماعية، مؤكدة استمرارها في تقديم الدعم والمساندة لساكنة المنطقة.
                    </p>
                </blockquote>

                <figure className="my-12 rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                    <div className="relative aspect-video w-full bg-zinc-100">
                        <Image
                            src="/images/projects/ramadan-basket-4.jpg"
                            alt="القفة الرمضانية"
                            fill
                            sizes="(max-width: 1200px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>
                </figure>

                <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 mt-12">
                    <h3 className="font-bold text-xl text-primary mb-4 border-b border-zinc-200 pb-2">بطاقة المبادرة:</h3>
                    <ul className="space-y-3 list-none p-0 m-0">
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">الجهة المنظمة:</span>
                            <span>جمعية أقرقاو للتنمية.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">المناسبة:</span>
                            <span>حلول شهر رمضان المبارك.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">الحصيلة:</span>
                            <span>توزيع 26 قفة غذائية متكاملة.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">الفئة المستهدفة:</span>
                            <span>الأسر المعوزة بالمنطقة.</span>
                        </li>
                    </ul>
                    <p className="text-center font-bold text-lg text-primary mt-8">
                        تقبل الله منكم ومنا صالح الأعمال، وبارك في جهودكم لخدمة "أقرقاو".
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
