import React from "react";
import { Link } from "react-router-dom";

export default function LinkEditUiComponent({ to, className, ...restProps }) {
  const { ...linkProps } = restProps;

  return (
    <div className="group">
      <Link
        className={`p-1 block rounded-full border border-transparent group-hover:bg-background-slate300 focus:ring-4 focus:outline-none focus:ring-accent-blue500 ${className}`}
        to={to}
        {...linkProps}
        aria-label={`Edit${to}`}
        role="link"
      >
        <svg
          width="21px"
          height="21px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-content-black group-hover:text-content-black_inverted"
        >
          <title />

          <g id="Complete">
            <g id="edit">
              <g>
                <path
                  d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />

                <polygon
                  fill="none"
                  points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </g>
            </g>
          </g>
        </svg>
        {/* <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-content-black"
        >
          <path
            d="M15.4998 5.49994L18.3282 8.32837M3 20.9997L3.04745 20.6675C3.21536 19.4922 3.29932 18.9045 3.49029 18.3558C3.65975 17.8689 3.89124 17.4059 4.17906 16.9783C4.50341 16.4963 4.92319 16.0765 5.76274 15.237L17.4107 3.58896C18.1918 2.80791 19.4581 2.80791 20.2392 3.58896C21.0202 4.37001 21.0202 5.63634 20.2392 6.41739L8.37744 18.2791C7.61579 19.0408 7.23497 19.4216 6.8012 19.7244C6.41618 19.9932 6.00093 20.2159 5.56398 20.3879C5.07171 20.5817 4.54375 20.6882 3.48793 20.9012L3 20.9997Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </Link>
    </div>
  );
}
