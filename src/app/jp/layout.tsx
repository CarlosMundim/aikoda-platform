import { Inter, Playfair_Display } from 'next/font/google';
import { Metadata } from 'next';
import '../../styles/globals.css';

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
    default: 'aiKODA Intelligence Systems - エンタープライズAIソリューション',
    template: '%s | aiKODA Intelligence Systems',
  },
  description: '他が解決できない問題を解決します：大規模な文化的知能。私たちのAIは人間のように文化を理解しますが、1000倍速く処理します。',
  keywords: ['AI', '文化的知能', 'エンタープライズ', '人材', '日本', 'HRテクノロジー'],
  authors: [{ name: 'aiKODA Intelligence Systems' }],
  creator: 'aiKODA Intelligence Systems',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://aikoda.dev/jp',
    title: 'aiKODA Intelligence Systems - エンタープライズAIソリューション',
    description: '他が解決できない問題を解決します：大規模な文化的知能',
    siteName: 'aiKODA Intelligence Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aiKODA Intelligence Systems',
    description: '大規模な文化的知能',
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

export default function JapaneseLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfairDisplay.variable}`}>
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