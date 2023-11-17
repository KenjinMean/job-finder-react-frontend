// REFRESH TOKEN SOURCE: https://katifrantz.com/the-ultimate-guide-to-jwt-client-side-authentication-stop-using-local-storage
import { createContext, useContext, useRef, useState } from "react";

const StateContex = createContext({
  refreshTimeoutRef: null,
  isRefreshingToken: null,
  user: null,
  token: null,
  setIsTokenRefreshing: () => {},
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const refreshTimeoutRef = useRef(null);
  const [isRefreshingToken, setIsTokenRefreshing] = useState(false);

  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem("USER")) || {}
  );

  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setUser = (user) => {
    _setUser(user);
    if (user) {
      localStorage.setItem("USER", JSON.stringify(user));
    } else {
      localStorage.removeItem("USER");
    }
  };

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token.access_token);
      localStorage.setItem("ACCESS_TOKEN_EXPIRES_IN", token.expires_in);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("ACCESS_TOKEN_EXPIRES_IN");
    }
  };

  return (
    <StateContex.Provider
      value={{
        refreshTimeoutRef,
        isRefreshingToken,
        user,
        token,
        setUser,
        setToken,
        setIsTokenRefreshing,
      }}
    >
      {children}
    </StateContex.Provider>
  );
};

export const useStateContext = () => useContext(StateContex);
