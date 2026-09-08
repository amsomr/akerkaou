"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hammer, Users, Trophy, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import clsx from "clsx";

const categories = [
  { id: "all", label: "جميع المبادرات" },
  { id: "Infrastructure", label: "البنية التحتية والمسالك", icon: Hammer },
  { id: "Social", label: "التضامن والعمل الاجتماعي", icon: Users },
  { id: "Youth", label: "الشباب والرياضة", icon: Trophy },
];

interface Project {
  id: number;
  title: string;
  category: string;
  status: string;
  date?: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 11,
    title: "تفريغ شاحنات البافي لتهيئة وتبليط طريق أوسيلات",
    category: "Infrastructure",
    status: "Completed",
    date: "أحدث الأوراش",
    description: "تفريغ 3 شاحنات من أحجار التبليط (البافي) أمام طريق أوسيلات استعداداً لبدء أشغال التهيئة وفك العزلة بشراكة مع جماعة تامري.",
    image: "/images/road-oussilat/img1.jpg",
    link: "/news/road-paving-oussilat",
  },
  {
    id: 10,
    title: "صيانة الإنارة العمومية وتزيين صومعة مسجد أقرقاو",
    category: "Infrastructure",
    status: "Completed",
    date: "أحدث المبادرات",
    description: "إصلاح عدة مصابيح للإنارة العمومية بعدة أحياء بدوار أقرقاو وإضافة لمسة فنية وجمالية لصومعة المسجد بشراكة مع جماعة تامري.",
    image: "/images/mosque-lighting/mosque-minaret.jpg",
    link: "/news/mosque-lighting-maintenance",
  },
  {
    id: 9,
    title: "استبدال وتجديد الإنارة العمومية بـ LED",
    category: "Infrastructure",
    status: "Completed",
    date: "مارس 2026",
    description: "استبدال المصابيح التالفة بنقاط إنارة اقتصادية حديثة LED بشراكة استراتيجية مع جماعة تامري لتعزيز أمن وراحة الساكنة ليلاً.",
    image: "/images/lamps-replacement/img1.jpg",
    link: "/news/lamps-replacement",
  },
  {
    id: 8,
    title: "مبادرة قفة رمضان لدعم الأسر المعوزة",
    category: "Social",
    status: "Completed",
    date: "رمضان المبارك",
    description: "توزيع أكثر من 26 قفة رمضانية شاملة للمواد الغذائية الأساسية لترسيخ قيم التكافل والتضامن مع الأسر المتعففة بأقرقاو.",
    image: "/images/projects/ramadan-basket-3.jpg",
    link: "/news/ramadan-basket",
  },
  {
    id: 7,
    title: "إصلاح وتبليط طريق نتوريرت إنضالي",
    category: "Infrastructure",
    status: "Completed",
    date: "فبراير 2026",
    description: "مشروع حيوي لفك العزلة وتسهيل تنقل الساكنة وسيارات الإسعاف بفضل تظافر جهود المحسنين وأبناء الدوار ومجلس الجماعة.",
    image: "/images/news-ntourirt/featured.jpg",
    link: "/news/road-repair-ntourirt-indali",
  },
  {
    id: 6,
    title: "مبادرة دعم وتكريم الطاقات الشابة",
    category: "Youth",
    status: "Completed",
    date: "عيد الأضحى",
    description: "الاحتفاء بفريق شباب أقرقاو بطل الدوري وتزويدهم بمعدات وألبسة رياضية لتشجيع الممارسة الرياضية والروح الإيجابية.",
    image: "/images/projects/young-talent.jpg",
    link: "/news/celebrating-young-talent",
  },
  {
    id: 5,
    title: "إصلاح وتوسيع طريق آيت تابيا (إبشيشن)",
    category: "Infrastructure",
    status: "Completed",
    date: "يناير 2026",
    description: "توسعة وبناء دعامات الطريق الجبلي الوعر وتثبيت جنباته لضمان سلامة الراجلين والمركبات ومكافحة انجراف التربة.",
    image: "/images/road-repair/img1_v2.jpg",
    link: "/news/road-repair-ait-tabia",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>مشاريعنا الميدانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            إنجازات صنعت الفارق في حياة الساكنة
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            نركز على الأولويات الأساسية: الطرق والمسالك، الإنارة، رعاية الفئات الهشة، وتشجيع شباب المنطقة.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12" role="tablist">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  "px-5 py-2.5 rounded-xl transition-all text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer",
                  isActive
                    ? "bg-primary text-white shadow-md shadow-emerald-900/20 scale-102"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-200"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <article 
              key={project.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 hover:border-emerald-200 flex flex-col h-full relative"
            >
              {/* Image Container */}
              <div className="h-56 w-full relative overflow-hidden bg-slate-100">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient for badge contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5 z-10">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>تم الإنجاز</span>
                </div>

                {project.date && (
                  <div className="absolute bottom-3 right-4 bg-black/60 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md backdrop-blur-sm z-10">
                    {project.date}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
                    {categories.find(c => c.id === project.category)?.label || "تنموي"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Footer link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-primary font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>تفاصيل التقرير والصور</span>
                    <ArrowLeft className="w-4 h-4" />
                  </span>
                </div>

                {/* Full card clickable link */}
                <Link 
                  href={project.link} 
                  className="absolute inset-0 z-20" 
                  aria-label={`قراءة تقرير كامل عن ${project.title}`}
                >
                  <span className="sr-only">قراءة المزيد</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
