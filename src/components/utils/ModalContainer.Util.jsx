import React, { Fragment, useEffect, useRef, useState } from "react";
import { useModalScrollLock } from "../../hooks/useModalScrollLock";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { userProfilePageRoute } from "../../constants/routes";

export default function ModalContainerUtil({ children, navigateOnClose }) {
  const navigate = useNavigate();

  // is ready prevents the click source from triggering handleOutsideClick on mount
  const [isReady, setIsReady] = useState(false);
  const { setScrollLockActive } = useModalScrollLock();
  const mountElement = document.getElementById("overlays");

  setScrollLockActive();

  useEffect(() => {
    setIsReady(true);

    const handleOutsideClick = (e) => {
      if (isReady && !e.target.closest(".modal-content")) {
        navigate(navigateOnClose);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      setIsReady(false);
    };
  }, [isReady]);

  return createPortal(
    <Fragment>
      <div className="fixed left-0 right-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none top-5 focus:outline-none">
        <div className="modal-content">{children}</div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </Fragment>,
    mountElement
  );
}
