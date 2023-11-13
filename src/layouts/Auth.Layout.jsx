import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen text-gray-900 bg-gray-50">
      <div className="flex items-center justify-center flex-1 bg-white border border-background-400 sm:max-w-xl sm:m-8 sm:rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}
