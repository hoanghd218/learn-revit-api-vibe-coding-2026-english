'use client';

import { Section, Container, SectionHeading } from '@/components/bim';
import { cn } from '@/lib/utils';
import { CheckCircle2, ChevronRight } from 'lucide-react';

/**
 * LessonsList - Course content preview as a list
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */

interface LessonItem {
  number: number;
  title: string;
  duration: string;
  topics: string[];
}

const lessons: LessonItem[] = [
  {
    number: 1,
    title: 'Environment Setup',
    duration: '30 min',
    topics: ['Revit & Visual Studio', '.NET SDK configuration', 'First add-in template'],
  },
  {
    number: 2,
    title: 'C# Basics for BIM',
    duration: '2 hours',
    topics: ['Variables & loops', 'Classes & inheritance', 'LINQ queries'],
  },
  {
    number: 3,
    title: 'Revit API Fundamentals',
    duration: '3 hours',
    topics: ['Element hierarchy', 'Filtered collectors', 'Transactions & parameters'],
  },
  {
    number: 4,
    title: 'UI with WPF',
    duration: '2.5 hours',
    topics: ['XAML basics', 'MVVM pattern', 'Data binding'],
  },
  {
    number: 5,
    title: 'Creating Your First Add-in',
    duration: '4 hours',
    topics: ['End-to-end project', 'Deploy to team', 'Best practices'],
  },
];

export function LessonsList() {
  return (
    <Section id="lessons" className="bg-section-light">
      <Container>
        <SectionHeading
          level={2}
          subtitle="What you'll learn in the first 2 weeks"
        >
          Course Curriculum
        </SectionHeading>

        <div className="max-w-3xl mx-auto">
          {/* Lessons List - Left aligned with numbers */}
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <div
                key={lesson.number}
                className={cn(
                  'group relative flex items-start gap-4 p-4 rounded-lg',
                  'border border-border/40 bg-card/30',
                  'hover:border-coral-accent/50 hover:bg-card/50',
                  'transition-all duration-300 cursor-pointer',
                  'hover-lift'
                )}
              >
                {/* Number Badge - Coral Gradient */}
                <div
                  className={cn(
                    'flex-shrink-0 w-10 h-10 rounded-full',
                    'bg-linear-to-br from-coral-accent to-bronze-accent',
                    'flex items-center justify-center',
                    'text-background font-bold text-lg',
                    'shadow-lg shadow-coral-accent/20',
                    'group-hover:scale-110 transition-transform duration-300'
                  )}
                >
                  {lesson.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-coral-accent transition-colors">
                      {lesson.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {lesson.duration}
                    </span>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {lesson.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3 w-3 text-coral-accent/60" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Icon */}
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50 group-hover:text-coral-accent group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">12 weeks</span> total program •{' '}
              <span className="text-coral-accent">5 real-world projects</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
