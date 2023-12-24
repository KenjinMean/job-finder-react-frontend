import React from "react";
import { Navigate } from "react-router-dom";
import { authRoutes } from "../../constants/routes";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

export default function ProtectedRouteUtil({ component: Component }) {
  const { token } = useAuthenticationStore();

  if (!token) {
    return <Navigate to={authRoutes.authLoginPage} replace />;
  }

  return Component;
}
