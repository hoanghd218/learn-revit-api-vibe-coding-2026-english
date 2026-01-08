'use client';

import { SignIn } from '@clerk/nextjs';
import { Section, Container } from '@/components/bim';

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
          redirectUrl="/"
          signUpUrl="/sign-up"
        />
      </Container>
    </Section>
  );
}
