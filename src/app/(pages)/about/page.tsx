"use client";
import { Button, Chip, Image } from "@heroui/react";
import { ArrowUpRight, Download } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen overflow-hidden">
        <div className="grid w-full max-w-screen-lg gap-12 py-12 mx-auto lg:grid-cols-2 lg:py-0">
          <div className="my-auto">
            <Chip size="sm" color="primary">
              This information is up to date as of 2022
            </Chip>
            <h1 className="mt-6 text-4xl lg:text-[2.75rem] xl:text-5xl font-black leading-[1.1] tracking-tight">
              Who I Am <span className="text-secondary">&</span> What I Do
            </h1>
            <p className="mt-6 text-lg text-black/50 dark:text-white/50">
              {`I am a passionate and detail-oriented full-stack developer specializing in React.js & Node.js, with a strong focus on crafting seamless user experiences, pixel-perfect design, and highly performant, maintainable code.`}
            </p>
            <p className="mt-6 text-lg text-black/50 dark:text-white/50">
              {`My journey as a web developer began in 2021, and over the past three years, I have continuously expanded my expertise, embracing modern technologies like Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and more. I thrive on solving complex problems and building scalable, high-quality digital solutions.`}
            </p>
            <p className="mt-6 text-lg text-black/50 dark:text-white/50">
              {`Beyond coding, I stay engaged with the tech community, following the journey of early startups and sharing insights on LinkedIn. You can also find my projects on GitHub, where I contribute to open-source initiatives and showcase my latest work.`}
            </p>
            <div className="flex items-center gap-4 mt-12">
              <Button size="lg" className="text-base rounded-full">
                Experience <ArrowUpRight className="!h-5 !w-5" />
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="text-base rounded-full shadow-none"
              >
                <Download className="!h-5 !w-5" /> Resume
              </Button>
            </div>
          </div>
          <div className="w-full lg:aspect-auto lg:w-[720px] my-auto bg-accent rounded-xl">
            <Image
              isZoomed
              src="/images/muhammadasif-about.jpeg"
              className="object-cover object-center"
              alt={"about-image"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
