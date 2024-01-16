import React from "react";

import { useThemeStore } from "../../services/state/ThemeStore";

import ModalUtil from "../utils/Modal.Util";
import ThemeSwitchUiComponent from "../UI/ThemeSwitch.Ui.Component";

export default function SettingsModalComponent() {
  const { theme, setTheme } = useThemeStore();

  return (
    <ModalUtil modalTitle="Options">
      <div className="flex flex-col gap-5 p-5">
        <div className="p-5 border rounded-md border-border-100 bg-background-gray200">
          <h2 className="mb-5 text-xl">Display</h2>
          <div className="flex justify-between">
            <span>Dark Mode</span>
            <ThemeSwitchUiComponent theme={theme} toggleTheme={setTheme} />
          </div>
        </div>

        <div className="p-5 border rounded-md border-border-100 bg-background-gray200">
          <h2 className="mb-5 text-xl">Account</h2>
          <div className="flex justify-between">
            <span>Close Account</span>
            <button>close account button</button>
          </div>
        </div>
      </div>
    </ModalUtil>
  );
}
