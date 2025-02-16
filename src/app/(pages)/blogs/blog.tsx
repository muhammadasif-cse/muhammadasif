"use client";
import {blogs, IBlog} from "@/lib/data";
import {Button} from "@heroui/button";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {AnimatePresence, motion} from "framer-motion";
import {CircleX} from "lucide-react";
import Image from "next/image";
import React, {useEffect, useId, useRef, useState} from "react";
import BlogHeader from "./blog-header";

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<IBlog | null>(null);
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActivePost(null);
      }
    }

    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePost]);

  useOutsideClick(ref, () => setActivePost(null));

  return (
    <>
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/30 z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 grid place-items-center z-20">
            <motion.div
              layoutId={`card-${activePost.title}-${id}`}
              ref={ref}
              className="w-full bg-white max-w-xl dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  width={600}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 p-1 rounded-full"
                >
                  <CircleX size={24} />
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-secondary">{activePost.title}</h2>
                <p className="text-sm text-black/60 dark:text-white/60 mb-4">
                  {activePost.description}
                </p>
                <div className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {activePost.content()}
                </div>
                <div className="flex justify-center mt-2">
                  <Button size={"sm"} variant="flat">
                    Read More...
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BlogHeader />
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-2">
        {blogs.map((post) => (
          <motion.div
            layoutId={`card-${post.title}-${id}`}
            key={post.title}
            onClick={() => setActivePost(post)}
            className="group flex flex-col rounded-xl cursor-pointer"
          >
            <Card key={post.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="object-cover max-w-full transition-all duration-200 group-hover:scale-105"
                />
              </CardHeader>
              <CardBody className="p-4">
                <h1 className="text-lg font-semibold mb-2">{post.title}</h1>
                <p className="text-sm text-black/60 dark:text-white/60">{post.description}</p>
              </CardBody>
              <CardFooter className="flex justify-between items-center p-4">
                <div className="flex flex-wrap gap-1">
                  {post.category?.map((_, indx) => (
                    <Chip key={indx} color="secondary" size="sm" variant="flat">
                      {_}
                    </Chip>
                  ))}
                </div>
                <p className="text-sm">{post.date}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Blog;
