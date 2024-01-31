import React from "react";
import { useSetPageTitle } from "../../../hooks/useSetPageTitle";

export default function ErrorServerErrorUiComponent({ resetErrorBoundary }) {
  useSetPageTitle("Server Error");
  return (
    <div className="flex items-center justify-center w-full p-5 bg-background-white">
      <div className="text-center">
        <div className="inline-flex p-4 bg-red-100 rounded-full">
          <div className="p-4 bg-red-200 rounded-full stroke-red-600">
            <svg
              className="w-16 h-16"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17 16L22 21M22 16L17 21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-content-black lg:text-[50px]">
          500 - Server error
        </h1>
        <p className="mt-5 text-content-gray lg:text-lg">
          Oops something went wrong. Try to{" "}
          <button
            className="inline-block text-accent-blue500 hover:text-accent-blue700"
            onClick={resetErrorBoundary}
          >
            refresh
          </button>{" "}
          this page or <br /> feel free to contact us if the problem presists.
        </p>
        <a
          href="https://postsrc.com/components/tailwind-css-error-pages"
          target="_blank"
          className="flex justify-center mt-5"
        >
          <img
            className="w-auto h-12"
            src="https://postsrc.com/img/attr.png"
            alt="PostSrc logo"
          />
        </a>
      </div>
    </div>
  );
}
