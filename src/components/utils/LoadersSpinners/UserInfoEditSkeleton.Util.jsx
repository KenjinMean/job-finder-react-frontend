import React from "react";
import ModalUtil from "../Modal.Util";

export default function UserInfoEditSkeletonUtil() {
  return (
    <ModalUtil>
      <div className="flex flex-col w-full h-screen max-w-3xl mx-auto border rounded-md sm:mt-16 sm:h-fit">
        <div className="flex items-center justify-between p-5 border-b">
          <div className="w-32 h-8 rounded-full pulse"></div>
        </div>
        <div role="status" className="flex flex-col gap-5 p-5">
          <div>
            <div className="h-4 rounded-full pulse  w-24 mb-2.5"></div>
            <div className="h-8 rounded-md pulse"></div>
          </div>
          <div>
            <div className="h-4 rounded-full pulse  w-48 mb-2.5"></div>
            <div className="h-8 rounded-md pulse"></div>
          </div>
          <div>
            <div className="h-4 rounded-full pulse  w-28 mb-2.5"></div>
            <div className="h-8 rounded-md pulse w-80"></div>
          </div>
          <div className="flex flex-row-reverse">
            <div className="w-20 h-6 rounded-full pulse"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </ModalUtil>
  );
}
