import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Optional container max-width constraint */
  contained?: boolean;
}

/**
 * Section component - Provides consistent spacing for page sections
 *
 * @example
 * <Section>
 *   <SectionHeading>My Section</SectionHeading>
 *   <p>Content here...</p>
 * </Section>
 */
export function Section({
  children,
  className,
  contained = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        contained && 'container mx-auto px-4',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
