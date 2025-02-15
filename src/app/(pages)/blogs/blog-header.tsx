"use client";

import {categories} from "@/lib/data";
import {Button} from "@heroui/button";
import {Chip} from "@heroui/chip";
import {Input} from "@heroui/input";
import {Select, SelectItem} from "@heroui/select";
import {motion} from "framer-motion";
import {Filter, Rss} from "lucide-react";

const BlogHeader = () => {
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
              Tech <span className="text-success"> Chronicles</span>
            </h1>
            <p className="text-black/50 dark:text-white/50 md:text-lg text-sm mx-auto">
              Exploring software development, practices, and industry insights. Stay ahead with the
              latest trends.
            </p>
          </div>
          <div className="flex md:justify-end gap-2">
            <Button variant="flat" radius="sm">
              <Rss className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
            <Button color="secondary" radius="sm">
              Write a Post
            </Button>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex-1">
            <Input radius="sm" placeholder="Search articles..." />
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

export default BlogHeader;
