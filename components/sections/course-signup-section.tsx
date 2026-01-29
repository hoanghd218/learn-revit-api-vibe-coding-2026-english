'use client';

import { Container } from '@/components/bim';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/lib/auth/auth-context';
import { LoginForm } from '@/components/auth/login-form';
import { RegisterForm } from '@/components/auth/register-form';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchCourseData } from '@/lib/api';
import { Lesson } from '@/types/course';

/**
 * CourseSignupSection component - Two-column layout with course list and registration form
 * Adapted from reference design to match ClaudeKit dark theme (Coral & Bronze accents)
 */
export function CourseSignupSection() {
    const { isSignedIn } = useAuth();
    const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');
    const [lessons, setLessons] = useState<Lesson[]>([]);

    useEffect(() => {
        const loadLessonData = async () => {
            console.log('Fetching course data...');
            const course = await fetchCourseData();
            console.log('Course data received:', course);
            if (course && course.curriculum) {
                // Flatten curriculum sections into a single list of lessons
                const allLessons = course.curriculum.flatMap(section => section.lessons);
                console.log('All lessons flattened:', allLessons.length);
                // Take only a subset to match original design intent if needed
                setLessons(allLessons.slice(0, 10));
            } else {
                console.warn('No curriculum found in course data');
            }
        };
        loadLessonData();
    }, []);

    return (
        <section id="course-signup" className="relative py-16 md:py-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-[rgba(232,93,4,0.05)] via-background to-[rgba(0,119,182,0.03)] -z-10" />

            <Container size="xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Course List */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gradient">
                            BIM Architecture – Essential Skills for the New Era!
                        </h2>

                        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-[var(--orange-red-accent)] transition-all duration-300 hover-lift group cursor-pointer last:mb-2"
                                >
                                    {/* Thumbnail placeholder */}
                                    <div className="shrink-0 w-20 h-14 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-linear-to-br from-[var(--orange-red-accent)]/20 to-[var(--ocean-blue-accent)]/20 flex items-center justify-center">
                                            <span className="text-2xl text-[var(--orange-red-accent)]/60">🎬</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <Badge
                                                variant="outline"
                                                className="text-[10px] px-1.5 py-0 leading-none bg-[var(--teal-accent)]/10 text-[var(--teal-accent)] border-[var(--teal-accent)]/30"
                                            >
                                                {lesson.badge}
                                            </Badge>
                                            <span className="text-[10px] text-muted-foreground font-mono">{lesson.duration}</span>
                                        </div>
                                        <p className="text-sm text-foreground/90 group-hover:text-foreground transition-colors line-clamp-2">
                                            {lesson.title}
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
                                        className={activeTab === 'register' ? 'button-hover-shadow' : ''}
                                    >
                                        Register
                                    </Button>
                                    <Button
                                        variant={activeTab === 'login' ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setActiveTab('login')}
                                        className={activeTab === 'login' ? 'button-hover-shadow' : ''}
                                    >
                                        Login
                                    </Button>
                                </div>

                                {/* Custom Auth Forms or Welcome Back */}
                                {isSignedIn ? (
                                    <div className="py-8 text-center space-y-6">
                                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--orange-red-accent)]/10 text-[var(--orange-red-accent)]">
                                            <span className="text-4xl">👋</span>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-lg font-semibold">Welcome back!</p>
                                            <p className="text-sm text-muted-foreground">
                                                You're already signed in. Continue your learning journey.
                                            </p>
                                        </div>
                                        <Button asChild className="w-full button-hover-shadow" size="lg">
                                            <Link href="/courses">Go to My Courses</Link>
                                        </Button>
                                    </div>
                                ) : activeTab === 'register' ? (
                                    <RegisterForm
                                        onSuccess={() => { }}
                                        onSwitchToLogin={() => setActiveTab('login')}
                                    />
                                ) : (
                                    <LoginForm redirectUrl="/courses" />
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Container>
        </section>
    );
}
