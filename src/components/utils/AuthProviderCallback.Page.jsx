// FIX the callback page extract the error

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

export default function AuthProviderCallbackPage() {
  const { token, setToken, setUser } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const responseParam = queryParams.get("response");

    try {
      const responseData = JSON.parse(responseParam);

      if (responseData.error) {
      } else {
        const { user } = responseData.original;

        setUser(user);
        setToken(responseData.original);
        setLoading(false);
      }
    } catch (error) {
      console.log("Failed to parse response data", error);
    }
  }, []);

  if (token) {
    return <Navigate to="/" />;
  }

  console.log("on callback page");
  return (
    <div>
      {loading ? "Loading..." : "Authenticated! Redirecting to Dashboard..."}
    </div>
  );
}
