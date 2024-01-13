import React from "react";
import ModalUtil from "../Modal.Util";

export default function UserAddSkillSkeletonUtil() {
  return (
    <ModalUtil>
      <div className="flex flex-col w-full h-screen max-w-3xl mx-auto border rounded-md sm:mt-16 sm:h-fit">
        <div className="flex items-center justify-between p-5 border-b">
          <div className="w-32 h-8 rounded-full pulse"></div>
        </div>
        <div className="p-5">
          <div className="w-48 h-8 mb-5 rounded-full pulse"></div>

          <div className="flex flex-col flex-grow gap-3 rounded-md sm:p-5 sm:border">
            <div className="flex items-center w-full">
              <div className="w-32 h-6 rounded-full pulse"></div>
              <div className="w-24 h-6 rounded-full ms-2 pulse"></div>
              <div className="w-full h-6 rounded-full ms-2 pulse"></div>
            </div>
            <div className="flex items-center w-full ">
              <div className="w-32 h-6 rounded-full ms-2 pulse"></div>
              <div className="h-6 rounded-full ms-2 pulse w-80"></div>
              <div className="w-32 h-6 rounded-full ms-2 pulse"></div>
              <div className="w-24 h-6 rounded-full ms-2 pulse"></div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-24 h-6 rounded-full ms-2 pulse"></div>

              <div className="h-6 rounded-full ms-2 pulse w-80"></div>
              <div className="h-6 rounded-full ms-2 pulse w-80"></div>
              <div className="h-6 rounded-full ms-2 pulse w-80"></div>
            </div>
            <div className="flex items-center w-full ">
              <div className="w-full h-6 rounded-full ms-2 pulse"></div>
              <div className="w-full h-6 rounded-full ms-2 pulse"></div>
              <div className="w-24 h-6 rounded-full ms-2 pulse"></div>
            </div>
            <div className="flex items-center w-full ">
              <div className="w-32 h-6 rounded-full ms-2 pulse"></div>
              <div className="w-24 h-6 rounded-full ms-2 pulse"></div>
              <div className="w-full h-6 rounded-full ms-2 pulse"></div>
            </div>
            <div className="flex items-center w-full ">
              <div className="w-full h-6 rounded-full ms-2 pulse"></div>
              <div className="h-6 rounded-full ms-2 pulse w-80"></div>
              <div className="w-full h-6 rounded-full ms-2 pulse"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </ModalUtil>
  );
}
