import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  // display: 'swap',
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'Ctrl-F Plus',
  description: 'CTRL-F Plus - Chrome Extension',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // h-full
      className={`${inter.variable} ${open_sans.variable}  antialiased`}
    >
      <body
        // className="mx-auto max-w-7xl px-4"
        className="flex h-full flex-col gap-[4.5rem] bg-gray-100"
      >
        <Navbar />
        <main className="isolate flex h-full flex-col gap-[4.5rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
