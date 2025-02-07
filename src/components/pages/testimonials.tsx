"use client";
import { testimonials } from "@/lib/data";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl !leading-[1.15] font-black tracking-tighter text-center">
        Success Stories from <br />
        My Development<span className="text-secondary"> Journey</span>
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default Testimonials;
