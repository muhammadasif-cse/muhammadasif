"use client";
import {BoxReveal} from "@/components/ui/box-reveal";
import {projects} from "@/lib/data";
import {Button} from "@heroui/button";
import {Card, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {GithubIcon, LinkIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectHeader from "./project-header";

const Project: React.FC = () => {
  return (
    <>
      <ProjectHeader />
      <div className="mt-8 w-full mx-auto space-y-20">
        <div className="grid md:grid-cols-2 lg:gap-4 gap-2">
          {projects?.map((project) => (
            <div key={project.title}>
              <Card>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <CardBody className="group">
                    <figure className="w-full h-60 transition-all duration-300 dark:bg-[#180828] bg-[#F2EAFA] p-2 rounded-md relative overflow-hidden">
                      <div
                        style={{
                          background:
                            "linear-gradient(123.9deg, #6020A0 1.52%, rgba(0, 0, 0, 0) 68.91%)",
                        }}
                        className="absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300"
                      ></div>
                      <Image
                        src={project.image}
                        alt="shoes"
                        width={600}
                        height={600}
                        className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] border-white/50 group-hover:border-4 border-4 group-hover:border-[#9353D3]/50 rounded-lg object-cover transition-all duration-300"
                      />
                    </figure>
                    <article className="md:p-4 pt-4 space-y-2">
                      <div className="flex flex-wrap gap-1 items-center">
                        {project.techStack.map((tech) => (
                          <Chip key={tech} radius="sm" color="secondary" variant="flat">
                            {tech}
                          </Chip>
                        ))}
                      </div>
                      <h1 className="text-base font-semibold capitalize">
                        {project.highlightTitle}
                      </h1>
                      <p className="text-sm leading-normal text-black/60 dark:text-white/60">
                        {project.highlightDescription}
                      </p>
                      <div className="text-base dark:text-white text-secondary font-normal pt-2 flex gap-1 transition-all duration-300">
                        <Button
                          as={Link}
                          target="_blank"
                          href={project.githubUrl}
                          isIconOnly
                          variant="flat"
                          color="secondary"
                          size="sm"
                        >
                          <GithubIcon size={20} />
                        </Button>
                        <Button
                          as={Link}
                          target="_blank"
                          href={project.liveUrl}
                          isIconOnly
                          variant="flat"
                          color="secondary"
                          size="sm"
                        >
                          <LinkIcon size={20} />
                        </Button>
                      </div>
                    </article>
                  </CardBody>
                </BoxReveal>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
