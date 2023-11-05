import React from "react";

export default function JobListSkeletonUtil() {
  const getRandomWidth = () => {
    const widthClasses = ["1/5", "1/4", "1/3", "1/2", "full", "3/4"];
    const randomIndex = Math.floor(Math.random() * widthClasses.length);
    return widthClasses[randomIndex];
  };

  return (
    <div className="flex flex-col gap-2 mt-5 bg-white">
      <div className={`w-${getRandomWidth()} h-10 rounded-md pulse`}></div>
      <div className={`w-${getRandomWidth()} h-3 rounded-md pulse`}></div>
      <div className={`w-${getRandomWidth()} h-3 rounded-md pulse`}></div>
      <div className={`w-${getRandomWidth()} h-3 rounded-md pulse`}></div>
    </div>
  );
}
