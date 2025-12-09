import type { Metadata } from "next";
import type * as React from "react";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Saranya Gopinath | Full-Stack Developer",
  description:
    "Full-stack developer with 8+ years of experience in SaaS companies, passionate about creating exceptional user experiences with React and modern web technologies.",
  keywords: [
    "Saranya Gopinath",
    "Full-Stack Developer",
    "React Developer",
    "Frontend Developer",
    "Software Engineer",
    "Web Developer",
    "Denmark",
    "Aarhus",
  ],
  authors: [{ name: "Saranya Gopinath" }],
  openGraph: {
    title: "Saranya Gopinath | Full-Stack Developer",
    description:
      "Full-stack developer with 8+ years of experience in SaaS companies, passionate about React and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
