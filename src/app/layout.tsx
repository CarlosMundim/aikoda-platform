import { Inter, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'aiKODA Intelligence Systems - Enterprise AI Solutions',
    template: '%s | aiKODA Intelligence Systems',
  },
  description: 'We Solve What Others Can\'t: Cultural Intelligence at Scale. Our AI understands culture like humans do - but processes 1000x faster.',
  keywords: ['AI', 'Cultural Intelligence', 'Enterprise', 'Workforce', 'Japan', 'HR Technology'],
  authors: [{ name: 'aiKODA Intelligence Systems' }],
  creator: 'aiKODA Intelligence Systems',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aikoda.dev',
    title: 'aiKODA Intelligence Systems - Enterprise AI Solutions',
    description: 'We Solve What Others Can\'t: Cultural Intelligence at Scale',
    siteName: 'aiKODA Intelligence Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aiKODA Intelligence Systems',
    description: 'Cultural Intelligence at Scale',
    creator: '@aikoda_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}