import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CursorDot, ThemeToggle, themeScript } from "@/components/home/SiteChrome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bilal Ashraf | Full-Stack Software Engineer",
  description:
    "Bilal Ashraf, full-stack software engineer from Pakistan building web platforms and AI integrations with React, TypeScript, Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${antonio.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ThemeToggle />
        <CursorDot />
      </body>
    </html>
  );
}
