import React from "react";
import { Navigate } from "react-router-dom";
import { authLoginPageRoute } from "../../constants/routes";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

export default function ProtectedRouteUtil({ component: Component }) {
  const { token } = useAuthenticationStore();

  if (!token) {
    return <Navigate to={authLoginPageRoute} replace />;
  }

  return Component;
}
