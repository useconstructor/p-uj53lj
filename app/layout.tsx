import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788322240795',
  description: 'A real-time collaborative project management SaaS platform for product teams and agencies, featuring AI task prioritization, live collaboration, and integrated time tracking with a cosmic/space-themed visual identity.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0A0E2F', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
