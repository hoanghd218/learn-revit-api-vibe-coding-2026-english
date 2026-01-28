'use client';

import { Section, Container, SectionHeading, TechCard } from '@/components/bim';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Code2, Database, Box, Palette, FileCode, Terminal, GitBranch, Sparkles } from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const technologies: Technology[] = [
  {
    name: 'AI & Vibe Coding',
    icon: <Sparkles className="h-12 w-12 text-[#FFD700]" />,
    description: 'Leverage AI to generate Revit add-ins through natural language',
    color: '#FFD700',
  },
  {
    name: 'C#',
    icon: <Code2 className="h-12 w-12 text-[#239120]" />,
    description: 'Modern, type-safe programming language for .NET',
    color: '#239120',
  },
  {
    name: '.NET Framework',
    icon: <Box className="h-12 w-12 text-[#512BD4]" />,
    description: 'Powerful framework for building Windows applications',
    color: '#512BD4',
  },
  {
    name: 'Revit API',
    icon: <Database className="h-12 w-12 text-[#0696D7]" />,
    description: 'Access and manipulate Revit database programmatically',
    color: '#0696D7',
  },
  {
    name: 'WPF',
    icon: <Palette className="h-12 w-12 text-[#68217A]" />,
    description: 'Windows Presentation Foundation for professional UIs',
    color: '#68217A',
  },
  {
    name: 'XAML',
    icon: <FileCode className="h-12 w-12 text-[#0C54C2]" />,
    description: 'Markup language for designing modern interfaces',
    color: '#0C54C2',
  },
  {
    name: 'Visual Studio',
    icon: <Terminal className="h-12 w-12 text-[#5C2D91]" />,
    description: 'Industry-standard IDE for .NET development',
    color: '#5C2D91',
  },
  {
    name: 'Git',
    icon: <GitBranch className="h-12 w-12 text-[#F05032]" />,
    description: 'Version control for professional development workflow',
    color: '#F05032',
  },
];

/**
 * AnimatedTechCard - Tech card wrapper with scroll animation
 */
function AnimatedTechCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useScrollAnimation({
    animation: 'fadeIn',
    duration: 600,
    delay,
    easing: 'easeOutQuad',
  });

  return (
    <div ref={ref as any}>
      {children}
    </div>
  );
}

/**
 * TechStackSection - Technologies students will master
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export function TechStackSection() {
  return (
    <Section id="tech-stack" contained className="bg-section-dark">
      <Container>
        <SectionHeading
          level={2}
          subtitle="The ultimate AI-powered BIM development experience (Vibe Coding)"
        >
          AI-First BIM Technology Stack
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <AnimatedTechCard key={tech.name} delay={index * 80}>
              <TechCard
                name={tech.name}
                logo={tech.icon}
                description={tech.description}
              />
            </AnimatedTechCard>
          ))}
        </div>

        <div className="mt-16 space-y-12">
          {/* Industry Standard Badge */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic mb-4">
              "Master the tools used at the world's leading firms"
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-bold text-xl text-foreground">AUTODESK</span>
              <span className="font-bold text-xl text-foreground">THORNTON TOMASETTI</span>
              <span className="font-bold text-xl text-foreground">KPF</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-border" />
              Industry Standard Workflow
              <span className="h-px w-8 bg-border" />
            </p>
          </div>

          {/* Vibe Coding Highlight Card */}
          <div className="relative group overflow-hidden rounded-2xl border border-coral-accent/20 bg-linear-to-br from-section-light/50 to-section-dark p-8 md:p-12 text-center max-w-4xl mx-auto transition-all duration-300 hover:border-coral-accent/40 hover:shadow-2xl hover:shadow-coral-accent/5">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles className="h-24 w-24 text-coral-accent" />
            </div>

            <p className="text-2xl font-bold text-foreground mb-4">
              Don't just code. <span className="text-coral-accent italic">Vibe.</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This course is built for the <span className="font-bold text-foreground">AI era</span>.
              We'll show you how to leverage <span className="font-semibold text-foreground underline decoration-coral-accent/30">AI agents</span> to
              automate your workflow, generate high-quality code, and build professional Revit add-ins
              <span className="italic block mt-2 text-coral-accent">even if you've never written a line of code before.</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
