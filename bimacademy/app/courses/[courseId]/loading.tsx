import { CurriculumSkeleton } from '@/components/course/curriculum-skeleton';
import { VideoPreviewSkeleton } from '@/components/course/video-preview-skeleton';

/**
 * Loading state for course detail page
 */
export default function CourseLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 2-column skeleton layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        {/* Left column */}
        <div className="space-y-6">
          <VideoPreviewSkeleton />
          {/* Title skeleton */}
          <div className="space-y-4 animate-pulse">
            <div className="h-8 w-3/4 bg-muted rounded" />
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-muted" />
              <div className="h-4 w-32 bg-muted rounded" />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:sticky lg:top-4 lg:self-start">
          <CurriculumSkeleton />
        </div>
      </div>
    </div>
  );
}
