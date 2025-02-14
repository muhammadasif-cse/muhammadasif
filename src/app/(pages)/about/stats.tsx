"use client";

import {Card, CardBody} from "@heroui/card";
import {motion} from "framer-motion";

interface StatsData {
  value: string;
  label: string;
}

const statsData: StatsData[] = [
  {value: "40", label: "Projects Completed"},
  {value: "2+", label: "Years of Experience"},
  {value: "50%", label: "Increase in Efficiency"},
  {value: "12+", label: "Happy Clients"},
  {value: "100%", label: "Client Satisfaction"},
];

const Stats = () => {
  return (
    <section className="py-12">
      <div>
        <Card className="relative overflow-hidden border-0" shadow="sm">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 border-8 dark:border-white/20 border-black/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 border-8 dark:border-white/20 border-black/20 rounded-full translate-x-1/2 translate-y-1/2" />

          <CardBody className="p-8 md:p-12">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {statsData.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.6, delay: index * 0.1}}
                  className="relative group"
                >
                  <div className="flex text-center flex-col space-y-2 p-4 rounded-lg transition-colors">
                    <motion.span
                      initial={{scale: 0.8}}
                      animate={{scale: 1}}
                      transition={{duration: 0.5, delay: index * 0.1}}
                      className="text-4xl font-bold tracking-tight"
                    >
                      {achievement.value}
                    </motion.span>
                    <p className="text-black/50 dark:text-white/50 group-hover:text-secondary transition-colors">
                      {achievement.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Stats;
