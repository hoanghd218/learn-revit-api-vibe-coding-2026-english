import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  /** Project title */
  title: string;
  /** Student/creator name */
  author: string;
  /** Project description */
  description: string;
  /** Screenshot or image URL */
  image: string;
  /** Technologies used */
  technologies: string[];
  /** Additional className */
  className?: string;
}

/**
 * ProjectCard component - Showcases student project with screenshot
 * Extends shadcn Card with image background and overlay
 *
 * @example
 * <ProjectCard
 *   title="Auto-Reinforcement Tool"
 *   author="John Smith"
 *   description="Generates 3D rebar for beams in 5 seconds"
 *   image="/projects/rebar-tool.png"
 *   technologies={['C#', 'Revit API', 'WPF']}
 * />
 */
export function ProjectCard({
  title,
  author,
  description,
  image,
  technologies,
  className,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group overflow-hidden hover-lift',
        'border-border/50 hover:border-coral-accent',
        'transition-all duration-200',
        'hover:glow-coral',
        className
      )}
    >
      {/* Project Screenshot */}
      <div className="relative h-48 overflow-hidden bg-popover">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">by {author}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
