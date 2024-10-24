import type { Metadata } from 'next';
import './globals.css';

import { Inter, Noto_Sans_KR, Black_Han_Sans } from 'next/font/google';

export const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
});

export const blackHanSans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-black-han-sans',
});

export const metadata: Metadata = {
  title: '심재문 Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansKR.className} ${inter.variable} ${blackHanSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
