'use client';

import { Header } from '@/components/layout';
import {
  HeroSection,
  PainPointsSection,
  CurriculumSection,
  LessonsList,
  TechStackSection,
  InstructorSection,
  StudentProjectsSection,
  VideoSection,
  CourseSignupSection,
} from '@/components/sections';
import { Section, Container } from '@/components/bim';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection />

      {/* Pain Points Section */}
      <PainPointsSection />

      {/* Curriculum Section */}
      <CurriculumSection />


      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Instructor Section */}
      <InstructorSection />

      {/* Student Projects Section */}
      <StudentProjectsSection />

      {/* Course Signup Section */}
      <CourseSignupSection />

      {/* Footer */}
      <Section contained className="bg-card/30">
        <Container>
          <footer className="py-12 border-t border-border">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-6 w-6 text-coral-accent" />
                  <span className="text-lg font-bold text-gradient">BIM Developer</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Transform from BIM User to High-Paid BIM Developer. Master C#, Revit API, and WPF.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#curriculum" className="text-muted-foreground hover:text-coral-accent transition-colors">Curriculum</Link></li>
                  <li><Link href="#projects" className="text-muted-foreground hover:text-coral-accent transition-colors">Student Projects</Link></li>
                  <li><Link href="#instructor" className="text-muted-foreground hover:text-coral-accent transition-colors">Instructor</Link></li>
                  <li><Link href="#tech-stack" className="text-muted-foreground hover:text-coral-accent transition-colors">Tech Stack</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">API Reference</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">Community</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-coral-accent transition-colors">Refund Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} BIM Developer Academy. All rights reserved.</p>
              <p>Built for Engineers who Code.</p>
            </div>
          </footer>
        </Container>
      </Section>
    </>
  );
}
