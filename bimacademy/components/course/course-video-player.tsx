'use client';

import { ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';
import type { Course } from '@/types/course';

import ReactPlayer from 'react-player'

/**
 * Extract YouTube video ID from various YouTube URL formats
 */
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtube\.com\/embed\/)([^?]+)/,
    /(?:youtu\.be\/)([^?]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  return null;
}

/**
 * VideoPreview component - Dynamic video player for YouTube and HLS
 * Used in course detail page left column
 */
interface VideoPreviewProps {
  course: Course;
  videoUrl?: string; // Optional override
}

export function VideoPreview({ course, videoUrl }: VideoPreviewProps) {
  // Use passed videoUrl or fall back to course default
  const targetUrl = videoUrl || course.videoUrl;
  const videoId = getYouTubeVideoId(targetUrl);

  const normalizedUrl = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : targetUrl;

  const isHls = targetUrl?.includes('.m3u8') || targetUrl?.includes('playlist.m3u8');

  return (
    <div className="space-y-3">
      {/* Video container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0F172A] shadow-lg ring-1 ring-white/10">
        <div className="absolute inset-0 w-full h-full">
          <ReactPlayer
            src={normalizedUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={false}
            pip={false}
            style={{ position: 'absolute', top: 0, left: 0 }}
            onError={(e: any) => console.error("Video player error:", e)}
          />
        </div>
      </div>

      {/* Video Source Info */}
      <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Xem trên</span>
          <a
            href={normalizedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-foreground hover:text-coral-accent transition-colors"
          >
            {videoId ? (
              <>
                <svg className="h-4 w-4 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-medium">YouTube</span>
              </>
            ) : isHls ? (
              <>
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-medium">HLS Stream</span>
              </>
            ) : (
              <span className="font-medium">Direct Link</span>
            )}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {isHls && (
          <div className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">
            HLS HD
          </div>
        )}
      </div>
    </div>
  );
}
