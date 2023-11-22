import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ErrorNotFoundUiComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full">
      <div className="text-center">
        <div className="inline-flex p-4 bg-yellow-100 rounded-full">
          <div className="p-4 bg-yellow-200 rounded-full stroke-yellow-600">
            <svg
              className="w-16 h-16"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
          404 - Page not found
        </h1>
        <p className="mt-5 text-slate-600 lg:text-lg">
          The page you are looking for doesn't exist or <br />
          has been removed. You can return to the{" "}
          <Link to="/jobs" className="text-blue-500 hover:text-blue-700">
            Home page
          </Link>{" "}
          or{" "}
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => navigate(-1)}
          >
            {" "}
            Go Back
          </button>
          .
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
