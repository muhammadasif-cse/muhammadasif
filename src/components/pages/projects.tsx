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
        <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-center leading-relaxed">
          A Collection of My <br />
          Top Development
          <span className="text-secondary"> Works</span>
        </h2>
        <h2 className="mt-3 text-2xl md:text-4xl font-black tracking-tight text-center"></h2>
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
