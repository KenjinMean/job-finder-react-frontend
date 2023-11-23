// useAuthErrorHandling.js
import { useEffect } from "react";

const useSocialAuthErrorHandling = (location, setAuthServiceError) => {
  const resetUrlPath = () => {
    const newURL = `${window.location.origin}${window.location.pathname}`;
    window.history.replaceState({}, document.title, newURL);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get("error");

    if (errorMessage) {
      let errorText = decodeURIComponent(errorMessage);

      // Customize error messages based on your needs
      if (errorMessage === "This email already exists") {
        errorText = errorMessage;
      } else if (errorMessage === "Email already associated with GitHub") {
        errorText =
          "Login using Google failed, Email already associated with another Auth service provider";
      } else if (errorMessage === "Email already associated with Google") {
        errorText =
          "Login using Github failed, Email already associated with another Auth Service Provider";
      }

      setAuthServiceError(errorText);
      resetUrlPath();
    }
  }, [location, setAuthServiceError]);
};

export default useSocialAuthErrorHandling;
