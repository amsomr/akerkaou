"use client";

import { useState } from "react";
import { Users, Award, Shield, Sparkles } from "lucide-react";
import clsx from "clsx";

interface Member {
  name: string;
  role: string;
  category: "executive" | "advisor";
  initials: string;
  badgeColor?: string;
}

const members: Member[] = [
  // Executive Bureau
  { name: "الحسين الخداش", role: "رئيس الجمعية", category: "executive", initials: "ح خ", badgeColor: "bg-amber-100 text-amber-800 border-amber-200" },
  { name: "محمد ايت امسين", role: "النائب الأول للرئيس", category: "executive", initials: "م أ", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { name: "محمد أبشوش", role: "النائب الثاني للرئيس", category: "executive", initials: "م أ", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { name: "ابراهيم الخداش", role: "النائب الثالث للرئيس", category: "executive", initials: "ا خ", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { name: "عزيز ايت امسين", role: "النائب الرابع للرئيس", category: "executive", initials: "ع أ", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { name: "حسن أكزار", role: "النائب الخامس للرئيس", category: "executive", initials: "ح أ", badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { name: "عبدالله اسالت", role: "الكاتب العام", category: "executive", initials: "ع ا", badgeColor: "bg-teal-100 text-teal-800 border-teal-200" },
  { name: "عبدالرحيم اد وخراز", role: "أمين المال", category: "executive", initials: "ع ا", badgeColor: "bg-amber-100 text-amber-800 border-amber-200" },
  { name: "رشيد أخبار", role: "نائب أمين المال", category: "executive", initials: "ر أ", badgeColor: "bg-amber-100 text-amber-800 border-amber-200" },
  
  // Advisors
  { name: "محمد إميش", role: "مستشار الجمعية", category: "advisor", initials: "م إ" },
  { name: "حميد أكوز", role: "مستشار الجمعية", category: "advisor", initials: "ح أ" },
  { name: "محمد الخداش", role: "مستشار الجمعية", category: "advisor", initials: "م خ" },
  { name: "عمر الخداش", role: "مستشار الجمعية", category: "advisor", initials: "ع خ" },
  { name: "عبدالله حيكون", role: "مستشار الجمعية", category: "advisor", initials: "ع ح" },
  { name: "أحمد العامري", role: "مستشار الجمعية", category: "advisor", initials: "أ ع" },
  { name: "لحسن عبيد", role: "مستشار الجمعية", category: "advisor", initials: "ل ع" },
];

export default function BoardMembers() {
  const [filter, setFilter] = useState<"all" | "executive" | "advisor">("all");

  const filteredMembers = filter === "all" 
    ? members 
    : members.filter(m => m.category === filter);

  return (
    <section id="board" className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>الحكامة والشفافية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            أعضاء المكتب المسير للجمعية
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            فريق متطوع من خيرة أبناء القرية يسهر بكل تفانٍ وأمانة على حسن تدبير ومتابعة المشاريع التنموية.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2.5 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={clsx(
              "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
              filter === "all"
                ? "bg-primary text-white shadow-md shadow-emerald-900/10"
                : "bg-stone-100 text-slate-600 hover:bg-stone-200"
            )}
          >
            جميع الأعضاء ({members.length})
          </button>
          <button
            onClick={() => setFilter("executive")}
            className={clsx(
              "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
              filter === "executive"
                ? "bg-primary text-white shadow-md shadow-emerald-900/10"
                : "bg-stone-100 text-slate-600 hover:bg-stone-200"
            )}
          >
            المكتب التنفيذي (9)
          </button>
          <button
            onClick={() => setFilter("advisor")}
            className={clsx(
              "px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
              filter === "advisor"
                ? "bg-primary text-white shadow-md shadow-emerald-900/10"
                : "bg-stone-100 text-slate-600 hover:bg-stone-200"
            )}
          >
            المستشارون (7)
          </button>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => {
            const isLeader = member.role.includes("رئيس") && !member.role.includes("نائب");
            return (
              <div 
                key={index} 
                className={clsx(
                  "relative group rounded-3xl p-6 transition-all duration-300 flex flex-col items-center text-center",
                  isLeader 
                    ? "bg-gradient-to-b from-amber-50/60 to-white border-2 border-amber-300 shadow-md sm:col-span-2 lg:col-span-2 xl:col-span-1" 
                    : "bg-stone-50/70 hover:bg-white border border-stone-200/70 hover:border-emerald-200 shadow-xs hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {/* Monogram Avatar */}
                <div className={clsx(
                  "w-20 h-20 rounded-2xl flex items-center justify-center font-extrabold text-xl mb-4 transition-transform duration-300 group-hover:scale-105 shadow-inner",
                  isLeader 
                    ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-amber-600/20"
                    : member.category === "executive"
                    ? "bg-gradient-to-br from-emerald-600 to-primary text-white shadow-emerald-700/20"
                    : "bg-slate-200 text-slate-700"
                )}>
                  {member.initials}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                {/* Role Badge */}
                <span className={clsx(
                  "text-xs font-semibold px-3 py-1 rounded-full border mb-2",
                  member.badgeColor || "bg-slate-100 text-slate-600 border-slate-200"
                )}>
                  {member.role}
                </span>

                {/* Subtext */}
                <p className="text-[11px] text-slate-400 mt-auto pt-2">
                  {member.category === "executive" ? "عضو المكتب التنفيذي" : "مستشار مكلف بمهام"}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
