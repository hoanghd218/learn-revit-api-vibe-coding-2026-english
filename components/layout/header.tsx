'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/bim';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth/auth-context';
import { UserMenu } from './user-menu';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

/**
 * Header component - Sticky navigation with logo and authentication
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-background/80 backdrop-blur-md',
        'border-b border-border/40',
        'transition-all duration-200',
        scrolled && 'shadow-lg shadow-black/20',
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-bold text-coral-accent font-mono">
              &lt;/&gt;
            </span>
            <span className="text-lg font-bold text-gradient">
              BIM Developer
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-sm text-muted-foreground hover:text-coral-accent transition-colors"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-muted-foreground hover:text-coral-accent transition-colors"
            >
              Student Projects
            </button>
            <button
              onClick={() => scrollToSection('instructor')}
              className="text-sm text-muted-foreground hover:text-coral-accent transition-colors"
            >
              Instructor
            </button>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {isLoaded ? (
              isSignedIn ? (
                <UserMenu />
              ) : (
                <>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <Button asChild className="glow-coral" size="sm">
                    <Link href="/sign-up">Learn Now for Free</Link>
                  </Button>
                </>
              )
            ) : (
              // Loading state
              <div className="h-9 w-20 bg-muted/50 animate-pulse rounded-md" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
