import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User, MapPin, Lightbulb } from "lucide-react";

export default function LampsReplacementArticle() {
  return (
    <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-zinc-50 border-b border-zinc-100 pt-32 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <span className="bg-primary/10 px-3 py-1 rounded-full text-sm">البنية التحتية</span>
                        <span className="text-zinc-400">|</span>
                        <span className="text-zinc-500 text-sm">مارس 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
                        استكمال مجهودات جمعية أقرقاو للتنمية في تحسين الإنارة العمومية بالمنطقة
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

        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-8 mb-12 relative z-10">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl aspect-video bg-zinc-200 relative">
                <Image 
                    src="/images/lamps-replacement/img1.jpg"
                    alt="استبدال المصابيح التالفة"
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
                    في إطار استكمال مجهودات جمعية أقرقاو للتنمية الرامية إلى تحسين ظروف العيش وتعزيز الخدمات الأساسية بالمنطقة، تم بفضل الله استبدال المصابيح التالفة والقديمة بعدد من نقاط الإنارة، وذلك بشراكة متميزة مع جماعة تامري.
                </p>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">تعاون مثمر من أجل تنمية محلية</h2>
                <p>
                    تأتي هذه المبادرة ثمرة تعاون وثيق بين المجتمع المدني والمجالس المنتخبة، حيث ساهمت جماعة تامري، مشكورة، بعشرة مصابيح بفضل دعم رئيسها السيد مولي حسن الإدريسي، جزاه الله خير الجزاء على مساهمته الدائمة في دعم المبادرات التنموية المحلية. 
                </p>
                <p>
                    ومن جانبها، ساهمت جمعية أقرقاو للتنمية بأربعة مصابيح من نوع LED، والتي تم اختيارها لما تتميز به من جودة عالية في الإضاءة واقتصاد كبير في استهلاك الطاقة، مما يضمن استمرارية الخدمة بأقل التكاليف.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <figure className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full m-0">
                        <div className="relative aspect-[4/3] w-full bg-zinc-100">
                            <Image
                                src="/images/lamps-replacement/img2.jpg"
                                alt="أشغال تغيير المصابيح"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                    <figure className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full m-0">
                        <div className="relative aspect-[4/3] w-full bg-zinc-100">
                            <Image
                                src="/images/lamps-replacement/img3.jpg"
                                alt="تحسين الإنارة العمومية"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                </div>

                <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-6 text-primary">بيئة أكثر أماناً وراحة</h2>
                <p>
                    تهدف هذه المبادرة بشكل أساسي إلى تحسين الإنارة العمومية في النقط السوداء التي كانت تعاني من ضعف الإضاءة، مما سيساهم بلا شك في توفير بيئة أكثر أماناً وراحة لساكنة المنطقة، خاصة خلال فترات الليل. وتؤكد الجمعية على استمرارها في بذل كافة الجهود لخدمة الصالح العام والارتقاء بمستوى الخدمات بالمنطقة.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <figure className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full m-0">
                        <div className="relative aspect-[4/3] w-full bg-zinc-100">
                            <Image
                                src="/images/lamps-replacement/img4.jpg"
                                alt="الصيانة والإصلاح"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                    <figure className="rounded-2xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full m-0">
                        <div className="relative aspect-[4/3] w-full bg-zinc-100">
                            <Image
                                src="/images/lamps-replacement/img5.jpg"
                                alt="إنارة بجودة LED"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </figure>
                </div>

                <figure className="my-12 rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                    <div className="relative aspect-video w-full bg-zinc-100">
                        <Image
                            src="/images/lamps-replacement/img6.jpg"
                            alt="مشروع الإنارة العمومية"
                            fill
                            sizes="(max-width: 1200px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>
                </figure>

                <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 mt-12">
                    <h3 className="font-bold text-xl text-primary mb-4 border-b border-zinc-200 pb-2">تفاصيل المبادرة:</h3>
                    <ul className="space-y-3 list-none p-0 m-0">
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">المساهمون:</span>
                            <span>جماعة تامري (10 مصابيح) وجمعية أقرقاو (4 مصابيح LED).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">نوع المصابيح:</span>
                            <span>مصابيح اقتصادية LED ومصابيح الإنارة العمومية المعتمدة.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-bold text-zinc-800 min-w-32">الهدف:</span>
                            <span>تحسين الإنارة العمومية، تعزيز الأمن، وترشيد استهلاك الطاقة.</span>
                        </li>
                    </ul>
                    <p className="text-center font-bold text-lg text-primary mt-8">
                        نسأل الله أن يتقبل من الجميع صالح الأعمال، ورمضان كريم للجميع. 🤲✨
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
