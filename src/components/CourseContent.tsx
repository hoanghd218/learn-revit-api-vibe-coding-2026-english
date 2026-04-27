"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  revitApiChapters,
  aiAgentTracks,
  totalRevitMinutes,
  totalRevitLessons,
  type Chapter,
  type AiAgentChapter,
} from "./course-data";

type TrackKey = "ai" | "revit";

function ChapterAccordion({
  chapter,
  index,
  isAiTrack,
}: {
  chapter: Chapter | AiAgentChapter;
  index: number;
  isAiTrack: boolean;
}) {
  const [open, setOpen] = useState(false);
  const onlyOption2 =
    isAiTrack && (chapter as AiAgentChapter).availableIn?.length === 1;

  return (
    <div className="bg-surface border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary/40 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 text-primary font-black flex items-center justify-center text-xs sm:text-sm">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-primary">
                {chapter.number}
              </span>
              {onlyOption2 && (
                <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-black">
                  GÓI 5M
                </span>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-on-surface truncate">
              {chapter.title}
            </h3>
            <p className="text-[11px] sm:text-xs text-on-surface-variant">
              {chapter.lessons.length} bài
              {chapter.totalMinutes > 0 && ` · ${chapter.totalMinutes} phút`}
            </p>
          </div>
        </div>
        <span
          className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "" }}
        >
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[800px]" : "max-h-0"}`}
      >
        <ul className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-2 border-t border-outline-variant/20 pt-3">
          {chapter.lessons.map((lesson) => (
            <li
              key={lesson.name}
              className="flex items-start gap-2 text-xs sm:text-sm text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-primary text-base shrink-0">
                play_circle
              </span>
              <span className="flex-1">{lesson.name}</span>
              {lesson.isFree && (
                <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-black shrink-0">
                  FREE
                </span>
              )}
              {lesson.minutes > 0 && (
                <span className="text-[10px] text-on-surface-variant/60 shrink-0">
                  {lesson.minutes}p
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CourseContent() {
  const [activeTrack, setActiveTrack] = useState<TrackKey>("ai");
  const totalRevitHours = (totalRevitMinutes / 60).toFixed(1);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-3">
              NỘI DUNG KHÓA HỌC
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              <span className="font-bold text-primary">
                {totalRevitHours} giờ video HD
              </span>{" "}
              · <span className="font-bold">{totalRevitLessons}+ bài học</span> ·{" "}
              <span className="font-bold">4 buổi Live Zoom</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Why split callout */}
        <ScrollReveal delay={100}>
          <div className="bg-surface-container-high border border-primary/30 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 flex gap-3">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0">
              lightbulb
            </span>
            <div className="text-xs sm:text-sm text-on-surface-variant">
              <span className="font-black text-on-surface">Tại sao 60% là video có sẵn?</span>{" "}
              Bạn KHÔNG phải chờ live mới học. Mua xong → vào học ngay 13 giờ video Revit API.
              Live Zoom + group coaching hàng tuần dành cho phần AI Agents — phần khó nhất cần mentor đồng hành.
            </div>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={150}>
          <div className="flex gap-2 sm:gap-3 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTrack("ai")}
              className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTrack === "ai"
                  ? "bg-linear-to-br from-primary to-primary-container text-on-primary-container shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  : "bg-surface-container-high text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-base">smart_toy</span>
              Track AI Agents (Live)
              <span className="px-1.5 py-0.5 rounded-full bg-red-600/30 text-red-300 text-[9px] font-black">
                HOT
              </span>
            </button>
            <button
              onClick={() => setActiveTrack("revit")}
              className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTrack === "revit"
                  ? "bg-linear-to-br from-primary to-primary-container text-on-primary-container shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  : "bg-surface-container-high text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span className="material-symbols-outlined text-base">play_circle</span>
              Track Revit API (Video HD)
            </button>
          </div>
        </ScrollReveal>

        {/* Chapter list */}
        <div className="space-y-3">
          {activeTrack === "ai"
            ? aiAgentTracks.map((ch, i) => (
                <ChapterAccordion key={ch.number} chapter={ch} index={i} isAiTrack />
              ))
            : revitApiChapters.map((ch, i) => (
                <ChapterAccordion key={ch.number} chapter={ch} index={i} isAiTrack={false} />
              ))}
        </div>
      </div>
    </section>
  );
}
