"use client";
import {siteConfig} from "@/config/site";
import {Button, Chip, Image} from "@heroui/react";
import {ArrowUpRight, Download} from "lucide-react";
import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  other: {
    "google-site-verification": "your-verification-code",
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
  themeColor: [
    {color: "#f4f4f5", media: "(prefers-color-scheme: light)"},
    {color: "#111111", media: "(prefers-color-scheme: dark)"},
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen overflow-hidden">
        <div className="grid w-full max-w-screen-lg gap-12 py-12 mx-auto lg:grid-cols-2 lg:py-0">
          <div className="my-auto">
            <Chip size="sm" color="primary">
              This information is up to date as of 2022
            </Chip>
            <h1 className="mt-6 text-4xl lg:text-[2.75rem] xl:text-5xl font-black leading-[1.1] tracking-tight">
              Who I Am <span className="text-secondary">&</span> What I Do
            </h1>
            <p className="mt-6 text-lg text-black/50 dark:text-white/50">
              {`I am a passionate and detail-oriented full-stack developer specializing in React.js & Node.js, with a strong focus on crafting seamless user experiences, pixel-perfect design, and highly performant, maintainable code.`}
            </p>
            <p className="mt-6 text-lg text-black/50 dark:text-white/50">
              {`My journey as a web developer began in 2021, and over the past three years, I have continuously expanded my expertise, embracing modern technologies like Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and more. I thrive on solving complex problems and building scalable, high-quality digital solutions.`}
            </p>
            <p className="mt-6 text-lg text-black/50 dark:text-white/50">
              {`Beyond coding, I stay engaged with the tech community, following the journey of early startups and sharing insights on LinkedIn. You can also find my projects on GitHub, where I contribute to open-source initiatives and showcase my latest work.`}
            </p>
            <div className="flex items-center gap-4 mt-12">
              <Button size="lg" className="text-base rounded-full">
                Experience <ArrowUpRight className="!h-5 !w-5" />
              </Button>
              <Button variant="bordered" size="lg" className="text-base rounded-full shadow-none">
                <Download className="!h-5 !w-5" /> Resume
              </Button>
            </div>
          </div>
          <div className="w-full lg:aspect-auto lg:w-[720px] my-auto bg-accent rounded-xl">
            <Image
              aria-label={"Muhammad Asif's profile picture"}
              isZoomed
              src="/images/muhammadasif-about.jpeg"
              className="object-cover object-center"
              alt={"Muhammad Asif's profile picture"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
