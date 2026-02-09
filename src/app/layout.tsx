import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "جمعية أقرقاو للتنمية",
  description: "يداً بيد من أجل أقرقاو",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased bg-background text-zinc-900 font-[family-name:var(--font-cairo)] min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
