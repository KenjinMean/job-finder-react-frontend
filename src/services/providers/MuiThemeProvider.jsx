import React from "react";

import { useThemeStore } from "../state/ThemeStore";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

export default function MuiThemeProvider({ children }) {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme } = useThemeStore();

  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === "dark" ? "dark" : "light",
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
