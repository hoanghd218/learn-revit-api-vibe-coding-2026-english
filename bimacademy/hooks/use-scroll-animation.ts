import { useEffect, useRef } from 'react';

export interface ScrollAnimationOptions {
  /**
   * Animation type to apply when element enters viewport
   */
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn';

  /**
   * Duration of animation in milliseconds
   * @default 800
   */
  duration?: number;

  /**
   * Delay before animation starts in milliseconds
   * @default 0
   */
  delay?: number;

  /**
   * Easing function for animation
   * @default 'cubic-bezier(0.4, 0, 0.2, 1)'
   */
  easing?: string;

  /**
   * Threshold for intersection observer (0-1)
   * @default 0.1
   */
  threshold?: number;

  /**
   * Whether to animate only once or every time element enters viewport
   * @default true
   */
  once?: boolean;
}

/**
 * Hook to add scroll-triggered entrance animations to elements
 * Uses Intersection Observer API with CSS transitions for optimal performance
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const {
    animation = 'fadeIn',
    duration = 800,
    delay = 0,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    threshold = 0.1,
    once = true,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Get animation properties based on type
    const getAnimationStyles = () => {
      switch (animation) {
        case 'fadeIn':
          return { opacity: 0 };
        case 'slideUp':
          return { opacity: 0, transform: 'translateY(50px)' };
        case 'slideDown':
          return { opacity: 0, transform: 'translateY(-50px)' };
        case 'slideLeft':
          return { opacity: 0, transform: 'translateX(50px)' };
        case 'slideRight':
          return { opacity: 0, transform: 'translateX(-50px)' };
        case 'scaleIn':
          return { opacity: 0, transform: 'scale(0.8)' };
        default:
          return { opacity: 0 };
      }
    };

    // Set initial state
    const initialStyles = getAnimationStyles();
    Object.assign(element.style, initialStyles);

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Skip if already animated and once is true
            if (once && hasAnimated.current) return;

            // Apply animation using CSS transitions
            element.style.transition = `all ${duration}ms ${easing} ${delay}ms`;
            element.style.opacity = '1';
            element.style.transform = 'translateX(0) translateY(0) scale(1)';

            hasAnimated.current = true;

            // Unobserve if once is true
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            // Reset animation if element leaves viewport and once is false
            const resetStyles = getAnimationStyles();
            Object.assign(element.style, resetStyles);
            element.style.transition = 'none';
            hasAnimated.current = false;
          }
        });
      },
      { threshold }
    );

    // Start observing
    observer.observe(element);

    // Cleanup
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [animation, duration, delay, easing, threshold, once]);

  return elementRef;
}
