"use client";

import Experience from "@/components/pages/experience";
import FAQ from "@/components/pages/faq";
import Hero from "@/components/pages/hero";
import Skills from "@/components/pages/skills";
import Testimonial from "@/components/pages/testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Testimonial />
      <FAQ />
    </div>
  );
}
