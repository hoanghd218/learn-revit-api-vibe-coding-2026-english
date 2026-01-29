'use client';

import { Section, Container, SectionHeading, StatBadge } from '@/components/bim';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
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
    title: '10+ Years BIM Experience',
    description: 'Expert in BIM automation and AI implementation in construction.',
    icon: Building2,
  },
  {
    title: 'BIM AI Expert',
    description: 'Leading the digital transformation with AI in the Vietnamese AEC industry.',
    icon: Award,
  },
  {
    title: '8000+ Students Taught',
    description: 'Empowering architects and engineers through the BimSpeed platform.',
    icon: Users,
  },
  {
    title: 'Enterprise Trainer',
    description: 'Advised dozens of large corporations on BIM/AI integration.',
    icon: BookOpen,
  },
];

const achievements = [
  'Founder of BimSpeed, a platform supporting 8000+ users.',
  'Expert in BIM AI for architecture, structure, and MEP.',
  'Digital transformation consultant for top construction firms.',
  'Over 10 years of experience in Revit API and BIM automation.',
  'Leading the BIM AI revolution in Vietnam\'s construction sector.',
];

const galleryImages = [
  {
    src: '/hoang/hoang%201.png',
    alt: 'Alex Hoang Training',
  },
  {
    src: '/hoang/training%20nha%20dep.jpg',
    alt: 'BimSpeed Training Session',
  },
  {
    src: '/hoang/sj1.jpeg',
    alt: 'Student Support 1',
  },
  {
    src: '/hoang/sj2.jpeg',
    alt: 'Student Support 2',
  },
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
    <Section id="instructor" contained className="bg-muted">
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
            <Card className="border-[var(--orange-red-accent)]/20 hover:border-[var(--orange-red-accent)]/40 transition-colors">
              <CardHeader>
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-[var(--orange-red-accent)] via-[var(--ocean-blue-accent)] to-[var(--orange-red-accent)] p-1 overflow-hidden">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/hoang/avatar.png"
                      alt="Alex Hoang"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <CardTitle className="text-2xl text-center">Alex Hoang</CardTitle>
                <CardDescription className="text-center text-base">
                  Founder of BimSpeed & BIM AI Expert
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
                    value="8K+"
                    label="Users"
                    icon={Users}
                    variant="accent"
                  />
                  <StatBadge
                    value="Top"
                    label="Expert"
                    icon={Award}
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
                          <Icon className="h-5 w-5 text-[var(--orange-red-accent)]" />
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
                    "BimSpeed specializes in <span className="text-[var(--orange-red-accent)] font-semibold">BIM AI solutions</span> for the
                    construction sector in Vietnam, helping thousands <span className="text-[var(--ocean-blue-accent)] font-semibold">automate their workflows</span>."
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
                  <Award className="h-5 w-5 text-[var(--ocean-blue-accent)]" />
                  Notable Projects & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--teal-accent)] mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Why Learn From Me */}
            <Card className="border-[var(--ocean-blue-accent)]/20">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[var(--orange-red-accent)]/20 text-[var(--orange-red-accent)] border-[var(--orange-red-accent)]/50">
                  Professional Profile
                </Badge>
                <CardTitle>About Alex Hoang</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Founder of <span className="text-foreground font-semibold">BimSpeed</span>, a platform that has helped over
                  <span className="text-foreground font-semibold"> 8,000+ architects and construction engineers</span> automate BIM for architecture, structure, and MEP.
                </p>
                <p>
                  I have trained <span className="text-foreground font-semibold">dozens of large enterprises</span> on BIM and AI solutions in construction,
                  bringing about true digital transformation for the industry.
                </p>
                <div className="pt-2">
                  <Badge variant="outline" className="font-mono text-xs">
                    Transforming Construction with AI
                  </Badge>
                </div>
              </CardContent>
            </Card>
            {/* Experience Gallery */}
            <Card className="border-[var(--orange-red-accent)]/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Experience & Training Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className="group relative aspect-video overflow-hidden rounded-md border border-border/50 bg-muted"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
