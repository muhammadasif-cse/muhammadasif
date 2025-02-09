"use client";

import FAQ from "@/components/pages/faq";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";
import Testimonial from "@/components/pages/testimonial";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <div className="relative flex flex-col items-center justify-center w-full mb-20 overflow-hidden rounded-lg bg-background mt-80">
        <VelocityScroll>
          Software Engineer | Frontend Developer | Backend Developer | Fullstack
          Developer |
        </VelocityScroll>
        <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      <Testimonial />
      <FAQ />
    </div>
  );
}
