'use client';

import { useState, Fragment } from 'react';
import { Section, Container, SectionHeading } from '@/components/bim';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ChevronRight, Code, Database, Palette, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

/**
 * CurriculumSection - 4-phase learning path
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */

interface CurriculumPhase {
  phase: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  glowClass: string;
  learningOutcomes: string[];
  duration: string;
}

const curriculumPhases: CurriculumPhase[] = [
  {
    phase: 1,
    title: 'C# Foundation',
    subtitle: 'For Engineers',
    icon: Code,
    color: 'from-coral-accent to-[#D97757]/80',
    glowClass: 'glow-coral',
    duration: '1 week',
    learningOutcomes: [
      'Variables, loops, and conditionals explained for non-CS backgrounds',
      'Object-Oriented Programming: Classes, inheritance, interfaces',
      'LINQ queries for data manipulation',
      'Error handling and debugging techniques',
      'Hands-on: Build a file renamer tool',
    ],
  },
  {
    phase: 2,
    title: 'Revit API Mechanics',
    subtitle: 'Database & Transactions',
    icon: Database,
    color: 'from-bronze-accent to-[#D4A27F]/80',
    glowClass: 'glow-bronze',
    duration: '1 week',
    learningOutcomes: [
      'Understanding Revit database structure and element hierarchy',
      'Filtered element collectors: Find any element fast',
      'Transactions: Modify the model safely',
      'Parameters: Read, write, and create custom properties',
      'Hands-on: Auto-tag 500+ rooms in 10 seconds',
    ],
  },
  {
    phase: 3,
    title: 'Professional UI/UX',
    subtitle: 'WPF & XAML',
    icon: Palette,
    color: 'from-[#4EC9B0] to-[#4EC9B0]/80',
    glowClass: 'glow-green',
    duration: '1 week',
    learningOutcomes: [
      'WPF fundamentals: Windows, controls, layouts',
      'XAML markup for professional interfaces',
      'MVVM pattern: Separate logic from UI',
      'Data binding and commands',
      'Hands-on: Build a configuration dialog',
    ],
  },
  {
    phase: 4,
    title: 'Advanced BIM Apps',
    subtitle: 'Production-Ready',
    icon: Rocket,
    color: 'from-coral-accent to-bronze-accent',
    glowClass: 'glow-coral',
    duration: '1 week',
    learningOutcomes: [
      'External Events: Keep UI responsive during long operations',
      'Modeless dialogs: Work while dialog stays open',
      'Excel integration: Import/export project data',
      'Database connections: SQL, MongoDB',
      'Deployment: Package and distribute your plugins',
      'Hands-on: Build a complete BIM management system',
    ],
  },
];

/**
 * AnimatedPhaseCard - Phase card wrapper with scroll animation
 */
function AnimatedPhaseCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useScrollAnimation({
    animation: 'scaleIn',
    duration: 600,
    delay,
    easing: 'easeOutBack',
  });

  return (
    <div ref={ref as any}>
      {children}
    </div>
  );
}

export function CurriculumSection() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <Section id="curriculum" contained className="bg-section-dark">
      <Container>
        <SectionHeading level={2} subtitle="4-phase learning path from beginner to professional">
          Curriculum Roadmap
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {curriculumPhases.map((phase) => {
            const Icon = phase.icon;
            const isHovered = hoveredPhase === phase.phase;

            return (
              <AnimatedPhaseCard key={phase.phase} delay={(phase.phase - 1) * 150}>
              <Card
                onMouseEnter={() => setHoveredPhase(phase.phase)}
                onMouseLeave={() => setHoveredPhase(null)}
                className={cn(
                  'group relative overflow-hidden transition-all duration-300',
                  'border-border/50 hover:border-coral-accent',
                  'cursor-pointer hover-lift hover-border-coral',
                  isHovered && phase.glowClass
                )}
              >
                {/* Phase Number Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    className={cn(
                      'bg-linear-to-br font-bold text-lg px-3 py-1',
                      phase.color,
                      'text-background'
                    )}
                  >
                    {phase.phase}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon
                      className={cn(
                        'h-10 w-10 transition-all duration-300',
                        isHovered ? 'text-coral-accent scale-110' : 'text-muted-foreground'
                      )}
                    />
                  </div>

                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                  <CardDescription className="text-sm">{phase.subtitle}</CardDescription>

                  {/* Duration */}
                  <div className="pt-2">
                    <Badge variant="outline" className="text-xs">
                      {phase.duration}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Learning Outcomes - Revealed on Hover */}
                  <div
                    className={cn(
                      'transition-all duration-300 overflow-hidden',
                      isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="space-y-2 pt-2 border-t border-border/50">
                      <p className="text-xs font-semibold text-coral-accent mb-3">What You'll Learn:</p>
                      <ul className="space-y-2">
                        {phase.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <ChevronRight className="h-3 w-3 text-bronze-accent mt-0.5 flex-shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Prompt */}
                  {!isHovered && (
                    <div className="text-xs text-muted-foreground/60 mt-4 flex items-center gap-1">
                      <span>Hover to see details</span>
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  )}
                </CardContent>

                {/* Gradient Overlay on Hover */}
                <div
                  className={cn(
                    'absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-300 pointer-events-none',
                    phase.color,
                    isHovered && 'opacity-5'
                  )}
                />
              </Card>
              </AnimatedPhaseCard>
            );
          })}
        </div>

        {/* Progression Indicator */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Complete all 4 phases in just <span className="font-bold text-coral-accent">12 weeks</span>
          </p>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4].map((phase, index) => (
              <Fragment key={phase}>
                <div
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    hoveredPhase === phase ? 'bg-coral-accent' : 'bg-muted-foreground/50'
                  )}
                />
                {index < 3 && (
                  <ChevronRight
                    className="h-4 w-4 text-muted-foreground/50"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
