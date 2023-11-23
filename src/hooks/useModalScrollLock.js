// INSPIRATION https://blog.logrocket.com/building-react-modal-module-with-react-router/ on "Preventing the scroll underneath the modal" section
import { useEffect } from "react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const useModalScrollLockRef = create(
  devtools((set) => ({
    modalScrollLockRef: null,
    setModalScrollLockRef: (ref) => set({ modalScrollLockRef: ref }),
  }))
);

export function useModalScrollLock() {
  const { modalScrollLockRef, setModalScrollLockRef } = useModalScrollLockRef();

  /**

    call this function to the modal where you want to disable
    the scroll of the parent component when modal is active/openend
    
  */
  const setScrollLockOnModalActive = () => {
    useEffect(() => {
      const observerRefValue = modalScrollLockRef.current;
      disableBodyScroll(observerRefValue);
      return () => {
        if (observerRefValue) {
          enableBodyScroll(observerRefValue);
        }
      };
    }, [modalScrollLockRef]);
  };

  /**

    call this function to parent of modal with ref of the component to
    where you want the scroll to lock when the modal is open

    const modalScrollLockRef = useRef()
    setModalParentRef(modalScrollLockRef)
    
  */
  const setModalParentRef = (ref) => {
    useEffect(() => {
      setModalScrollLockRef(ref);
    }, []);
  };

  return {
    setModalParentRef,
    setScrollLockOnModalActive,
  };
}
