'use client';

import { useState, useEffect } from 'react';
import { CurriculumAccordion } from './curriculum-accordion';
import { CurriculumSkeleton } from './curriculum-skeleton';
import type { CurriculumSection as CurriculumSectionType } from '@/types/course';

/**
 * Calculate total duration from lessons in a section
 */
function calculateTotalDuration(sections: CurriculumSectionType[]): string {
  let totalSeconds = 0;

  sections.forEach(section => {
    section.lessons.forEach(lesson => {
      // Parse duration format "HH:MM:SS" or "MM:SS"
      const parts = lesson.duration.split(':').map(Number);
      if (parts.length === 3) {
        totalSeconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
      } else if (parts.length === 2) {
        totalSeconds += parts[0] * 60 + parts[1];
      }
    });
  });

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * CurriculumPanel component - Right column with course curriculum
 */
interface CurriculumPanelProps {
  sections: CurriculumSectionType[];
  isLoading?: boolean;
  activeLessonId?: string;
  onLessonSelect?: (lessonId: string) => void;
}

export function CurriculumPanel({ sections, isLoading = false, activeLessonId, onLessonSelect }: CurriculumPanelProps) {
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky positioning on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 64;
      setIsSticky(scrollPosition > headerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <CurriculumSkeleton />;
  }

  const totalLessons = sections.reduce((acc, s) => acc + s.lessons.length, 0);
  const totalDuration = calculateTotalDuration(sections);

  return (
    <div
      className={`
        bg-card rounded-xl border border-border p-4
        transition-all duration-300
        ${isSticky ? 'shadow-xl' : 'shadow-md'}
      `}
    >
      {/* Panel header */}
      <div className="mb-4 pb-4 border-b border-border">
        <h3 className="text-base font-semibold text-foreground mb-2">
          Nội dung khóa học
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tổng thời gian: {totalDuration}
          </span>
          <span>|</span>
          <span>{totalLessons} bài học</span>
        </div>
      </div>

      {/* Accordion */}
      <CurriculumAccordion
        sections={sections}
        defaultValue={sections[0]?.id}
        activeLessonId={activeLessonId}
        onLessonSelect={onLessonSelect}
      />
    </div>
  );
}
