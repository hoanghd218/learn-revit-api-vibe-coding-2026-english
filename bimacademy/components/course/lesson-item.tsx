import { Clock, Lock, Play } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Lesson } from '@/types/course';

/**
 * LessonItem component - Individual lesson row in curriculum
 * Based on reference design with lesson number, cleaner layout
 */
interface LessonItemProps {
  lesson: Lesson;
  lessonNumber?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function LessonItem({ lesson, lessonNumber, isActive = false, onClick }: LessonItemProps) {
  // Format duration for display (e.g., "00:05:00" -> "00:05:00")
  const formattedDuration = lesson.duration;

  return (
    <div
      onClick={!lesson.isLocked ? onClick : undefined}
      className={`
        group flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer
        ${isActive
          ? 'bg-coral-accent/10 border border-coral-accent/30'
          : 'hover:bg-muted/50 border border-transparent hover:border-border'
        }
        ${lesson.isLocked ? 'opacity-70 cursor-not-allowed' : ''}
      `}
    >
      {/* Lesson number or play indicator */}
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-medium
        ${isActive
          ? 'bg-coral-accent text-white'
          : lesson.isLocked
            ? 'bg-muted text-muted-foreground'
            : 'bg-muted/50 text-foreground group-hover:bg-coral-accent/20 group-hover:text-coral-accent'
        }
      `}>
        {lesson.isLocked ? (
          <Lock className="h-3.5 w-3.5" />
        ) : isActive ? (
          <Play className="h-3.5 w-3.5 fill-current" />
        ) : (
          lessonNumber || <Play className="h-3.5 w-3.5" />
        )}
      </div>

      {/* Lesson info */}
      <div className="flex-1 min-w-0">
        <h4 className={`
          text-sm font-medium truncate transition-colors
          ${isActive ? 'text-coral-accent' : 'text-foreground group-hover:text-coral-accent'}
          ${lesson.isLocked ? 'text-muted-foreground' : ''}
        `}>
          {lesson.title}
        </h4>
      </div>

      {/* Badge */}
      {lesson.badge && !lesson.isLocked && (
        <Badge
          variant="secondary"
          className={`
            text-xs px-2 py-0.5 h-5 shrink-0
            ${lesson.badge === 'pro' ? 'bg-coral-accent text-white border-0' : ''}
            ${lesson.badge === 'free' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : ''}
            ${lesson.badge === 'premium' ? 'bg-gold-accent/20 text-gold-accent border border-gold-accent/30' : ''}
          `}
        >
          {lesson.badge === 'pro' ? 'PRO' : lesson.badge === 'free' ? 'Miễn phí' : 'PREMIUM'}
        </Badge>
      )}

      {/* Duration */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
        <Clock className="h-3 w-3" />
        <span>{formattedDuration}</span>
      </div>
    </div>
  );
}
