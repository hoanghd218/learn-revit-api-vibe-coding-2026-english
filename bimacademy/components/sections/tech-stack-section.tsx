'use client';

import { Section, Container, SectionHeading, TechCard } from '@/components/bim';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Code2, Database, Box, Palette, FileCode, Terminal, GitBranch } from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const technologies: Technology[] = [
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
          subtitle="Master the complete BIM development stack"
        >
          Professional Technology Stack
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

        {/* Industry Standard Badge */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn the <span className="font-bold text-coral-accent">exact same tools</span> used by
            professional BIM developers at{' '}
            <span className="font-semibold text-foreground">
              Autodesk, Thornton Tomasetti, and Kohn Pedersen Fox
            </span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
