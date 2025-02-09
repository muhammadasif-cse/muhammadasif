"use client";

import { testimonials } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { TestimonialCard } from "./testimonial-card";

const Testimonial = () => {
  return (
    <div className="py-12">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Development Success<span className="text-success"> Stories</span>
        </h1>
        <p className="text-black/50 dark:text-white/50 text-lg max-w-2xl mx-auto text-center">
          A deep dive into the key projects I’ve worked on, the challenges I’ve
          faced, and the valuable lessons I’ve learned throughout my development
          journey.
        </p>
        <div className="w-full mt-16">
          <Carousel
            className="relative w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="xl:basis-1/2">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
