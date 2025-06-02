import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

const inter = Inter({ subsets: ['latin'] });

// Viewport configuration for PWA
type Viewport = {
  width: string;
  initialScale: number;
  maximumScale: number;
  userScalable: boolean;
  viewportFit: 'auto' | 'contain' | 'cover';
  themeColor: Array<{ media: string; color: string }>;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  title: 'Abhishek Gurjar | Full Stack MERN Developer',
  description: 'Portfolio of Abhishek Gurjar, a Full Stack MERN Developer skilled in building scalable, high-performance web applications.',
  generator: 'Next.js',
  applicationName: 'Abhishek Gurjar Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Abhishek Gurjar', url: 'https://abhishekboadgurjar.github.io' }],
  creator: 'Abhishek Gurjar',
  publisher: 'Abhishek Gurjar',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Abhishek Gurjar | Full Stack MERN Developer',
    description: 'Portfolio of Abhishek Gurjar, a Full Stack MERN Developer',
    url: 'https://abhishekboadgurjar.github.io',
    siteName: 'Abhishek Gurjar Portfolio',
    images: [
      {
        url: '/icons/AG.png',
        width: 512,
        height: 512,
        alt: 'Abhishek Gurjar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Abhishek Gurjar',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Abhishek Gurjar" />
        <link rel="apple-touch-icon" href="/icons/AG.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/icons/AG.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">
            <div className="container mx-auto px-4">
              {children}
            </div>
            <PWAInstallPrompt />
            <Toaster position="top-center" richColors />
          </main>
        </ThemeProvider>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  })
                  .catch((error) => {
                    console.error('ServiceWorker registration failed: ', error);
                  });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
