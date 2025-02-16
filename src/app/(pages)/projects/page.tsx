import {siteConfig} from "@/config/site";
import {Metadata, Viewport} from "next";
import Project from "./project";

export const metadata: Metadata = {
  title: {
    default: `Projects | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Explore the latest insights, tutorials, and industry trends in software development. Learn from ${siteConfig.name}, a full-stack developer specializing in modern web technologies.`,
  other: {
    "google-site-verification": "755fhCCBs2v3FlIqESp5F3gm4WHRQLtJzc0qOmCGd8I",
  },
  keywords: [
    "Projects by Asif",
    "Full Stack Web Development Projects",
    "Next.js & Express.js Applications",
    "E-Commerce Platform Development",
    "Real-Time Chat Application with Socket.io",
    "Online Learning Platform Development",
    "AI-Powered Blog Platform",
    "Job Portal Web Application",
    "MERN Stack Development Projects",
    "Secure Authentication & OAuth",
    "Stripe Payment Integration",
    "WebSockets & Real-Time Communication",
    "Cloudinary for Video & Image Hosting",
    "Database Optimization with MongoDB & MySQL",
    "Prisma ORM & SQL Best Practices",
    "SEO & Performance Optimization",
    "Admin Dashboards & Analytics",
    "Responsive UI/UX with TailwindCSS",
    "Microservices & API Development",
    "Freelance Developer Portfolio",
    "Scaling Web Applications",
    "Docker & Kubernetes for Deployment",
    "Headless CMS & API-First Development",
    "DevOps & CI/CD Strategies",
    "AI & OpenAI API Integration",
    "Best Web Development Practices 2025",
    "Open Source Contributions & GitHub Projects",
    "Web Accessibility & WCAG Compliance",
    "High-Performance Web Applications",
    "Freelancer & Startup Tech Solutions",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: `Explore expert insights, development guides, and tutorials from ${siteConfig.name}. Stay ahead in web development.`,
    url: "https://muhammadasif.vercel.app/blog",
    type: "website",
    images: [
      {
        url: "/blog-cover.png",
        width: 1200,
        height: 630,
        alt: "Blog by Muhammad Asif",
      },
    ],
  },
  authors: [
    {
      name: "muhammadasifcse",
      url: "https://x.com/muhammadasifcse",
    },
  ],
  creator: "muhammadasifcse",
  alternates: {
    canonical: "https://muhammadasif.vercel.app/blog",
    types: {
      "application/rss+xml": [
        {
          url: "https://muhammadasif.vercel.app/rss.xml",
          title: "Muhammad Asif Blog RSS",
        },
      ],
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const Projects = () => {
  return (
    <div>
      <Project />
    </div>
  );
};

export default Projects;
