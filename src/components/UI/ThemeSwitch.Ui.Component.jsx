import React from "react";
import { Switch } from "@headlessui/react";

export default function ThemeSwitchUiComponent({ theme, toggleTheme }) {
  return (
    <Switch
      checked={theme}
      onChange={toggleTheme}
      className={`${
        theme === "dark" ? "bg-accent-blue500" : "bg-background-slate300"
      } relative inline-flex h-6 w-11 items-center rounded-full border border-border-100`}
    >
      <span className="sr-only">Dark Mode</span>
      <span
        className={`${
          theme === "dark" ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
