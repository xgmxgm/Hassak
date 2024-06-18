import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEO BUILDING",
  description: "TEO BUILDING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={inter.className}>
          <header>
            <Header />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
    </html>
  );
}