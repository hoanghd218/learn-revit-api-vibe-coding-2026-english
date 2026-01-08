'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { CurriculumSection } from './curriculum-section';
import type { CurriculumSection as CurriculumSectionType } from '@/types/course';

/**
 * CurriculumAccordion component - Root accordion for curriculum sections
 * Uses single expand mode per validated decision
 */
interface CurriculumAccordionProps {
  sections: CurriculumSectionType[];
  defaultValue?: string;
  activeLessonId?: string;
  onLessonSelect?: (lessonId: string) => void;
}

export function CurriculumAccordion({ sections, defaultValue, activeLessonId, onLessonSelect }: CurriculumAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      defaultValue={defaultValue}
      collapsible
      className="space-y-3"
    >
      {sections.map((section) => (
        <CurriculumSection
          key={section.id}
          section={section}
          defaultValue={defaultValue}
          activeLessonId={activeLessonId}
          onLessonSelect={onLessonSelect}
        />
      ))}
    </Accordion.Root>
  );
}
