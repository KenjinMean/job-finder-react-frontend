import React from "react";
import { motion } from "framer-motion";

export default function JobListSkeletonUtil() {
  const getRandomWidth = () => {
    const widthClasses = ["1/5", "1/4", "1/3", "1/2", "full", "3/4"];
    const randomIndex = Math.floor(Math.random() * widthClasses.length);
    return widthClasses[randomIndex];
  };
  const containerAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerAnimation}
      className="overflow-hidden border rounded-md border-border-100"
    >
      <div className="flex flex-col gap-2 p-5 ">
        <div
          className={`w-${getRandomWidth()} h-10 rounded-md animate-pulse bg-background-gray300_hoover`}
        ></div>
        <div
          className={`w-${getRandomWidth()} h-3 rounded-md animate-pulse bg-background-gray300_hoover`}
        ></div>
        <div
          className={`w-${getRandomWidth()} h-3 rounded-md animate-pulse bg-background-gray300_hoover`}
        ></div>
        <div
          className={`w-${getRandomWidth()} h-3 rounded-md animate-pulse bg-background-gray300_hoover`}
        ></div>
      </div>
    </motion.div>
  );
}
