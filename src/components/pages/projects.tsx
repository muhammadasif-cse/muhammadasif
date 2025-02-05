"use client";
import { StackingCard } from "@/components/ui/stacking-card";
import { projects } from "@/lib/data";
import { useScroll } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { JSX, useRef } from "react";

export default function Project(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <section ref={container}>
        <h1 className="2xl:text-7xl md:text-5xl text-3xl font-semibold text-center tracking-tight leading-[120%]">
          A Collection of My <br /> Top Development Works
        </h1>
        <section className="w-full">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <StackingCard
                key={`p_${i}`}
                i={i}
                data={project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </section>
    </ReactLenis>
  );
}
