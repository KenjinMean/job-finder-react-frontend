import React from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import { Outlet } from "react-router-dom";

export default function UserProfileLayout() {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex justify-center">
      <Outlet />
    </div>
  );
}
