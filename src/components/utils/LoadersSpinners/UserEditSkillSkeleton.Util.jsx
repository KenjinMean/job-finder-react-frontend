import React from "react";
import { motion } from "framer-motion";

export default function UserEditSkillSkeletonUtil() {
  const getRandomWidth = () => {
    const widthClasses = ["40", "28", "52"];
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
      <div
        role="status"
        className="p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse md:p-6 sm:mt-10"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="h-4 pulse  rounded-full  w-24 mb-2.5"></div>
            <div className="w-32 h-2 rounded-full pulse"></div>
          </div>
          <div className="w-12 h-4 rounded-full pulse"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-4 pulse  rounded-full  w-24 mb-2.5"></div>
            <div className="w-32 h-2 rounded-full pulse"></div>
          </div>
          <div className="w-12 h-4 rounded-full pulse"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-4 pulse  rounded-full  w-24 mb-2.5"></div>
            <div className="w-32 h-2 rounded-full pulse"></div>
          </div>
          <div className="w-12 h-4 rounded-full pulse"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-4 pulse  rounded-full  w-24 mb-2.5"></div>
            <div className="w-32 h-2 rounded-full pulse"></div>
          </div>
          <div className="w-12 h-4 rounded-full pulse"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-4 pulse  rounded-full  w-24 mb-2.5"></div>
            <div className="w-32 h-2 rounded-full pulse"></div>
          </div>
          <div className="w-12 h-4 rounded-full pulse"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </motion.div>
  );
}
