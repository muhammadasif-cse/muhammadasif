import {siteConfig} from "@/config/site";
import {Metadata, Viewport} from "next";
import Index from ".";

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
    "Muhammad Asif Portfolio",
    "Freelance Web Developer",
    "Full Stack Developer for Hire",
    "React Developer Fiverr",
    "Next.js Developer Upwork",
    "MERN Stack Developer",
    "JavaScript and TypeScript Expert",
    "Backend Developer Express.js Nest.js",
    "Frontend UI UX Designer",
    "E-commerce Web Development",
    "Freelance Software Engineer",
    "Custom Web Application Development",
    "AWS Cloud & DevOps Engineer",
    "MongoDB PostgreSQL MySQL Developer",
    "Hire Remote Web Developer",
    "GitHub Open Source Contributor",
    "SEO Optimized Web Solutions",
    "Google Ranking Web Developer",
    "Portfolio Website Development",
    "Professional Software Engineer",
    "Hire a Full Stack Developer",
    "Web App Security and Performance",
    "Freelancer Fiverr Upwork Web Development",
    "Best Web Developer in Bangladesh",
    "Remote Developer Job Opportunities",
    "Custom API Development",
    "RESTful API & GraphQL Development",
    "SaaS Web Application Development",
    "Secure Authentication JWT OAuth",
    "Real-time Web Applications",
    "AI-Powered Blogging Platform",
    "Job Portal System Development",
    "Online Learning Platform Development",
    "E-commerce Store with Payment Gateway",
    "Docker Containerization Expert",
    "Microservices Architecture Developer",
    "Serverless Backend Development",
    "Spring Boot Enterprise Applications",
    "Django Web Application Developer",
    "Vue.js Frontend Development",
    "Tailwind CSS UI Framework Expert",
    "Bootstrap Responsive Web Design",
    "Unit Testing with Jest and Cypress",
    "Cloud Deployment AWS Azure GCP",
    "Performance Optimization in Web Apps",
    "Next.js Server-Side Rendering (SSR)",
    "GraphQL API Developer",
    "Real-Time Data Streaming with WebSockets",
    "Firebase Authentication and Firestore",
    "DevOps and CI/CD Pipeline Engineer",
    "Headless CMS and API-First Development",
    "Custom Dashboard & Admin Panel Development",
    "Multi-Vendor E-commerce Marketplace Development",
    "ERP & CRM Web Application Development",
    "AI & Machine Learning Integration in Web Apps",
    "Secure Payment Gateway Integration",
    "Web Accessibility and WCAG Compliance",
    "Dockerized Web Applications",
    "TypeORM and Prisma ORM Expert",
    "SQL & NoSQL Database Optimization",
    "Event-Driven Architecture with Kafka",
    "GraphQL Subscription & Real-Time APIs",
    "Web Performance Optimization & SEO",
    "Low-Latency API Development",
    "Automated Testing & CI/CD Pipelines",
    "Kubernetes Orchestration Expert",
    "Serverless Functions AWS Lambda",
    "Blockchain & Smart Contract Development",
    "Hybrid Mobile App Development with React Native",
    "AI Chatbot & NLP Development",
    "Edge Computing & Cloudflare Workers",
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
