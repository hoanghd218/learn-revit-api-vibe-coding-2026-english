import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "@/lib/seo/structured-data";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bimdeveloperacademy.com'),
  title: {
    default: "BIM Developer Masterclass | Learn Revit API & C# Programming",
    template: "%s | BIM Developer Masterclass",
  },
  description: "Transform from BIM User to Developer. Master C#, Revit API, and WPF to build custom plugins that automate the impossible. 12-week comprehensive course for architects, engineers, and BIM coordinators.",
  keywords: [
    "BIM Developer",
    "Revit API",
    "C# Programming",
    "BIM Automation",
    "Revit Plugin Development",
    "WPF Development",
    "BIM Course",
    "Architecture Automation",
    "Dynamo to C#",
    "BIM Manager Course",
  ],
  authors: [{ name: "BIM Developer Academy" }],
  creator: "BIM Developer Academy",
  publisher: "BIM Developer Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bimdeveloperacademy.com",
    siteName: "BIM Developer Academy",
    title: "BIM Developer Masterclass | Learn Revit API & C# Programming",
    description: "Transform from BIM User to Developer. Master C#, Revit API, and WPF to build custom plugins.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BIM Developer Masterclass - Learn Revit API & C#",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIM Developer Masterclass | Learn Revit API & C#",
    description: "Transform from BIM User to Developer. Master C#, Revit API, and WPF.",
    images: ["/og-image.png"],
    creator: "@bimdeveloper",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon links - add actual favicon files to public/ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(), null, 2),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
