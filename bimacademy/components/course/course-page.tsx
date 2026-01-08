'use client';

import { useState, useEffect } from 'react';

import { VideoPreview } from './course-video-player';

import { CourseHeader } from './course-header';
import { CurriculumPanel } from './curriculum-panel';
import type { Course } from '@/types/course';
import { Header } from '@/components/layout';

/**
 * CoursePage component - Main course detail page layout
 * 2-column layout: 70% video + header, 30% sticky curriculum
 * Enhanced with responsive breakpoints and improved spacing
 */
interface CoursePageProps {
  course: Course;
}

export function CoursePage({ course }: CoursePageProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [activeLessonId, setActiveLessonId] = useState<string | undefined>(undefined);

  // Find active lesson object
  const activeLesson = activeLessonId
    ? course.curriculum.flatMap(s => s.lessons).find(l => l.id === activeLessonId)
    : undefined;

  // Handle sticky state for scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 64;
      setIsSticky(scrollPosition > headerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLessonSelect = (lessonId: string) => {
    setActiveLessonId(lessonId);
    // Optional: scroll to top of video
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-10">
            {/* Left column - Video and header/content */}
            <div className="space-y-5 md:space-y-7">
              {activeLesson?.videoUrl}
              <VideoPreview
                course={course}
                videoUrl={activeLesson?.videoUrl}
              />



              {activeLesson ? (
                // Lesson Content View
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="border-b border-border pb-4">
                    <div className="flex items-center gap-2 text-sm text-coral-accent font-medium mb-2">
                      <span>Đang xem bài học</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                      {activeLesson.title}
                    </h1>
                  </div>

                  {activeLesson.content ? (
                    <div
                      className="prose prose-invert max-w-none 
                        prose-headings:text-foreground prose-p:text-muted-foreground 
                        prose-a:text-coral-accent prose-strong:text-foreground
                        prose-ul:text-muted-foreground prose-li:marker:text-coral-accent"
                      dangerouslySetInnerHTML={{ __html: activeLesson.content }}
                    />
                  ) : (
                    <p className="text-muted-foreground italic">Nội dung bài học đang được cập nhật.</p>
                  )}

                  <button
                    onClick={() => setActiveLessonId(undefined)}
                    className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
                  >
                    ← Quay lại thông tin khóa học
                  </button>
                </div>
              ) : (
                // Default Course Info View
                <CourseHeader course={course} />
              )}
            </div>

            {/* Right column - Curriculum panel (sticky, shows after content on mobile) */}
            <div className="lg:sticky lg:top-24 lg:self-start order-first lg:order-last">
              <div className={`
                transition-all duration-300
                ${isSticky ? 'lg:shadow-lg lg:rounded-xl' : ''}
              `}>
                <CurriculumPanel
                  sections={course.curriculum}
                  activeLessonId={activeLessonId}
                  onLessonSelect={handleLessonSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
