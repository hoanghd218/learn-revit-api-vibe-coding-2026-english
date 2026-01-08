/**
 * CurriculumSkeleton component - Loading skeleton for curriculum panel
 */
export function CurriculumSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="h-6 w-32 bg-muted rounded" />
        <div className="h-4 w-24 bg-muted rounded" />
      </div>

      {/* Section skeletons */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-4 bg-muted/30">
            <div className="h-4 w-3/4 bg-muted rounded" />
          </div>
          {/* Lessons */}
          <div className="p-3 space-y-2">
            {[1, 2].map((lesson) => (
              <div key={lesson} className="flex items-start gap-3 p-3">
                <div className="w-20 h-12 bg-muted rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-3 w-24 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
