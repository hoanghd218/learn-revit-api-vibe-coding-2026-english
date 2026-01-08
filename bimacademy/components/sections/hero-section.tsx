import { Button } from '@/components/ui/button';
import { Container } from '@/components/bim';
import { CodeAnimation } from './code-animation';
import { ArrowRight, Play } from 'lucide-react';

/**
 * HeroSection component - Above-the-fold hero with headline, CTAs, and code animation
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative py-16 md:py-20 min-h-[70vh] flex items-center">
      {/* Background gradient - subtle coral/bronze glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[rgba(217,119,87,0.08)] via-background to-[rgba(212,162,127,0.05)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(217,119,87,0.12)] via-transparent to-transparent -z-10" />

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline with gradient */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="block">Master Revit API &</span>
                <span className="block text-gradient">
                  Build Powerful BIM Apps With AI
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Create applications in <span className="text-foreground font-semibold">minutes</span>, not days, months, or years—by leveraging the power of <span className="text-coral-accent font-semibold">AI</span>.
              </p>
            </div>

            {/* CTAs - coral glow on primary */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 glow-coral group"
                onClick={() => scrollToSection('curriculum')}
              >
                Learn now for free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-border hover:border-coral-accent hover:bg-muted/50"
                onClick={() => scrollToSection('projects')}
              >
                <Play className="mr-2 h-5 w-5" />
                See the projects
              </Button>
            </div>

            {/* Trust indicators - coral/bronze dots */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#4EC9B0]" />
                <span>98% success rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-coral-accent" />
                <span>500+ graduates</span>
              </div>
            </div>
          </div>

          {/* Right: Code Animation */}
          <div className="hidden lg:block">
            <CodeAnimation />
          </div>
        </div>
      </Container>
    </section>
  );
}
