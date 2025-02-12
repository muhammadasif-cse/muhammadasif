import {siteConfig} from "@/config/site";
import {Metadata, Viewport} from "next";
import Index from ".";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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

const About = () => {
  return (
    <div>
      <Index />
    </div>
  );
};

export default About;
