import { Clock, User } from 'lucide-react';

import type { Course } from '@/types/course';

/**
 * CourseHeader component - Title and metadata row below video
 * Enhanced styling matching the reference design
 */
interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="space-y-4">
      {/* Course title */}
      <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
        {course.title}
      </h1>

      {/* Metadata row */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        {/* Instructor with avatar */}
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Giảng viên:</span>
          <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-coral-accent to-bronze-accent flex items-center justify-center">
              <User className="h-3 w-3 text-white" />
            </div>
            <span className="font-medium text-foreground">{course.instructor}</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>

        {/* Premium badge */}
        {course.isPremium && (
          <span className="px-3 py-1 rounded-full bg-coral-accent/20 text-coral-accent text-xs font-semibold border border-coral-accent/40">
            Premium
          </span>
        )}
      </div>
    </div>
  );
}
