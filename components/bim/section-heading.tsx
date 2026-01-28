import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level */
  level?: 1 | 2 | 3;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
}

/**
 * SectionHeading component - Consistent typography for section titles
 *
 * @example
 * <SectionHeading level={2} subtitle="Learn from the best">
 *   Master Revit API
 * </SectionHeading>
 */
export function SectionHeading({
  children,
  className,
  level = 2,
  subtitle,
  align = 'center',
  ...props
}: SectionHeadingProps) {
  const Tag = `h${level}` as const;

  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-8 md:mb-12', alignClasses[align])}>
      <Tag
        className={cn(
          'font-bold tracking-tight',
          'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent',
          sizeClasses[level],
          className
        )}
        {...props}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
