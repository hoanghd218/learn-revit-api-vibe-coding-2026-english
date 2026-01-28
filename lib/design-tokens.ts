/**
 * Design Tokens for BIM Developer Masterclass Landing Page
 *
 * ClaudeKit Dark Theme Style
 * - Dark backgrounds (#0F0F0F, #1A1A1A, #242424)
 * - Coral (#D97757) and Bronze (#D4A27F) accents
 * - Modern SaaS aesthetic
 */

export const colors = {
  // Dark Theme Background Colors (layered for depth)
  bg: {
    primary: '#0F0F0F',    // Main background - deepest dark
    secondary: '#1A1A1A',  // Cards and panels
    tertiary: '#242424',   // Elevated surfaces
    muted: '#2A2A2A',      // Muted backgrounds
  },
  // Text Colors
  text: {
    primary: '#FAFAFA',    // Main text - white
    secondary: '#E4E4E7',  // Secondary text
    muted: '#A1A1AA',      // Muted text
  },
  // Border
  border: '#333333',

  // Accent Colors (Coral & Bronze)
  accent: {
    coral: '#D97757',      // Primary accent
    coralLight: 'rgba(217, 119, 87, 0.2)',  // Coral with opacity
    bronze: '#D4A27F',     // Secondary accent
    bronzeLight: 'rgba(212, 162, 127, 0.1)', // Bronze with opacity
  },

  // Semantic Colors
  semantic: {
    primary: '#D97757',    // Coral - primary actions
    secondary: '#D4A27F',  // Bronze - secondary actions
    success: '#4EC9B0',    // Green - success states
    warning: '#DCDCAA',    // Yellow - warnings
    error: '#DC2626',      // Red - errors
  },

  // Trust/Security Colors
  trust: {
    stripe: '#635BFF',
    soc2: '#00A3E0',
    gdpr: '#0066CC',
  },
} as const;

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  '3xl': '3rem',    // 48px
  '4xl': '4rem',    // 64px
  '5xl': '6rem',    // 96px
  '6xl': '8rem',    // 128px
} as const;

export const typography = {
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    code: "'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace",
  },
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
  glow: {
    coral: '0 0 20px rgba(217, 119, 87, 0.4)',
    coralLg: '0 0 30px rgba(217, 119, 87, 0.5)',
    bronze: '0 0 20px rgba(212, 162, 127, 0.4)',
  },
} as const;

export const animations = {
  durations: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easings: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
    easeInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
  },
} as const;

// shadcn CSS Variable Mappings
export const shadcnMapping = {
  '--background': colors.bg.primary,
  '--foreground': colors.text.primary,
  '--card': colors.bg.secondary,
  '--card-foreground': colors.text.primary,
  '--popover': colors.bg.tertiary,
  '--popover-foreground': colors.text.primary,
  '--primary': colors.accent.coral,
  '--primary-foreground': '#FFFFFF',
  '--secondary': colors.bg.tertiary,
  '--secondary-foreground': colors.text.primary,
  '--muted': colors.bg.muted,
  '--muted-foreground': colors.text.muted,
  '--accent': colors.accent.bronze,
  '--accent-foreground': '#000000',
  '--destructive': colors.semantic.error,
  '--destructive-foreground': '#FFFFFF',
  '--border': colors.border,
  '--input': colors.border,
  '--ring': colors.accent.coral,
} as const;

// Type exports for TypeScript autocomplete
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Typography = typeof typography;
export type Breakpoints = typeof breakpoints;
export type Shadows = typeof shadows;
export type Animations = typeof animations;
