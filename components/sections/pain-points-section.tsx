'use client';

import { Section, Container, SectionHeading } from '@/components/bim';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { X, ArrowRight, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

/**
 * PainPointsSection - Before/After comparison demonstrating transformation
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
/**
 * AnimatedCard - Card wrapper with scroll animation
 */
function AnimatedCard({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const ref = useScrollAnimation({
    animation: 'slideUp',
    duration: 800,
    delay,
    easing: 'easeOutExpo',
  });

  return (
    <div ref={ref as any} className={className}>
      {children}
    </div>
  );
}

export function PainPointsSection() {
  const painPoints = [
    {
      problem: 'Manual Repetition',
      oldWay: 'Clicking through 1000+ elements one by one. 8 hours per project.',
      newWay: 'Write a 50-line C# script. Process 1000+ elements in 5 seconds.',
      metric: '96x faster',
    },
    {
      problem: 'Human Error',
      oldWay: 'Copy-paste mistakes. Inconsistent naming. Missing tags.',
      newWay: 'Bulletproof logic with validation. Zero mistakes, every time.',
      metric: '100% accuracy',
    },
    {
      problem: 'Career Ceiling',
      oldWay: '$50K-$70K BIM Coordinator. Clicking buttons all day.',
      newWay: '$80K-$120K BIM Developer. Building tools that scale.',
      metric: '2x salary',
    },
    {
      problem: 'Impossible Requests',
      oldWay: '"Can you update 500 families?" Sorry, that takes 2 weeks.',
      newWay: '"Done. Ran my script in 30 seconds." You become indispensable.',
      metric: 'Unlimited value',
    },
  ];

  return (
    <Section id="pain-points" contained className="bg-section-light">
      <Container>
        <SectionHeading
          level={2}
          subtitle="Stop wasting time clicking. Start building solutions that scale."
        >
          From BIM User to BIM Developer
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {painPoints.map((point, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <Card
                className={cn(
                  'group relative overflow-hidden h-full',
                  'border-border/50 hover:border-coral-accent',
                  'transition-all duration-300 hover-lift hover:glow-coral'
                )}
              >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/50">
                    Problem
                  </Badge>
                  <Zap className="h-4 w-4 text-coral-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl">{point.problem}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Old Way */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <X className="h-4 w-4 text-destructive" />
                    <span>The Old Way</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">{point.oldWay}</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-coral-accent" />
                </div>

                {/* New Way */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Zap className="h-4 w-4 text-[#4EC9B0]" />
                    <span>The Developer Way</span>
                  </div>
                  <p className="text-sm text-foreground pl-6">{point.newWay}</p>
                </div>

                {/* Metric Badge */}
                <div className="pt-4 border-t border-border/50">
                  <Badge className="bg-coral-accent/20 text-coral-accent border-coral-accent/50 font-bold">
                    {point.metric}
                  </Badge>
                </div>
              </CardContent>
            </Card>
            </AnimatedCard>
          ))}
        </div>

        {/* Call-to-action statement */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            This isn't just about learning to code.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            It's about <span className="text-bronze-accent font-semibold">multiplying your impact</span>,{' '}
            <span className="text-coral-accent font-semibold">doubling your salary</span>, and becoming{' '}
            <span className="text-[#4EC9B0] font-semibold">irreplaceable</span> in your organization.
          </p>
        </div>
      </Container>
    </Section>
  );
}
