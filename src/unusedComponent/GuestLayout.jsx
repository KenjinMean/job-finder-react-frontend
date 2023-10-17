import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import AutoCompleleteSearchBar from "../views/AutoCompleleteSearchBar";
import { JobsProvider } from "../context/JobsContext";
import axiosClient from "../axios-client";
import FilterSearchBar from "../views/FilterSearchBar";
import GuestHeader from "../views/HeaderAndFooter/GuestHeader";

export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col border border-red-700">
      {/* <header className="px-10 py-5 bg-gray-200 shadow-sm">
        <ul className="flex gap-2">
          <li>
            <a href="#" className="text-2xl font-bold font-primary">
              Job Finder
            </a>
          </li>
          <li className="ml-auto">
            <Link
              to="/login"
              className="text-xl font-bold text-white hover:text-indigo-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </header> */}
      <GuestHeader />
      {/* <section>
        <FilterSearchBar />
      </section> */}

      <main className="flex-grow px-5 md:px-28 lg:px-32">
        <Outlet />
      </main>

      <footer className="p-5 bg-gray-500">
        <ul className="flex gap-2">
          <li>
            <a href="#" className="text-2xl font-bold font-primary">
              Job Finder
            </a>
          </li>
          <li className="ml-auto">
            <Link
              to="/login"
              className="text-xl font-bold text-white hover:text-indigo-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
