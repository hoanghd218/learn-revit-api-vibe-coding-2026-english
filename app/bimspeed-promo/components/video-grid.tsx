"use client";

interface Video {
  id: string;
  title: string;
  description?: string;
}

// YouTube video IDs from provided URLs
const VIDEOS: Video[] = [
  {
    id: "d_QFuKtWBmQ",
    title: "BIMSpped Pro Overview",
    description: "See how BIMSpped Pro transforms your Revit workflow",
  },
  {
    id: "1MNPVhubQto",
    title: "Quick Start Guide",
    description: "Get up and running with BIMSpped in minutes",
  },
  {
    id: "47mwUYIWPDQ",
    title: "Advanced Features",
    description: "Unlock the full potential of BIMSpped Pro",
  },
  {
    id: "ObR5vuVkbqY",
    title: "Customer Success Story",
    description: "How firms are saving hours with BIMSpped",
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
    </div>
  );
}
