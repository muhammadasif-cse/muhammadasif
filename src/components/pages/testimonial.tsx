"use client";

import { testimonials } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { TestimonialCard } from "./testimonial-card";

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-black tracking-tighter text-center">
          Success Stories from <br />
          My Development<span className="text-secondary"> Journey</span>
        </h2>
        <div className="w-full mt-20">
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
