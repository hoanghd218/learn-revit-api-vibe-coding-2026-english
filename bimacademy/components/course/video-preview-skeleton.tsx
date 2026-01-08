/**
 * VideoPreviewSkeleton - Loading skeleton for video preview component
 */
export function VideoPreviewSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* 16:9 video container */}
      <div className="w-full aspect-video rounded-xl bg-[#0F172A]" />

      {/* Title skeleton */}
      <div className="space-y-3">
        <div className="h-8 w-3/4 bg-muted rounded" />
        <div className="h-6 w-1/2 bg-muted rounded" />
      </div>
    </div>
  );
}
