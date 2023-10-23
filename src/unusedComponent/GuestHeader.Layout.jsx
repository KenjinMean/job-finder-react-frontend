import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../../assets/logo/JobFinderLogo.png";

export default function GuestHeaderLayout() {
  return (
    <header className="px-5 py-5 shadow-sm lg:px-10 bg-background-100">
      <ul className="flex items-center gap-2 mx-auto max-w-screen-2xl">
        <li>
          <a href="">
            <div className="w-36">
              <img src={appLogo} alt="" />
            </div>
          </a>
        </li>
        <li className="ml-auto">
          <Link to="/login" className="text-xl font-bold text-foreground-100">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}
