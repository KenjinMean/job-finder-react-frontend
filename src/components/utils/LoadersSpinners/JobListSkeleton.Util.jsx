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
    >
      <div className="flex flex-col gap-2 p-5 mt-5 border rounded-md bg-background-gray300 border-border-100">
        <div className={`w-${getRandomWidth()} h-10 rounded-md pulse`}></div>
        <div className={`w-${getRandomWidth()} h-3 rounded-md pulse`}></div>
        <div className={`w-${getRandomWidth()} h-3 rounded-md pulse`}></div>
        <div className={`w-${getRandomWidth()} h-3 rounded-md pulse`}></div>
      </div>
    </motion.div>
  );
}
