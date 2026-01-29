'use client';

import { Container } from '@/components/bim';
import { Play } from 'lucide-react';

/**
 * VideoSection component - Course intro video for prospective students
 */
export function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-20 bg-muted/20">
      <Container size="xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-accent/10 text-coral-accent text-sm font-medium mb-4">
            <Play className="h-4 w-4" />
            <span>See the Course in Action</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Watch the Course Preview
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse of what you'll learn and see real BIM development workflows in action.
          </p>
        </div>

        {/* Video container - 16:9 aspect ratio */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-border bg-card shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/d_QFuKtWBmQ"
            title="Course Preview Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* CTA below video */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Ready to start your BIM Developer journey?{' '}
            <a href="#curriculum" className="text-coral-accent hover:underline font-medium">
              Check out the curriculum →
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
