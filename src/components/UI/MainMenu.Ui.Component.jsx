import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { authRoutes } from "../../constants/RoutesPath.Constants";
import { grow } from "../../constants/animationVariants.Constants";

import useGetDeviceWidth from "../../hooks/useGetDeviceWidth";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

import ThemeToggleSwitch from "./ThemeToggleSwitch/ThemeToggleSwitch";
import ButtonClosePrimaryUiComponent from "./ButtonClosePrimary.Ui.Component";

const MainMenuUiComponent = React.forwardRef(
  ({ id, isMenuOpen, closeMenu, ...restProps }, ref) => {
    const { token } = useAuthenticationStore();

    const deviceWidth = useGetDeviceWidth();

    // 640 tailwind css small device breakpoint
    const isMobile = deviceWidth <= 640;

    return (
      <AnimatePresence>
        {(isMenuOpen || !isMobile) && (
          <motion.ul
            variants={grow}
            initial={`${isMobile ? "hidden" : ""}`}
            animate="visible"
            exit="hidden"
            id={id}
            ref={ref}
            {...restProps}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 font-medium text-center sm:gap-0 bg-background-gray_50 text-content-black sm:relative sm:ml-auto sm:flex-row"
          >
            {/* close main menu on mobile */}
            <motion.li className="absolute top-5 right-5 sm:hidden">
              <ButtonClosePrimaryUiComponent
                onClick={closeMenu}
                aria-label="Close menu"
                aria-controls={id}
              />
            </motion.li>

            <ThemeToggleSwitch />

            {!token && (
              <motion.li
                className="w-full font-semibold hover:text-accent-blue500"
                whileHover={{ scale: 1.1 }}
                role="menuitem"
              >
                <Link
                  to={authRoutes.authLoginPage}
                  aria-label="Login to your account"
                  className="p-2"
                >
                  login
                </Link>
              </motion.li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    );
  }
);

export default MainMenuUiComponent;
