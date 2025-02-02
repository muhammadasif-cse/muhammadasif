import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { BoxReveal } from "../ui/box-reveal";
import { Ripple } from "../ui/ripple";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="z-10 flex items-center justify-center min-h-40">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Muhammad Asif</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex items-start gap-5">
        <div className="items-center justify-center max-w-lg overflow-hidden size-full">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Hello I’am Asif<span className="text-secondary">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              <span className="text-secondary"> Transforming Ideas </span> into
              Seamless User Experiences
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <p>
                As an experienced{" "}
                <span className="text-primary">Software Engineer</span>, I excel
                in converting innovative concepts into high-quality software
                solutions. With a dedication to excellence and a passion for
                technology, I encourage you to delve into my extensive
                portfolio, highlighting my skills in{" "}
                <span className="text-secondary">software architecture</span>,
                programming, and{" "}
                <span className="text-primary">problem-solving</span>. {`Let's`}{" "}
                embark on a path to transform visionary ideas into tangible,
                cutting-edge software.
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button className="mt-[1.6rem]">Explore</Button>
          </BoxReveal>
        </div>
        <div>
          <Card
            className="w-[20rem] h-[20rem] rounded-xl overflow-hidden shadow-2xl"
            shadow="sm"
          >
            <CardBody className="overflow-hidden">
              <Image
                src="/images/muhammadasif.png"
                height={500}
                width={500}
                className="z-10 object-cover object-center w-full"
                alt="thumbnail"
              />
              <Ripple />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
