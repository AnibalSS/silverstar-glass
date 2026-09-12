import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import MobileActionBar from '@/components/MobileActionBar';

export const metadata: Metadata = {
  title: 'Silverstar Glass | DFW Glass Installation & Repair',
  description: 'Professional glass installation and repair for homes and businesses across DFW. Windows, mirrors, shower enclosures, and more.',
  keywords: ['glass installation', 'glass repair', 'DFW', 'Dallas', 'Fort Worth', 'windows', 'mirrors', 'shower enclosures'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-body text-text-primary">
        <Navbar />
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
