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
    title: 'Beam Rebar Automator',
    author: 'Duc Hoang',
    description: 'Generates complex 3D reinforcement patterns for reinforced concrete beams in seconds.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    technologies: ['C#', 'Revit API', 'WPF'],
  },
  {
    title: 'Column Rebar Tool',
    author: 'Minh Quan',
    description: 'Automatic placement of longitudinal and stirrup bars for various column profiles.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    technologies: ['C#', '.NET', 'Revit API'],
  },
  {
    title: 'QTO for Architect',
    author: 'Anh Tuan',
    description: 'Precise Quantity Take-Off tool for architectural elements with custom reporting exports.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
    technologies: ['C#', 'Revit API', 'Excel'],
  },
  {
    title: 'Room Finish Automator',
    author: 'Thu Ha',
    description: 'Automatically calculates and generates room boundary elements and finish schedules.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    technologies: ['C#', 'Revit API', 'Geometry'],
  },
  {
    title: 'Advanced MEP Tool',
    author: 'Thanh Tung',
    description: 'Intelligent routing and connection tool for HVAC and piping systems.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    technologies: ['C#', 'Revit API', 'Automation'],
  },
  {
    title: 'BIM Data Dashboard',
    author: 'Emily Wilson',
    description: 'Real-time project analytics dashboard connecting Revit to PowerBI via API.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    technologies: ['C#', 'Revit API', 'REST API'],
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
    <Section id="projects" contained className="bg-muted">
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
          <p className="text-2xl md:text-3xl font-bold text-[var(--orange-red-accent)]">
            98% of graduates built their first functional plugin within 1 week
          </p>
        </div>
      </Container>
    </Section>
  );
}
