import React from "react";
import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";
import { useThemeStore } from "../state/ThemeStore";

export default function ToastProvider() {
  const { theme } = useThemeStore();
  const mountElement = document.getElementById("toast");

  const toastContainerOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    theme: theme === "light" ? "light" : "dark",
  };

  return createPortal(
    <ToastContainer {...toastContainerOptions} />,
    mountElement
  );
}
