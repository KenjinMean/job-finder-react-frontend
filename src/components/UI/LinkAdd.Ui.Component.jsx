import React from "react";
import { Link } from "react-router-dom";

import { addIcon } from "../../assets/icons";

export default function LinkAddUiComponent({ to, className, ...restProps }) {
  const { ...linkProps } = restProps;
  return (
    <div className="group">
      <Link
        className={`p-1 block transition-all rounded-full group-hover:bg-background-slate300 focus:ring-4 focus:outline-none focus:ring-accent-blue500 ${className}`}
        to={to}
        {...linkProps}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors text-content-black group-hover:text-content-black_inverted "
        >
          <title />

          <g id="Complete">
            <g data-name="add" id="add-2">
              <g>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  x2="12"
                  y1="19"
                  y2="5"
                />

                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="5"
                  x2="19"
                  y1="12"
                  y2="12"
                />
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
}
