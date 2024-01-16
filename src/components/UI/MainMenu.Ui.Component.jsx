import React from "react";
import { authRoutes } from "../../constants/RoutesPath.Constants";
import { useOpenModalOverlay } from "../../hooks/useOverlayFunctions";
import { GlobalModals } from "../../constants/ModalNames.Constants";
import { Link } from "react-router-dom";
import ButtonClosePrimaryUiComponent from "./ButtonClosePrimary.Ui.Component";
import { useAuthenticationStore } from "../../services/state/AuthenticationStore";

const MainMenuUiComponent = React.forwardRef(
  ({ id, isMenuOpen, closeMenu }, ref) => {
    const { token } = useAuthenticationStore();
    return (
      <div
        id={id}
        ref={ref}
        className={`fixed inset-0 z-50 flex items-center sm:order-1 sm:flex h-screen bg-background-gray300 sm:relative sm:bg-transparent sm:h-auto sm:ml-auto ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="absolute top-5 right-5 sm:hidden">
          <ButtonClosePrimaryUiComponent onClick={closeMenu} />
        </div>

        <ul className="flex flex-col items-center w-full py-5 text-2xl font-medium text-center rounded-sm bg-background-gray300 text-accent-200 sm:gap-0 sm:text-lg sm:p-0 sm:flex-row sm:mt-0 sm:border-0 sm:bg-transparent ">
          <li className="w-full p-2 font-semibold ">
            <a href="#">About</a>
          </li>
          <li className="w-full p-2 font-semibold ">
            <Link to={useOpenModalOverlay(GlobalModals.settingsModal.name)}>
              Options
            </Link>
          </li>

          {!token && (
            <li className="w-full p-2 font-semibold ">
              <Link to={authRoutes.authLoginPage}>login</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
);

export default MainMenuUiComponent;
