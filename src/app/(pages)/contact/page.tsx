import {siteConfig} from "@/config/site";
import {MailIcon, MapPinIcon, MessageCircle, PhoneIcon} from "lucide-react";
import {Metadata, Viewport} from "next";
import Link from "next/link";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: {
    default: `Contact | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  other: {
    "google-site-verification": "755fhCCBs2v3FlIqESp5F3gm4WHRQLtJzc0qOmCGd8I",
  },
  keywords: [
    "Contact Muhammad Asif",
    "Hire Full Stack Developer",
    "Freelance Software Engineer Contact",
    "Web Developer Contact Information",
    "Freelance Web Developer Email",
    "Hire React Developer Fiverr Upwork",
    "Next.js & MERN Stack Developer Contact",
    "Express.js & Nest.js Backend Developer",
    "JavaScript & TypeScript Expert for Hire",
    "E-commerce Web Developer Contact",
    "Custom Web Application Development Contact",
    "AWS Cloud & DevOps Engineer Contact",
    "MongoDB, PostgreSQL, MySQL Developer Contact",
    "Hire Remote Web Developer",
    "GitHub Open Source Contributor Contact",
    "SEO Optimized Web Solutions Contact",
    "Portfolio Website Development Inquiry",
    "Freelancer Fiverr Upwork Web Development",
    "Best Web Developer in Bangladesh Contact",
    "Remote Developer Job Inquiry",
    "Custom API Development Services",
    "RESTful API & GraphQL Developer Contact",
    "SaaS Web Application Development Services",
    "Real-Time Web Applications Developer",
    "Job Portal System Development Contact",
    "E-commerce Store & Payment Integration Inquiry",
    "Microservices & Docker Expert Contact",
    "Serverless Backend Developer for Hire",
    "Vue.js & Tailwind CSS Developer Contact",
    "Unit Testing with Jest & Cypress Inquiry",
    "Cloud Deployment AWS, Azure, GCP Contact",
    "GraphQL & WebSockets Developer Contact",
    "Firebase & Firestore Developer Contact",
    "DevOps & CI/CD Pipeline Engineer Contact",
    "Headless CMS & API-First Development Inquiry",
    "Multi-Vendor E-commerce Developer Contact",
    "ERP & CRM Web Development Inquiry",
    "Web Accessibility & WCAG Compliance Services",
    "Secure Payment Gateway Integration Contact",
    "SQL & NoSQL Database Optimization Inquiry",
    "AI Chatbot & NLP Developer Contact",
    "Hybrid Mobile App Development Inquiry",
    "Blockchain & Smart Contract Developer Contact",
    "Contact Muhammad Asif Gmail: muhammadasif.cse@gmail.com",
    "Contact Muhammad Asif Phone: 01930248584",
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
const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-screen-lg mx-auto">
        <b className="text-secondary">Contact Us</b>
        <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight">
          Feel Free to Reach Out Anytime!
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          We&apos;d love to hear from you. Please fill out this form or shoot us an email.
        </p>
        <div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-6 font-bold text-xl">Email</h3>
              <p className="my-2.5 text-muted-foreground">
                Let’s connect! <br /> Drop me a message anytime.
              </p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="mailto:muhammadasif.cse@gmail.com"
              >
                muhammadasif.cse@gmail.com
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-6 font-bold text-xl">Live Chat</h3>
              <p className="my-2.5 text-muted-foreground">
                Reach me instantly on WhatsApp for any queries or a quick chat!
              </p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="https://wa.me/+8801930248584/?text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <MapPinIcon />
              </div>
              <h3 className="mt-6 font-bold text-xl">Office</h3>
              <p className="my-2.5 text-muted-foreground">Come say hello at my office</p>
              <Link
                className="font-bold text-secondary tracking-tight"
                href="https://map.google.com"
                target="_blank"
              >
                1st Floor, 86, 3 New Eskaton <br />
                Road, Dhaka 1000
              </Link>
            </div>
            <div>
              <div className="h-12 w-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <PhoneIcon />
              </div>
              <h3 className="mt-6 font-bold text-xl">Phone</h3>
              <p className="my-2.5 text-muted-foreground">Thursday-Fri from 10am to 12pm.</p>
              <Link className="font-bold text-secondary tracking-tight" href="tel:01930248584">
                +88 01930-248584
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
