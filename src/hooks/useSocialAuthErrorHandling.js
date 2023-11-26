/**
 * useSocialAuthErrorHandling is a custom React hook designed to handle error messages
 * from social authentication providers (e.g., GitHub, Google). It extracts error messages
 * from the query parameters of the current URL, interprets specific cases, and updates
 * the application state accordingly. This hook is intended for use in components that
 * involve social authentication and error handling.
 *
 * @returns {void}
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuthenticationStore } from "../services/state/AuthenticationStore";

const useSocialAuthErrorHandling = () => {
  const location = useLocation();
  const { setSocialServiceLoginError } = useAuthenticationStore();
  const resetUrlPath = () => {
    const newURL = `${window.location.origin}${window.location.pathname}`;
    window.history.replaceState({}, document.title, newURL);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get("error");

    if (errorMessage) {
      let errorText = decodeURIComponent(errorMessage);

      if (errorMessage === "This email already exists") {
        errorText = errorMessage;
      } else if (errorMessage === "Email already associated with GitHub") {
        errorText =
          "Login using Google failed, Email already associated with another Auth service provider";
      } else if (errorMessage === "Email already associated with Google") {
        errorText =
          "Login using Github failed, Email already associated with another Auth Service Provider";
      }

      setSocialServiceLoginError(errorText);
      resetUrlPath();
    }
  }, [location, setSocialServiceLoginError]);
};

export default useSocialAuthErrorHandling;
