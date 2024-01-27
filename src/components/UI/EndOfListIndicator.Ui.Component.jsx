import React from "react";

export default function EndOfListIndicatorUiComponent({ message }) {
  return (
    <div className="w-full my-5 text-lg font-semibold text-center text-content-black">
      {message}
    </div>
  );
}
