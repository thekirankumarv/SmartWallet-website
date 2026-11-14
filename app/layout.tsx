import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', weight: ['500', '700', '800'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });

const SITE = process.env.VERCEL ? 'https://smartwalletapp.vercel.app/' : 'https://thekirankumarv.github.io/SmartWallet-website/';
const title = 'SmartWallet: free expense tracker for Android';
const description =
  'Track every rupee in seconds. Tap, speak or scan a bill. Budgets, accounts, credit cards, loans and reminders, all stored on your phone. Free, no ads, no sign-up.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'SmartWallet',
  keywords: ['expense tracker', 'money manager', 'budget app', 'Android', 'India', 'rupee', 'bill scanner', 'voice expense', 'offline'],
  openGraph: { title, description, url: SITE, siteName: 'SmartWallet', type: 'website', images: [{ url: `${SITE}og.png`, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description, images: [`${SITE}og.png`] },
};

export const viewport: Viewport = { themeColor: '#0A0A0F', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
