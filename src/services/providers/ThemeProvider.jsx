import React, { Fragment, useEffect } from "react";
import { useThemeStore } from "../state/ThemeStore";

export const ThemeProvider = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <Fragment>{children}</Fragment>;
};
