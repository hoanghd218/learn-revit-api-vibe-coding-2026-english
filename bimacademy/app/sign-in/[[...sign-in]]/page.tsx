'use client';

import { Section, Container } from '@/components/bim';
import { LoginForm } from '@/components/auth/login-form';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <Section contained className="min-h-screen flex items-center justify-center py-12">
      <Container className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your courses and continue your learning journey
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
          <LoginForm redirectUrl="/courses" />
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-coral-accent hover:text-coral-accent/80">
            Sign up
          </Link>
        </p>
      </Container>
    </Section>
  );
}
