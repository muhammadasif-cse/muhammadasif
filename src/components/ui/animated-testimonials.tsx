/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Card, CardBody, Image } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotationValues, setRotationValues] = useState<number[]>([]);

  useEffect(() => {
    const initialRotationValues = testimonials.map(
      () => Math.floor(Math.random() * 21) - 10
    );
    setRotationValues(initialRotationValues);
  }, [testimonials]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const getRotateY = (index: number) => {
    return rotationValues[index] || 0;
  };

  return (
    <Card className="mt-10" shadow="sm">
      <CardBody>
        <div className="max-w-sm md:max-w-screen-lg mx-auto antialiased font-sans overflow-hidden md:py-14 md:pl-14">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="relative h-fit w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: getRotateY(index),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : getRotateY(index),
                      zIndex: isActive(index)
                        ? 20
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: getRotateY(index),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={400}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center max-h-40 md:max-h-80"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex justify-between flex-col py-4 mt-24 md:mt-0">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold text-secondary">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-black/50 dark:text-white/50 text-justify">
                  {testimonials[active].designation}
                </p>
                <motion.p className="text-lg text-black/50 dark:text-white/50 mt-8">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div className="flex gap-4 pt-12 md:pt-4">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <ArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <ArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
