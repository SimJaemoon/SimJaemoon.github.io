import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const notoSansKR = localFont({
  src: './fonts/NotoSansKR-VariableFont_wght.ttf',
  weight: '100 700',
});

const inter = localFont({
  src: './fonts/Inter-VariableFont_opsz,wght.ttf',
  weight: '400',
  variable: '--font-inter',
});

const blackHanSans = localFont({
  src: './fonts/BlackHanSans-Regular.ttf',
  weight: '400',
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
