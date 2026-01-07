'use client';

import { ClerkProvider } from '@clerk/nextjs';

// Clerk appearance configuration matching the coral/bronze theme
const clerkAppearance = {
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
  },
};

interface ClerkProviderWrapperProps {
  children: React.ReactNode;
}

export function ClerkProviderWrapper({ children }: ClerkProviderWrapperProps) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      {children}
    </ClerkProvider>
  );
}
