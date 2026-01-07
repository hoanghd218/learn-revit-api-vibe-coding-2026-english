'use client';

import { Container } from '@/components/bim';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SignIn, SignUp } from '@clerk/nextjs';
import { useState } from 'react';

// Course preview data
const courses = [
    {
        id: 1,
        title: 'AI & Automation: Creative Ideas for Unlimited Interior Design',
        badge: 'Free 100%',
        image: '/images/course-1.jpg',
    },
    {
        id: 2,
        title: 'Optimize Material Costs with AI – Beautiful Design at Great Prices',
        badge: 'Free 100%',
        image: '/images/course-2.jpg',
    },
    {
        id: 3,
        title: 'AI Predicts Interior Trends 2025 – Stay Ahead of the Market',
        badge: 'Free 100%',
        image: '/images/course-3.jpg',
    },
    {
        id: 4,
        title: 'Automate Interior Design Workflows with AI Workflow',
        badge: 'Free 100%',
        image: '/images/course-4.jpg',
    },
    {
        id: 5,
        title: 'AI Personalizes Living Spaces Based on Customer Preferences',
        badge: 'Free 100%',
        image: '/images/course-5.jpg',
    },
];

/**
 * CourseSignupSection component - Two-column layout with course list and registration form
 * Adapted from reference design to match ClaudeKit dark theme (Coral & Bronze accents)
 */
export function CourseSignupSection() {
    const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');

    return (
        <section id="course-signup" className="relative py-16 md:py-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-[rgba(217,119,87,0.05)] via-background to-[rgba(212,162,127,0.03)] -z-10" />

            <Container size="xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Course List */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                            BIM Architecture – Essential Skills for the New Era!
                        </h2>

                        <div className="space-y-4">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-coral-accent transition-all duration-300 hover-lift group cursor-pointer"
                                >
                                    {/* Thumbnail placeholder */}
                                    <div className="shrink-0 w-20 h-14 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-linear-to-br from-coral-accent/20 to-bronze-accent/20 flex items-center justify-center">
                                            <span className="text-2xl text-coral-accent/60">🎬</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <Badge
                                            variant="outline"
                                            className="mb-2 text-xs bg-[#4EC9B0]/10 text-[#4EC9B0] border-[#4EC9B0]/30"
                                        >
                                            {course.badge}
                                        </Badge>
                                        <p className="text-sm text-foreground/90 group-hover:text-foreground transition-colors line-clamp-2">
                                            {course.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Registration Form */}
                    <div className="lg:sticky lg:top-24">
                        <Card className="bg-card/80 backdrop-blur-sm border-border">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-bold">
                                    Register to Learn Now
                                </CardTitle>

                                <p className="text-sm text-muted-foreground mt-4">
                                    Welcome to the BIM Developer Academy. Register for free to explore AI.
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Tab Switcher */}
                                <div className="flex justify-center gap-2 mb-6">
                                    <Button
                                        variant={activeTab === 'register' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setActiveTab('register')}
                                        className={activeTab === 'register' ? 'glow-coral' : ''}
                                    >
                                        Register
                                    </Button>
                                    <Button
                                        variant={activeTab === 'login' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setActiveTab('login')}
                                        className={activeTab === 'login' ? 'glow-coral' : ''}
                                    >
                                        Login
                                    </Button>
                                </div>

                                {/* Clerk Sign In / Sign Up Components */}
                                {activeTab === 'register' ? (
                                    <SignUp
                                        appearance={{
                                            variables: {
                                                colorPrimary: '#D97757',
                                                colorText: '#F5F5F5',
                                                colorBackground: '#1A1A2E',
                                                colorInputBackground: '#252540',
                                                colorInputText: '#F5F5F5',
                                                colorDanger: '#EF4444',
                                                colorSuccess: '#10B981',
                                                colorWarning: '#F59E0B',
                                                colorNeutral: '#9CA3AF',
                                                borderRadius: '0.5rem',
                                                fontFamily: 'Inter, system-ui, sans-serif',
                                            },
                                            elements: {
                                                formButtonPrimary: 'bg-coral-accent hover:bg-coral-accent/80 text-white',
                                                card: 'bg-[#1A1A2E] border border-[#3A3A5A]',
                                                headerTitle: 'text-white',
                                                headerSubtitle: 'text-gray-400',
                                                socialButtonsBlockButton: 'bg-[#252540] border border-[#3A3A5A] hover:bg-[#2A2A4A]',
                                                formFieldLabel: 'text-gray-400',
                                                formFieldInput: 'bg-[#1A1A2E] border border-[#3A3A5A] text-white',
                                                footerActionLink: 'text-coral-accent hover:text-coral-accent/80',
                                                identityBadge: 'bg-[#252540]',
                                                accordionTriggerButton: 'text-white',
                                                accordionContent: 'text-gray-400',
                                                alternativeMethodsBlockButton: 'text-white',
                                                alternativeMethodsBlockButtonArrow: 'text-gray-400',
                                                formResendCodeLink: 'text-coral-accent',
                                                badge: 'bg-[#252540] text-white',
                                                rootBox: 'mx-auto',
                                            },
                                        }}
                                        redirectUrl="/courses"
                                        signInUrl="/sign-in"
                                    />
                                ) : (
                                    <SignIn
                                        appearance={{
                                            variables: {
                                                colorPrimary: '#D97757',
                                                colorText: '#F5F5F5',
                                                colorBackground: '#1A1A2E',
                                                colorInputBackground: '#252540',
                                                colorInputText: '#F5F5F5',
                                                colorDanger: '#EF4444',
                                                colorSuccess: '#10B981',
                                                colorWarning: '#F59E0B',
                                                colorNeutral: '#9CA3AF',
                                                borderRadius: '0.5rem',
                                                fontFamily: 'Inter, system-ui, sans-serif',
                                            },
                                            elements: {
                                                formButtonPrimary: 'bg-coral-accent hover:bg-coral-accent/80 text-white',
                                                card: 'bg-[#1A1A2E] border border-[#3A3A5A]',
                                                headerTitle: 'text-white',
                                                headerSubtitle: 'text-gray-400',
                                                socialButtonsBlockButton: 'bg-[#252540] border border-[#3A3A5A] hover:bg-[#2A2A4A]',
                                                formFieldLabel: 'text-gray-400',
                                                formFieldInput: 'bg-[#1A1A2E] border border-[#3A3A5A] text-white',
                                                footerActionLink: 'text-coral-accent hover:text-coral-accent/80',
                                                identityBadge: 'bg-[#252540]',
                                                accordionTriggerButton: 'text-white',
                                                accordionContent: 'text-gray-400',
                                                alternativeMethodsBlockButton: 'text-white',
                                                alternativeMethodsBlockButtonArrow: 'text-gray-400',
                                                formResendCodeLink: 'text-coral-accent',
                                                badge: 'bg-[#252540] text-white',
                                                rootBox: 'mx-auto',
                                            },
                                        }}
                                        redirectUrl="/courses"
                                        signUpUrl="/sign-up"
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
}
