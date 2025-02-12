import {siteConfig} from "@/config/site";
import "@/styles/globals.css";
import type {Metadata, Viewport} from "next";
import {Oswald} from "next/font/google";
import {Providers} from "./providers";
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  other: {
    "google-site-verification": "755fhCCBs2v3FlIqESp5F3gm4WHRQLtJzc0qOmCGd8I",
  },
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Design System",
    "Muhammad Asif",
    "Muhammad Asif wd",
    "Muhammad Asif cse",
    "Asif",
    "Muhammad",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "NestJS Developer",
    "Supabase Developer",
    "Open Source Developer",
    "GitHub",
    "LinkedIn",
    "Twitter",
    "Portfolio",
    "Projects",
    "Blog",
    "Resume",
    "Experience",
    "Skills",
    "About",
    "Contact",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "muhammadasifcse",
      url: "https://x.com/muhammadasifcse",
    },
  ],
  creator: "muhammadasif-about",
  alternates: {
    canonical: "https://muhammadasif.vercel.app/about",
    types: {
      "application/rss+xml": [{url: "https://muhammadasif.vercel.app", title: "Muhammad Asif"}],
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
