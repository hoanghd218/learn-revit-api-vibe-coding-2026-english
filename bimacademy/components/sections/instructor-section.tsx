'use client';

import { Section, Container, SectionHeading, StatBadge } from '@/components/bim';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import {
  Award,
  Users,
  Code,
  Building2,
  BookOpen,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface Credential {
  title: string;
  description: string;
  icon: React.ElementType;
}

const credentials: Credential[] = [
  {
    title: '10+ Years BIM Development',
    description: 'Built 50+ production plugins for global AEC firms',
    icon: Building2,
  },
  {
    title: 'Autodesk Certified',
    description: 'Revit API Expert & .NET Developer',
    icon: Award,
  },
  {
    title: '5000+ Students Taught',
    description: 'Across 40+ countries, 4.8/5 average rating',
    icon: Users,
  },
  {
    title: 'Published Course Author',
    description: 'Best-selling Revit API courses on Udemy & Skillshare',
    icon: BookOpen,
  },
];

const achievements = [
  'Led BIM automation at Foster + Partners',
  'Developed MEP clash detection system processing 10M+ elements',
  'Created automatic shop drawing generator (saved 200 hours/month)',
  'Built parametric façade designer for Zaha Hadid Architects',
  'Contributed to pyRevit open-source project',
];

/**
 * AnimatedCredentialCard - Credential card with scroll animation
 */
function AnimatedCredentialCard({
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
 * InstructorSection - Establishes instructor authority and credibility
 * ClaudeKit style: Coral (#D97757) & Bronze (#D4A27F) accents
 */
export function InstructorSection() {
  const profileRef = useScrollAnimation({
    animation: 'fadeIn',
    duration: 1000,
    easing: 'easeOutQuad',
  });

  const achievementsRef = useScrollAnimation({
    animation: 'slideLeft',
    duration: 800,
    delay: 200,
    easing: 'easeOutExpo',
  });

  return (
    <Section id="instructor" contained className="bg-section-light">
      <Container>
        <SectionHeading
          level={2}
          subtitle="Learn from an industry expert who's built real-world BIM solutions"
        >
          Meet Your Instructor
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Profile Card */}
          <div ref={profileRef as any}>
            <Card className="border-coral-accent/20 hover:border-coral-accent/40 transition-colors">
              <CardHeader>
                {/* Profile Image Placeholder */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-coral-accent via-bronze-accent to-coral-accent p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <Code className="h-16 w-16 text-coral-accent" />
                  </div>
                </div>

                <CardTitle className="text-2xl text-center">Your Instructor Name</CardTitle>
                <CardDescription className="text-center text-base">
                  Senior BIM Developer & Technical Instructor
                </CardDescription>

                {/* Stats Row */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <StatBadge
                    value="10+"
                    label="Years"
                    icon={TrendingUp}
                    variant="primary"
                  />
                  <StatBadge
                    value="5K+"
                    label="Students"
                    icon={Users}
                    variant="accent"
                  />
                  <StatBadge
                    value="50+"
                    label="Plugins"
                    icon={Code}
                    variant="success"
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Credentials Grid */}
                <div className="grid gap-4">
                  {credentials.map((credential, index) => {
                    const Icon = credential.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="mt-1">
                          <Icon className="h-5 w-5 text-coral-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{credential.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {credential.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quote */}
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm italic text-muted-foreground">
                    "I've trained over 5,000 engineers to become BIM developers. My mission is to
                    help you <span className="text-coral-accent font-semibold">automate the impossible</span> and{' '}
                    <span className="text-bronze-accent font-semibold">10x your value</span> to your organization."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Achievements & Credentials */}
          <div ref={achievementsRef as any} className="space-y-6">
            {/* Notable Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-bronze-accent" />
                  Notable Projects & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4EC9B0] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Why Learn From Me */}
            <Card className="border-bronze-accent/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-coral-accent/20 text-coral-accent border-coral-accent/50">
                  What Makes This Different
                </Badge>
                <CardTitle>Not Just Theory, Real-World Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  I don't teach "Hello World" examples. Every lesson is based on{' '}
                  <span className="text-foreground font-semibold">real plugins I've built</span>{' '}
                  for real companies solving real problems.
                </p>
                <p>
                  You'll learn the <span className="text-foreground font-semibold">exact patterns</span>,{' '}
                  <span className="text-foreground font-semibold">best practices</span>, and{' '}
                  <span className="text-foreground font-semibold">shortcuts</span> I use daily
                  as a professional BIM developer.
                </p>
                <div className="pt-2">
                  <Badge variant="outline" className="font-mono text-xs">
                    Production-Ready Code, Not Tutorials
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
