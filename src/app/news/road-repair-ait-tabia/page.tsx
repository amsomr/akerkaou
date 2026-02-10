import Link from "next/link";
import { ArrowRight, Calendar, User, MapPin } from "lucide-react";
import ImageSlider from "@/components/ImageSlider";

export default function RoadRepairArticle() {
  return (
    <article className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary font-medium hover:underline gap-2">
                <ArrowRight className="w-4 h-4" />
                <span>العودة للرئيسية</span>
            </Link>
        </div>

        {/* Header */}
        <header className="mb-10 text-center">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                أخبار الجمعية / مشاريع البنية التحتية
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
                استمراراً لمسيرة التنمية: انطلاق أشغال إصلاح وتبليط طريق آيت تابيا (إبشيشن)
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-500 text-sm">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>09 فبراير 2026</span>
                </div>
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>جمعية أقرقاو للتنمية</span>
                </div>
                 <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>جماعة تامري</span>
                </div>
            </div>
        </header>

        {/* Image Slider */}
        <div className="mb-12">
            <ImageSlider images={[
                "https://firebasestorage.googleapis.com/v0/b/akerkaou.firebasestorage.app/o/images%2Froad-repair%2Fimg1_v2.jpg?alt=media&token=473d2153-d7a4-4573-8960-312ffa368833",
                "https://firebasestorage.googleapis.com/v0/b/akerkaou.firebasestorage.app/o/images%2Froad-repair%2Fimg2_v2.jpg?alt=media&token=917d5744-1b6b-4ee6-aefe-a9716caec9e8",
                "https://firebasestorage.googleapis.com/v0/b/akerkaou.firebasestorage.app/o/images%2Froad-repair%2Fimg3_v2.jpg?alt=media&token=edc9158e-f326-49fa-a65e-bac0273f2619"
            ]} />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-zinc max-w-none space-y-8 leading-relaxed text-zinc-700">
            <p className="font-medium text-xl text-zinc-900 leading-8">
                في إطار جهودها المتواصلة لفك العزلة وتحسين البنية التحتية بالمنطقة، وتماشياً مع أهدافها التنموية الرامية إلى خدمة الصالح العام، تعلن جمعية أقرقاو للتنمية عن استمرار أوراشها الميدانية لإصلاح المسالك الطرقية.
            </p>
            
            <p>
                ويسر الجمعية أن تخبر عموم الساكنة والمنخرطين أنه قد تقرر، بحول الله وقوته، مباشرة أشغال تبليط واستصلاح طريق آيت تابيا (إبشيشن)، وذلك يوم غدٍ السبت. تأتي هذه المبادرة كجزء من سلسلة التدخلات التي تقوم بها الجمعية لتيسير التنقل وضمان راحة المواطنين.
            </p>

            <div className="bg-primary/5 p-8 rounded-2xl border-r-4 border-primary my-10">
                <h3 className="text-xl font-bold text-primary mb-4">شكر وعرفان</h3>
                <p>
                    تغتنم الجمعية هذه الفرصة لتتقدم بجزيل الشكر وعظيم الامتنان لكل من ساهم في إخراج هذا العمل إلى حيز الوجود، ونخص بالذكر:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li><strong>المحسنين الكرام:</strong> مساهمة الحاج محند أبشوش بتوفير مادة الإسمنت، ومساهمة السيد عبد الله أبشوش، تقبل الله منهما وجعلها في ميزان حسناتهما.</li>
                    <li><strong>جماعة تامري:</strong> ممثلة في رئيسها السيد مولاي حسن الإدريسي، على دعمهم المتواصل وتعاونهم المثمر لخدمة المنطقة.</li>
                </ul>
            </div>

            <p>
                نسأل الله العلي القدير أن يتقبل من الجميع مساهماتهم المادية والمعنوية، وأن يجعل هذا العمل صدقة جارية ينتفع بها العباد والبلاد.
            </p>

            <blockquote className="text-center font-bold text-2xl text-primary italic border-none py-8">
                &quot;وقل اعملوا فسيرى الله عملكم ورسوله والمؤمنون&quot;
            </blockquote>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-wrap gap-2">
            {['#جمعية_أقرقاو', '#تنمية', '#إصلاح_الطرق', '#آيت_تابيا', '#جماعة_تامري'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm hover:bg-zinc-200 transition-colors cursor-pointer">
                    {tag}
                </span>
            ))}
        </div>

      </div>
    </article>
  );
}
