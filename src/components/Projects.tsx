"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Hammer, Users, GraduationCap, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const categories = [
  { id: "all", label: "الكل" },
  { id: "Infrastructure", label: "البنية التحتية", icon: Hammer },
  { id: "Social", label: "الاجتماعي", icon: Users },
  { id: "Education", label: "التعليم", icon: GraduationCap },
];

interface Project {
  id: number;
  title: string;
  category: string;
  status: string;
  description?: string;
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 7,
    title: "إصلاح طريق نتوريرت إنضالي",
    category: "Infrastructure",
    status: "Completed",
    description: "إصلاح طريق نتوريرت إنضالي: ثمرة تعاون وجهود جماعية لخدمة دوار أقرقاو.",
    image: "/images/news-ntourirt/featured.jpg",
    link: "/news/road-repair-ntourirt-indali",
  },
  {
    id: 6,
    title: "مبادرة دعم الطاقات الشابة",
    category: "Social",
    status: "Completed",
    description: "تكريم لاعبي فريق شباب أقرقاو أبطال دوري عيد الأضحى ودعمهم بمعدات رياضية.",
    image: "/images/projects/young-talent.jpg",
    link: "/news/celebrating-young-talent",
  },
  {
    id: 5,
    title: "إصلاح طريق آيت تابيا (إبشيشن)",
    category: "Infrastructure",
    status: "Ongoing",
    description: "انطلاق أشغال إصلاح وتبليط الطريق لفك العزلة، بمساهمة المحسنين وجماعة تامري.",
    image: "https://firebasestorage.googleapis.com/v0/b/akerkaou.firebasestorage.app/o/images%2Froad-repair%2Fimg1_v2.jpg?alt=media&token=473d2153-d7a4-4573-8960-312ffa368833",
    link: "/news/road-repair-ait-tabia",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">مشاريعنا وأخبارنا</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            نعمل على تنفيذ مشاريع تنموية تخدم سكان القرية في مختلف المجالات.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                "px-6 py-2 rounded-full transition-all text-sm font-medium flex items-center gap-2",
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
              )}
            >
              {cat.icon && <cat.icon className="w-4 h-4" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-zinc-100 flex flex-col h-full relative">
              {/* Image Placeholder */}
              <div className="h-48 bg-zinc-200 relative overflow-hidden shrink-0">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center text-secondary/30">
                    <span className="font-bold text-lg">[صورة المشروع]</span>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className={clsx(
                  "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10",
                  project.status === "Completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                )}>
                  {project.status === "Completed" ? "منجز" : "جاري"}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{project.title}</h3>
                {project.description && (
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 text-zinc-600 font-medium">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                  
                  {project.link ? (
                    <span className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium group-hover:underline">
                      <span>اقرأ المزيد</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  ) : (
                    <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium group-hover:underline">
                      <span>التفاصيل</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {project.link && (
                    <Link href={project.link} className="absolute inset-0 z-10" aria-label={`Read more about ${project.title}`}></Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
