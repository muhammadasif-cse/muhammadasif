"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import React, {useState} from "react";

import {cn} from "@/utils/cn";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string | undefined;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn("relative group/pin z-50  cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 md:w-fit w-full"
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
      >
        <div
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white dark:bg-dark border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden md:w-fit w-full"
          style={{
            transform: transform,
          }}
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <Link href={href ? href : ""} target={"_blank"}>
        <PinPerspective href={href} title={title} />
      </Link>
    </div>
  );
};

export const PinPerspective = ({title}: {title?: string; href?: string | undefined}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-dark py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="relative z-20 text-white text-xs font-medium inline-block py-0.5">
              {title ? title : ""}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover/btn:opacity-40" />
          </div>
        </div>

        <div
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
        >
          <>
            <motion.div
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
            />
            <motion.div
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-secondary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
            />
            <motion.div
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-secondary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
            />
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-secondary translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-foreground translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
