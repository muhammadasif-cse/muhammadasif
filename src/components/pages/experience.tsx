"use client";

import {experience, IExperience} from "@/lib/data";
import {Card, CardBody} from "@heroui/card";
import {Chip} from "@heroui/chip";
import {Progress} from "@heroui/progress";
import {motion} from "framer-motion";
import {ArrowRight, CheckCircle2, Clock} from "lucide-react";

const getStatusIcon = (status: IExperience["status"]) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-4 h-4 text-success" />;
    case "running":
      return <Clock className="w-4 h-4 text-secondary" />;
  }
};

const Experience = ({all}: {all?: boolean}) => {
  const sliceExperience = all ? experience : experience.slice(0, 3);

  return (
    <div className="py-12">
      <motion.div
        aria-label="experience"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          Professional <span className="text-secondary">Experience</span>
        </h1>
        <p className="text-black/50 dark:text-white/50 md:text-lg text-sm max-w-2xl mx-auto">
          A brief overview of my expertise, skills, and the technologies I leverage to develop
          scalable and efficient software solutions.
        </p>
      </motion.div>

      <div className="">
        {sliceExperience?.map((item, index) => (
          <motion.div
            aria-label={item.title}
            key={item.title}
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="mb-8 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px border -ml-4 hidden md:block">
              <div
                className={`w-3 h-3 rounded-full -ml-[6px] ${
                  item.status === "completed"
                    ? "bg-success"
                    : item.status === "running"
                    ? "bg-secondary"
                    : "bg-warning"
                }`}
              />
            </div>

            <Card
              aria-label={item?.title}
              className="p-3 md:p-6 md:ml-4 hover:shadow-lg transition-shadow"
              shadow="sm"
            >
              <CardBody aria-label={item?.status}>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <Chip
                          size="sm"
                          color={item?.status === "completed" ? "success" : "secondary"}
                        >
                          {item.status}
                        </Chip>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50">
                        {getStatusIcon(item.status)}
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <p className="text-black/50 dark:text-white/50 mb-4 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Progress aria-label={item?.title} value={item.progress} className="h-2" />
                    <span className="text-sm text-black/50 dark:text-white/50 w-12">
                      {item.progress}%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.experiences.map((experience, experienceIndex) => (
                      <motion.div
                        key={experience}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: experienceIndex * 0.1}}
                        className="flex items-center gap-2 text-sm"
                      >
                        <ArrowRight className="w-4 h-4 text-black/50 dark:text-white/50" />
                        <span>{experience}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
