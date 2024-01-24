import React from "react";

import { motion } from "framer-motion";
import MaxWidthWrapperUtil from "../MaxWidthWrapper.Util";

export default function JobDetailSkeletonUtil() {
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  console.log("jobDetails skeleton util");
  return (
    <MaxWidthWrapperUtil className="p-5 border rounded rouned-md border-border-100">
      <motion.div
        initial="initial"
        animate="animate"
        variants={containerAnimation}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col w-full gap-2">
            <div className="w-1/3 h-10 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-1/2 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-3/5 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-1/2 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-1/3 h-10 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-1/2 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-1/2 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
          </div>
          <div className="flex w-full gap-5">
            <div className="w-10 h-5 rounded-full animate-pulse bg-background-gray_50"></div>
            <div className="w-10 h-5 rounded-full animate-pulse bg-background-gray_50"></div>
            <div className="w-10 h-5 rounded-full animate-pulse bg-background-gray_50"></div>
            <div className="w-10 h-5 rounded-full animate-pulse bg-background-gray_50"></div>
            <div className="w-10 h-5 rounded-full animate-pulse bg-background-gray_50"></div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="w-1/3 h-10 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-1/2 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
            <div className="w-1/2 h-3 rounded-md animate-pulse bg-background-gray_50"></div>
          </div>
        </div>
      </motion.div>
    </MaxWidthWrapperUtil>
  );
}
