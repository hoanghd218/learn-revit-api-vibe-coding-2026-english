import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size variant for max-width */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Container component - Max-width wrapper with responsive padding
 *
 * @example
 * <Container size="lg">
 *   <h1>Content</h1>
 * </Container>
 */
export function Container({
  children,
  className,
  size = 'xl',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
