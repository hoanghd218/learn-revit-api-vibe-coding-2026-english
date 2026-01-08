'use client';

import { Section, Container, SectionHeading, ProjectCard } from '@/components/bim';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Project {
  title: string;
  author: string;
  description: string;
  image: string;
  technologies: string[];
}

const studentProjects: Project[] = [
  {
    title: 'Auto-Reinforcement Tool',
    author: 'John Smith',
    description: 'Generates 3D rebar for beams in 5 seconds using intelligent pattern recognition',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop',
    technologies: ['C#', 'Revit API', 'WPF'],
  },
  {
    title: 'Smart Room Tagger',
    author: 'Jane Doe',
    description: 'Renumbers and tags 1000+ rooms based on configurable logic and spatial relationships',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    technologies: ['C#', '.NET', 'Revit API'],
  },
  {
    title: 'Sheet Exporter Pro',
    author: 'Mike Johnson',
    description: 'Batch exports sheets to PDF/DWG with custom naming conventions and folder structure',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    technologies: ['C#', 'Revit API', 'Excel'],
  },
  {
    title: 'MEP Clash Resolver',
    author: 'Sarah Chen',
    description: 'Automatically detects and resolves MEP clashes with intelligent rerouting algorithms',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
    technologies: ['C#', 'Revit API', 'Geometry'],
  },
  {
    title: 'Parametric Stair Generator',
    author: 'David Martinez',
    description: 'Creates code-compliant stairs with custom parameters and automatic railings',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
    technologies: ['C#', 'Revit API', 'Geometry', 'WPF'],
  },
  {
    title: 'BIM Data Dashboard',
    author: 'Emily Wilson',
    description: 'Real-time project analytics dashboard connecting Revit to PowerBI via API',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    technologies: ['C#', 'Revit API', 'SQL', 'REST API'],
  },
];

/**
 * AnimatedProjectCard - Project card wrapper with scroll animation
 */
function AnimatedProjectCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useScrollAnimation({
    animation: 'slideUp',
    duration: 700,
    delay,
    easing: 'easeOutExpo',
  });

  return (
    <div ref={ref as any}>
      {children}
    </div>
  );
}

/**
 * StudentProjectsSection - Showcase of real plugins built by students
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export function StudentProjectsSection() {
  const metricRef = useScrollAnimation({
    animation: 'fadeIn',
    duration: 1000,
    delay: 400,
    easing: 'easeOutQuad',
  });

  return (
    <Section id="projects" contained className="bg-section-dark">
      <Container>
        <SectionHeading level={2} subtitle="Real plugins built by students like you">
          Student Showcase
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studentProjects.map((project, index) => (
            <AnimatedProjectCard key={project.title} delay={index * 100}>
              <ProjectCard
                title={project.title}
                author={project.author}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
              />
            </AnimatedProjectCard>
          ))}
        </div>

        {/* Metric Highlight */}
        <div ref={metricRef as any} className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-coral-accent">
            98% of graduates built their first functional plugin within 1 week
          </p>
        </div>
      </Container>
    </Section>
  );
}
