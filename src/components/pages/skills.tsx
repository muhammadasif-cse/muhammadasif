import {ISkills, skills} from "@/lib/data";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Marquee} from "../ui/marquee";

const firstRow = skills.slice(0, skills.length / 2);
const secondRow = skills.slice(skills.length / 2);

const SkillCard = ({img, name, message, note}: ISkills) => {
  return (
    <figure
      className={cn(
        "relative w-52 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          aria-label={name}
          draggable={false}
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={`${process.env.SKILL_HOST}?i=${img}`}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{note}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{message}</blockquote>
    </figure>
  );
};

const Skills = () => {
  return (
    <div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

export default Skills;
