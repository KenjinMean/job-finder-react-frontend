import React from "react";
import { Link } from "react-router-dom";

export default function GuestHeaderLayout() {
  return (
    <header className="px-10 py-5 shadow-sm bg-indigo-50">
      <ul className="flex gap-2">
        <li>
          <a href="#" className="text-2xl font-bold font-primary">
            Job Finder
          </a>
        </li>
        <li className="ml-auto">
          <Link to="/login" className="text-xl font-bold text-indigo-500">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
}
