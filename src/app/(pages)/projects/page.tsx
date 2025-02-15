import {siteConfig} from "@/config/site";
import {Metadata, Viewport} from "next";
import Project from "./project";

export const metadata: Metadata = {
  title: {
    default: `Blogs | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Explore the latest insights, tutorials, and industry trends in software development. Learn from ${siteConfig.name}, a full-stack developer specializing in modern web technologies.`,
  other: {
    "google-site-verification": "755fhCCBs2v3FlIqESp5F3gm4WHRQLtJzc0qOmCGd8I",
  },
  keywords: [
    `Tech Blog by ${siteConfig.name}`,
    "Software Development Blog",
    "Full Stack Development Articles",
    "React.js and Next.js Tutorials",
    "Best Web Development Practices",
    "JavaScript & TypeScript Guides",
    "Backend Development with Node.js",
    "Express.js & Nest.js Blog Posts",
    "MERN Stack Development Insights",
    "E-commerce Web Development Tips",
    "Frontend UI/UX Best Practices",
    "SEO for Web Developers",
    "GitHub Open Source Contributions",
    "Optimizing Web Performance",
    "AWS Cloud & DevOps Articles",
    "GraphQL & REST API Development",
    "Database Optimization Techniques",
    "Security Best Practices in Web Apps",
    "Real-Time Web Applications",
    "Headless CMS & API-First Development",
    "Microservices Architecture Explained",
    "Docker & Kubernetes in Web Development",
    "Unit Testing & CI/CD Strategies",
    "Scaling Web Applications Effectively",
    "Freelance Developer Career Tips",
    "How to Get Web Developer Clients",
    "Freelancer Fiverr Upwork Strategies",
    "Best Web Development Tools 2025",
    "Latest Trends in Web Development",
    "Web Accessibility & WCAG Compliance",
    "AI & Machine Learning for Web Apps",
    "Hybrid Mobile App Development Blog",
    "Blockchain & Smart Contracts Guide",
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
