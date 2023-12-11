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
      <div className="flex flex-col gap-5 p-5 mt-5 bg-white border rounded-md border-background-400">
        <div className="flex justify-between">
          <div className={"w-28 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-44 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-36 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-28 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={`w-40 h-5 rounded-md pulse`}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-28 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-16 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-20 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-28 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-44 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-36 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-28 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={`w-40 h-5 rounded-md pulse`}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-28 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-16 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
        <div className="flex justify-between">
          <div className={"w-20 h-5 rounded-md pulse"}></div>
          <div className={"w-10 h-5 rounded-md pulse"}></div>
        </div>
      </div>
    </motion.div>
  );
}
