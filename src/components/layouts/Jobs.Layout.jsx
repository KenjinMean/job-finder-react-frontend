import React from "react";
import { Outlet } from "react-router-dom";

export default function JobsLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <Outlet />
    </div>
  );
}
