'use client';

import { Section, Container, SectionHeading } from '@/components/bim';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Check, Star, Zap, MessageCircle } from 'lucide-react';

interface PricingTier {
  name: string;
  description: string;
  price: number;
  period: string;
  badge?: string;
  badgeVariant?: 'primary' | 'accent';
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon: React.ElementType;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Self-Paced',
    description: 'Learn at your own speed',
    price: 497,
    period: 'lifetime',
    features: [
      'Lifetime access to all video content',
      '50+ hours of structured curriculum',
      'Source code library (50+ working examples)',
      'Private Discord community access',
      'Course updates & new content forever',
      'Certificate of completion',
      'Mobile & desktop access',
    ],
    cta: 'Enroll Now',
    icon: Star,
  },
  {
    name: 'Mentorship',
    description: 'Get personalized guidance',
    price: 997,
    period: 'lifetime',
    badge: 'Most Popular',
    badgeVariant: 'primary',
    features: [
      'Everything in Self-Paced, PLUS:',
      'Weekly 1-on-1 code review sessions (4 weeks)',
      'Direct Slack access to instructor',
      'Career coaching & resume optimization',
      'Job interview preparation',
      'Portfolio project guidance',
      'Priority support (24hr response)',
      'Exclusive alumni network access',
    ],
    cta: 'Enroll with Mentorship',
    highlighted: true,
    icon: Zap,
  },
];

/**
 * AnimatedPricingCard - Pricing card wrapper with scroll animation
 */
function AnimatedPricingCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useScrollAnimation({
    animation: 'scaleIn',
    duration: 700,
    delay,
    easing: 'easeOutBack',
  });

  return (
    <div ref={ref as any}>
      {children}
    </div>
  );
}

/**
 * PricingSection - Course pricing tiers with feature comparison
 * Clear value proposition with highlighted recommended tier
 */
export function PricingSection() {
  return (
    <Section id="pricing" contained className="bg-card/30">
      <Container>
        <SectionHeading level={2} subtitle="Choose your learning path">
          Invest in Your Developer Future
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <AnimatedPricingCard key={tier.name} delay={index * 150}>
                <Card
                  className={cn(
                    'relative h-full flex flex-col transition-all duration-300',
                    tier.highlighted
                      ? 'border-primary/50 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:border-primary hover-lift'
                      : 'border-border/50 hover:border-accent/50 hover-lift'
                  )}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <Badge
                        className={cn(
                          'px-4 py-1 font-semibold shadow-lg',
                          tier.badgeVariant === 'primary'
                            ? 'bg-primary text-primary-foreground glow-blue'
                            : 'bg-accent text-accent-foreground glow-purple'
                        )}
                      >
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    {/* Icon */}
                    <div className="mx-auto mb-4">
                      <Icon
                        className={cn(
                          'h-12 w-12',
                          tier.highlighted ? 'text-primary' : 'text-muted-foreground'
                        )}
                      />
                    </div>

                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-base">{tier.description}</CardDescription>

                    {/* Price */}
                    <div className="mt-6">
                      <span className="text-5xl font-bold">${tier.price}</span>
                      <span className="text-muted-foreground ml-2">/{tier.period}</span>
                    </div>

                    {/* Value statement */}
                    {tier.highlighted && (
                      <div className="mt-4">
                        <Badge variant="outline" className="text-xs">
                          Save 200+ hours of trial & error
                        </Badge>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="flex-grow space-y-6">
                    {/* Features List */}
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check
                            className={cn(
                              'h-5 w-5 flex-shrink-0 mt-0.5',
                              tier.highlighted ? 'text-primary' : 'text-[var(--teal-accent)]'
                            )}
                          />
                          <span
                            className={cn(
                              'text-sm',
                              feature.includes('PLUS:')
                                ? 'font-semibold text-foreground'
                                : 'text-muted-foreground'
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className={cn(
                        'w-full text-base',
                        tier.highlighted && 'glow-blue'
                      )}
                      variant={tier.highlighted ? 'default' : 'outline'}
                    >
                      {tier.cta}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedPricingCard>
            );
          })}
        </div>

        {/* Social Proof */}
        <div className="mt-16 max-w-3xl mx-auto space-y-8">
          {/* Testimonial */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg italic text-muted-foreground">
              "Best investment I made in my career. Went from clicking buttons to{' '}
              <span className="font-semibold text-foreground">building tools worth $50K+</span>{' '}
              to my company."
            </p>
            <p className="text-sm font-semibold">
              — Alex Thompson, BIM Developer at Gensler
            </p>
          </div>

          {/* FAQ Prompt */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Have questions?{' '}
              <button className="text-primary hover:underline font-semibold">
                Check our FAQ
              </button>{' '}
              or{' '}
              <button className="text-primary hover:underline font-semibold inline-flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                Chat with us
              </button>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
