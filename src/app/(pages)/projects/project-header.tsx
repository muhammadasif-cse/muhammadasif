"use client";

import {categories} from "@/lib/data";
import {Button} from "@heroui/button";
import {Chip} from "@heroui/chip";
import {Input} from "@heroui/input";
import {Select, SelectItem} from "@heroui/select";
import {motion} from "framer-motion";
import {Filter} from "lucide-react";

const ProjectHeader = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      className="px-4 py-12 md:py-16 bg-background container"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="space-y-4 col-span-2 flex-1">
            <h1 className="text-4xl font-bold mb-4">
              The Ultimate
              <span className="text-success"> Development Work</span>
            </h1>
            <p className="text-black/50 dark:text-white/50 md:text-lg text-sm mx-auto">
              I build beautiful products using the latest technologies and frameworks. I am a
              passionate developer and designer who loves building amazing products.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex-1">
            <Input radius="sm" placeholder="Search projects..." />
          </div>
          <Select radius="sm" className="max-w-xs" placeholder="Filter by category">
            {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
          <Button variant="flat" isIconOnly radius="sm" color="secondary">
            <Filter className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Chip color="secondary">All</Chip>
          <Chip color="secondary" variant="flat">
            Technology
          </Chip>
          <Chip color="secondary" variant="flat">
            Design
          </Chip>
          <Chip color="secondary" variant="flat">
            Business
          </Chip>
          <Chip color="secondary" variant="flat">
            Marketing
          </Chip>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHeader;
