import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TechCardProps {
  /** Technology name */
  name: string;
  /** Logo image URL or JSX element */
  logo: string | React.ReactNode;
  /** Optional description */
  description?: string;
  /** Additional className for customization */
  className?: string;
}

/**
 * TechCard component - Displays technology with logo and name
 * Extends shadcn Card with hover effects and IDE styling
 *
 * @example
 * <TechCard
 *   name="Visual Studio 2022"
 *   logo="/logos/vs2022.svg"
 *   description="Professional IDE"
 * />
 */
export function TechCard({ name, logo, description, className }: TechCardProps) {
  return (
    <Card
      className={cn(
        'group hover-lift',
        'border-border/50 hover:border-coral-accent',
        'transition-all duration-200',
        'hover:glow-coral',
        className
      )}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        {/* Logo */}
        <div className="mb-4 grayscale group-hover:grayscale-0 transition-all duration-200 group-hover:scale-110">
          {typeof logo === 'string' ? (
            <img src={logo} alt={`${name} logo`} className="h-16 w-16 object-contain" />
          ) : (
            logo
          )}
        </div>

        {/* Name */}
        <h3 className="font-medium text-sm text-foreground">{name}</h3>

        {/* Optional description */}
        {description && (
          <p className="mt-2 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
