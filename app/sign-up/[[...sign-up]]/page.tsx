'use client';

import { Section, Container } from '@/components/bim';
import { RegisterForm } from '@/components/auth/register-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <Section contained className="min-h-screen flex items-center justify-center py-12">
      <Container className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Join BIM Developer Academy
          </h1>
          <p className="text-muted-foreground">
            Create your account and start building Revit plugins today
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6">
          <RegisterForm
            onSuccess={() => router.push('/courses')}
            onSwitchToLogin={() => router.push('/sign-in')}
          />
        </div>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-[var(--orange-red-accent)] hover:text-[var(--orange-red-accent)]/80">
            Sign in
          </Link>
        </p>
      </Container>
    </Section>
  );
}
