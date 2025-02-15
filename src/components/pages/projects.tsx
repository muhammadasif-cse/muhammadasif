import {projects} from "@/lib/data";
import {Button} from "@heroui/button";
import {Chip} from "@heroui/chip";
import {motion} from "framer-motion";
import {GithubIcon, LinkIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {BoxReveal} from "../ui/box-reveal";

const Projects = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Featured <span className="text-secondary">Work</span>
          </h1>
          <p className="text-black/50 dark:text-white/50 md:text-lg text-sm max-w-2xl mx-auto">
            Explore some of my key projects, showcasing my expertise in building scalable and
            high-performance software solutions.
          </p>
        </motion.div>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {projects?.slice(0, 3)?.map((project) => (
            <div
              key={project.title}
              className="flex flex-col md:flex-row items-start gap-6 md:odd:flex-row-reverse"
            >
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="w-full aspect-[6/4] bg-muted rounded-xl basis-1/2">
                  <div className="w-[90%]] h-[480px] group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black">
                    <figure className="w-full h-60 group-hover:h-56 md:h-80 md:group-hover:h-72 transition-all duration-300 dark:bg-[#180828] bg-[#F2EAFA] p-2 rounded-md relative overflow-hidden">
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
                    <article className="p-4 space-y-2">
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
                      <p className="text-sm leading-normal">{project.highlightDescription}</p>
                      <div className="text-base dark:text-white text-secondary font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300">
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
                  </div>
                </div>
              </BoxReveal>
              <div className="basis-1/2 shrink-0">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h4 className="mb-3 text-3xl font-bold tracking-tighter">{project.title}</h4>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-black/70 dark:text-white/70 text-base text-justify">
                    {project.description}
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <article>
                    <h4 className="text-lg font-semibold mt-4">Key Features</h4>
                    {project.features.map((feature) => {
                      return (
                        <p key={feature} className="flex items-center gap-2 mt-2 ml-2">
                          <span className="text-secondary">•</span> {feature}
                        </p>
                      );
                    })}
                  </article>
                </BoxReveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
