"use client";
import Stats from "@/app/(pages)/about/stats";
import Experience from "@/components/pages/experience";
import {BoxReveal} from "@/components/ui/box-reveal";
import {Button} from "@heroui/button";
import {Chip} from "@heroui/chip";
import {ArrowUpRight, Download} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Skills from "./skills";

const Index = () => {
  return (
    <section>
      <div className="flex items-center justify-center overflow-hidden py-12">
        <div className="grid w-full max-w-screen-lg gap-12 py-12 mx-auto lg:grid-cols-2 lg:py-0">
          <div className="my-auto">
            <Chip aria-label="chip for date" size="sm" color="primary">
              This information is up to date as of 2022
            </Chip>
            <BoxReveal>
              <h1 className="mt-6 text-4xl lg:text-[2.75rem] xl:text-5xl font-black leading-[1.1] tracking-tight">
                Who I Am <span className="text-secondary">&</span> What I Do
              </h1>
            </BoxReveal>
            <BoxReveal duration={0.2}>
              <p className="mt-6 text-lg text-black/50 dark:text-white/50">
                {`I am a passionate and detail-oriented full-stack developer specializing in React.js & Node.js, with a strong focus on crafting seamless user experiences, pixel-perfect design, and highly performant, maintainable code.`}
              </p>
            </BoxReveal>
            <BoxReveal duration={0.4}>
              <p className="mt-6 text-lg text-black/50 dark:text-white/50">
                {`My journey as a web developer began in 2021, and over the past three years, I have continuously expanded my expertise, embracing modern technologies like Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and more. I thrive on solving complex problems and building scalable, high-quality digital solutions.`}
              </p>
            </BoxReveal>
            <BoxReveal duration={0.6}>
              <p className="mt-6 text-lg text-black/50 dark:text-white/50">
                {`Beyond coding, I stay engaged with the tech community, following the journey of early startups and sharing insights on LinkedIn. You can also find my projects on GitHub, where I contribute to open-source initiatives and showcase my latest work.`}
              </p>
            </BoxReveal>
            <div className="flex items-center gap-4 mt-12">
              <Button as={Link} href="#experience" size="lg" className="text-base rounded-full">
                Experience <ArrowUpRight className="!h-5 !w-5" />
              </Button>
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1Q1CWZy62KOb5E9o98S8zwwiiPI7njT2F/view?usp=sharing"
                target="_blank"
                variant="bordered"
                size="lg"
                className="text-base rounded-full shadow-none"
              >
                <Download className="!h-5 !w-5" /> Resume
              </Button>
            </div>
          </div>
          <div className="w-full lg:aspect-auto lg:w-[720px] my-auto bg-accent rounded-xl">
            <BoxReveal duration={0.8}>
              <Image
                priority
                width={720}
                height={720}
                aria-label={"Muhammad Asif's profile picture"}
                src="/images/muhammadasif-about.jpeg"
                className="object-cover object-center rounded"
                alt={"Muhammad Asif's profile picture"}
              />
            </BoxReveal>
          </div>
        </div>
      </div>
      <Stats />
      <Skills />
      <div id="experience">
        <Experience all />
      </div>
    </section>
  );
};

export default Index;
