import React from "react";
import LoadingSpinnerUtil from "./LoadingSpinnder.Util";

export default function ModalSpinnerUtil() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen max-w-3xl mx-auto sm:h-[25rem]">
      <LoadingSpinnerUtil />
    </div>
  );
}
