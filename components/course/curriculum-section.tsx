'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Clock } from 'lucide-react';

import { LessonItem } from './lesson-item';
import type { CurriculumSection as CurriculumSectionType } from '@/types/course';

/**
 * Calculate section duration from lessons
 */
function calculateSectionDuration(lessons: CurriculumSectionType['lessons']): string {
  let totalSeconds = 0;

  lessons.forEach(lesson => {
    const parts = lesson.duration.split(':').map(Number);
    if (parts.length === 3) {
      totalSeconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      totalSeconds += parts[0] * 60 + parts[1];
    }
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
 * CurriculumSection component - Accordion section with lessons
 */
interface CurriculumSectionProps {
  section: CurriculumSectionType;
  defaultValue?: string;
  activeLessonId?: string;
  onLessonSelect?: (lessonId: string) => void;
}

export function CurriculumSection({ section, activeLessonId, onLessonSelect }: CurriculumSectionProps) {
  const sectionDuration = calculateSectionDuration(section.lessons);
  const lessonCount = section.lessons.length;

  return (
    <Accordion.Item
      value={section.id}
      className="border border-border rounded-lg overflow-hidden mb-3 last:mb-0 bg-muted/20"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between p-4 hover:bg-muted/50 transition-colors">
          <div className="flex-1 text-left">
            <span className="text-sm font-semibold text-foreground block mb-1">
              {section.title}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {sectionDuration}
              </span>
              <span>|</span>
              <span>bài học {lessonCount}</span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0 ml-2" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
        <div className="p-3 pt-0 space-y-1">
          {section.lessons.map((lesson, index) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              lessonNumber={index + 1}
              isActive={lesson.id === activeLessonId}
              onClick={() => onLessonSelect?.(lesson.id)}
            />
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
