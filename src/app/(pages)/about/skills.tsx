import {BoxReveal} from "@/components/ui/box-reveal";
import {skills} from "@/lib/data";
import {Card, CardBody} from "@heroui/card";
import {motion} from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div>
        <motion.div
          aria-label="skills"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">
            My Tech Stack <span className="text-secondary"> & Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-black/50 dark:text-white/50">
            A diverse skill set covering full-stack development, software development, backend
            services, databases, cloud, and modern frontend frameworks.
          </p>
        </motion.div>
        <div className="grid max-w-screen-lg gap-3 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Card key={skill.id} shadow="sm">
              <BoxReveal duration={0.2 + index * 0.1}>
                <CardBody>
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                      <Image
                        aria-label={skill.name}
                        draggable={false}
                        className="rounded-full"
                        width="32"
                        height="32"
                        alt={skill.name}
                        src={`${process.env.SKILL_HOST}?i=${skill.img}`}
                      />
                    </div>
                    <span className="text-sm font-bold tracking-tight text-warning">
                      {skill.note}
                    </span>
                  </div>
                  <span className="text-lg font-bold tracking-tight text-secondary">
                    {skill.name}
                  </span>
                  <p className="mt-1 text-foreground/80 text-[15px]">{skill.message}</p>
                </CardBody>
              </BoxReveal>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
