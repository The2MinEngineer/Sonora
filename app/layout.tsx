import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Sonora',
  description:
    'Music app that lets you upload and listen to your favorite songs for free.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
