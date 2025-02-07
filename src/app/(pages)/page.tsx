"use client";

import Contact from "@/components/pages/contact";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Skills from "@/components/pages/skills";
import Team from "@/components/pages/testimonials";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background mt-80">
        <VelocityScroll>
          Software Engineer | Frontend Developer | Backend Developer | Fullstack
          Developer |
        </VelocityScroll>
        <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      <Team />
      <Contact />
    </div>
  );
}
