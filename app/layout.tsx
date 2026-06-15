// app/layout.tsx
import type { Metadata } from 'next';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';
import ScrollEffects from "./components/ScrollEffects";
import './globals.css';

// Load fonts with display: 'swap' to prevent FOIT
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hired Billing Support — Operational Infrastructure for Modern Healthcare',
  description: 'Remote healthcare staffing, RCM, AR recovery, and AI-assisted workflows that let providers reclaim time and scale without overhead.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navigation />
        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
          <ScrollAnimations />
          <ScrollEffects />
        </main>
        <Footer />
      </body>
    </html>
  );
}