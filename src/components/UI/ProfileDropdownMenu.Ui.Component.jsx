// SOURCE for dropdown menu: https://headlessui.com/react/menu
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { closeIcon } from "../../assets/icons";
import { userRoutes } from "../../constants/RoutesPath.Constants";
import { grow } from "../../constants/animationVariants.Constants";

import { useApiAuthLogout } from "../../hooks/useApiAuth";
import { useUserStore } from "../../services/state/UserStore";

import UserProfileImageComponent from "../user/UserProfileImage.Component";

// can rename this to userMainProfileDropdownMenu or simillar
export default function ProfileDropdownMenuUiComponent() {
  const { userInfo } = useUserStore();
  const { mutate: logoutFn } = useApiAuthLogout();

  return (
    <Menu>
      {({ open }) => (
        <Fragment>
          <Menu.Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex w-12 h-12 mr-3 overflow-hidden text-sm rounded-full sm:mr-0 focus:ring-4 focus:outline-none focus:ring-accent-blue500"
          >
            {userInfo && (
              <UserProfileImageComponent imageUrl={userInfo?.profile_image} />
            )}
          </Menu.Button>{" "}
          <AnimatePresence mode="wait">
            {open && (
              <Menu.Items
                static
                as={motion.div}
                variants={grow}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 flex flex-col p-5 overflow-hidden text-base list-none sm:border sm:rounded-md sm:h-max sm:left-auto sm:absolute sm:max-w-xs min-w-96 border-border-100 text-content-black bg-background-gray300 border-foreground-300 sm:top-16"
                id="user-dropdown"
              >
                <Menu.Item className="absolute sm:hidden top-5 right-5">
                  {({ close }) => (
                    <button
                      onClick={close}
                      className="p-1 transition-all bg-transparent border rounded-full hover:bg-background-slate300 border-border-100"
                    >
                      <img
                        className="block w-5 h-5"
                        src={closeIcon.path}
                        alt={closeIcon.attribution}
                      />
                    </button>
                  )}
                </Menu.Item>
                <div className="mt-16 sm:mt-0">
                  <span className="block text-lg font-semibold">
                    {userInfo?.first_name} {userInfo?.last_name}
                  </span>
                  <span className="flex-wrap block text-content-gray empty:hidden">
                    {userInfo?.headline}
                  </span>
                </div>

                <Menu.Item
                  as={Link}
                  to={userRoutes.userProfilePage}
                  className="block px-4 py-2 mt-5 text-xl font-medium text-center transition-all border rounded-full border-border-100 text-content-black_inverted hover:text-content-black bg-accent-blue500 hover:bg-accent-purple_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 "
                >
                  View Profile
                </Menu.Item>

                <Menu.Item
                  as="button"
                  className="w-full py-1 mt-5 text-lg sm:text-left sm:text-content-black hover:text-accent-200 hover:underline"
                  onClick={() => {}}
                >
                  Saved jobs
                </Menu.Item>
                <Menu.Item
                  as="button"
                  className="w-full py-1 text-lg sm:text-left sm:text-content-black hover:text-accent-200 hover:underline"
                  onClick={() => logoutFn()}
                >
                  Logout
                </Menu.Item>
              </Menu.Items>
            )}
          </AnimatePresence>
        </Fragment>
      )}
    </Menu>
  );
}
