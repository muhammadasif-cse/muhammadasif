import { IProjects } from "@/lib/data";
import { Button, Card, CardBody, Chip } from "@heroui/react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
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
      className="h-fit mt-20 flex items-center justify-center sticky top-40"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 70}px)`,
        }}
        className={`flex flex-col relative w-full rounded-md origin-top overflow-hidden p-3`}
      >
        <Card>
          <CardBody>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
              <div className={`relative w-full rounded-lg overflow-hidden`}>
                <motion.div
                  className={`w-full h-full`}
                  style={{ scale: imageScale }}
                >
                  <Image
                    height={500}
                    width={500}
                    draggable={false}
                    src={data?.image}
                    alt="image"
                    className="object-cover max-h-80 object-center w-[100vw]"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xl md:text-2xl font-black tracking-tight mb-4 text-secondary">
                  {data?.title}
                </p>

                <p className="text-base md:block hidden text-justify text-black/50 dark:text-white/50">
                  {data.description}
                </p>
                <p className="text-base md:hidden block text-justify text-black/50 dark:text-white/50">
                  {data.description.substring(0, 160)}...
                </p>
                <div className="mt-5 flex flex-wrap gap-1">
                  {data?.techStack?.map((data) => (
                    <Chip key={data} color="success" variant="flat">
                      {data}
                    </Chip>
                  ))}
                </div>
                <div className="mt-3 space-x-1">
                  <Button
                    variant="flat"
                    isIconOnly
                    as={Link}
                    href={data.liveUrl}
                  >
                    <LinkIcon />
                  </Button>
                  <Button
                    variant="flat"
                    isIconOnly
                    as={Link}
                    href={data.githubUrl}
                  >
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
