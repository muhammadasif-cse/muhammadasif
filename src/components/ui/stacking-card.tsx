import { IProjects } from "@/lib/data";
import { Button, Card, CardBody, CardHeader, Chip, Image } from "@heroui/react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface IStackingCardProps {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  data: IProjects;
}
export const StackingCard: React.FC<IStackingCardProps> = ({
  i,
  data,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  console.log("data", data);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 70}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-fit w-full rounded-md origin-top overflow-hidden`}
      >
        <Card>
          <CardHeader className="justify-center">
            <h2 className="xl:text-3xl md:text-2xl text-xl text-center font-semibold text-slate-800 dark:text-slate-200">
              {data?.title}
            </h2>
          </CardHeader>
          <CardBody>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className={`relative w-full rounded-lg overflow-hidden`}>
                <motion.div
                  className={`w-full h-full`}
                  style={{ scale: imageScale }}
                >
                  <Image
                    src={data?.image}
                    alt="image"
                    className="object-cover h-full"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base md:block hidden text-justify text-slate-800 dark:text-slate-200">
                  {data.description}
                </p>
                <p className="text-base md:hidden block text-justify text-slate-800 dark:text-slate-200">
                  {data.description.substring(0, 160)}...
                </p>
                <div className="mt-5 flex flex-wrap gap-1">
                  {data?.techStack?.map((data) => (
                    <Chip key={data} color="secondary" variant="flat">
                      {data}
                    </Chip>
                  ))}
                </div>
                <div className="mt-3 space-x-1">
                  <Button isIconOnly as={Link} href={data.liveUrl}>
                    <LinkIcon />
                  </Button>
                  <Button isIconOnly as={Link} href={data.githubUrl}>
                    <GithubIcon />
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};
