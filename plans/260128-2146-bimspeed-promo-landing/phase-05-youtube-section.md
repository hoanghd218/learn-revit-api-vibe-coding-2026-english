# Phase 05: YouTube Videos Section

## Objective
Create a responsive grid section to showcase YouTube videos of BIMSpped Revit plugins.

## Implementation

### Create Video Grid Component: `app/bimspeed-promo/components/video-grid.tsx`

```tsx
"use client";

import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description?: string;
}

// Placeholder for YouTube video URLs - to be provided by user
// Format: just the video ID from YouTube URL (e.g., "dQw4w9WgXcQ")
const VIDEOS: Video[] = [
  {
    id: "VIDEO_ID_1",
    title: "BIMSpped Pro Overview",
    description: "See how BIMSpped Pro transforms your Revit workflow",
  },
  {
    id: "VIDEO_ID_2",
    title: "Quick Start Guide",
    description: "Get up and running with BIMSpped in minutes",
  },
  {
    id: "VIDEO_ID_3",
    title: "Advanced Features",
    description: "Unlock the full potential of BIMSpped Pro",
  },
  {
    id: "VIDEO_ID_4",
    title: "Customer Success Story",
    description: "How firms are saving hours with BIMSpped",
  },
  {
    id: "VIDEO_ID_5",
    title: "Plugin Tutorial",
    description: "Step-by-step guide to using key features",
  },
  {
    id: "VIDEO_ID_6",
    title: "Tips & Tricks",
    description: "Pro tips for maximizing productivity",
  },
];

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export function VideoGrid() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          See <span className="text-gradient">BIMSpped</span> in Action
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Watch these videos to learn how BIMSpped Pro can revolutionize your
          Revit workflow and boost your productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VIDEOS.map((video) => (
          <div
            key={video.id}
            className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
          >
            <YouTubeEmbed videoId={video.id} title={video.title} />
            <div className="p-4">
              <h3 className="font-semibold mb-1">{video.title}</h3>
              {video.description && (
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder notice for user */}
      <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-dashed border-border">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Note:</strong> Replace VIDEO_ID placeholders in
          `app/bimspeed-promo/components/video-grid.tsx` with actual YouTube
          video IDs.
        </p>
      </div>
    </div>
  );
}
```

## Key Points

1. **Responsive Grid**: 1 column mobile, 2 columns tablet, 3 columns desktop
2. **YouTube Embed**: Uses standard YouTube iframe embed
3. **Video Data**: Array of objects with id, title, description
4. **Placeholder IDs**: Currently has VIDEO_ID_1 through VIDEO_ID_6 placeholders
5. **User Action Required**: Replace placeholder IDs with actual YouTube video IDs

## How to Get YouTube Video IDs

From a YouTube URL like `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
the video ID is: `dQw4w9WgXcQ`

## Next Phase
After this phase is complete, proceed to Phase 06 for final styling and polish.
