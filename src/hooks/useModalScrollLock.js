import { create } from "zustand";
import { useEffect } from "react";
import { devtools } from "zustand/middleware";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const useModalScrollLockRef = create(
  devtools((set) => ({
    targetElementRef: null,
    setTargetElementRef: (ref) => set({ targetElementRef: ref }),
  }))
);
// INSPIRATION https://blog.logrocket.com/building-react-modal-module-with-react-router/ on "Preventing the scroll underneath the modal" section

/**
 * A custom React hook for managing scroll locking when a modal is active.
 *
 * This hook provides functions to disable body scroll when a modal is active
 * and set a parent ref to control scroll locking on the modal's root/parent component.
 *
 * @returns {{
 *   setElementToScrollLockRef: (ref: React.RefObject<HTMLElement>) => void,
 *   setScrollLockActive: () => void
 * }}
 * - `setElementToScrollLockRef`: Function to set the ref of component or element you want to disable scroll.
 * - `setScrollLockActive`: Function to disable the scroll of the ref component set by "setElementToScrollLockRef"  when the modal is active.
 *
 * @example
 * ------- Usage in your modal component --------
 *
 * //access setScrollLockActive from useModalScrollLock
 *  const { setScrollLockActive } = useModalScrollLock();
 *
 * // using conditional statement
 *  if (modalOpen) {
 *    setScrollLockActive();
 *  }
 *
 * ------- Usage in the root/parent component of the modal --------
 *
 * // declare a ref to track root/parent element
 *  const targetElementRef = useRef();
 *
 * // access setElementToScrollLockRef
 *  const { setElementToScrollLockRef } = useModalScrollLock();
 *
 * //pass the root/parent element ref to the setElementToScrollLockRef
 *  setElementToScrollLockRef(targetElementRef);
 *
 */
export function useModalScrollLock() {
  const { targetElementRef, setTargetElementRef } = useModalScrollLockRef();

  /**
    call this function to the modal component where you want to disable
    the scroll of the root/parent component when modal is active/openend
  */
  const setScrollLockActive = () => {
    useEffect(() => {
      const targetElement = targetElementRef.current;
      disableBodyScroll(targetElement);

      // cleanup function to restore scroll on the parent component
      return () => {
        if (targetElement) {
          enableBodyScroll(targetElement);
        }
      };
    }, [targetElementRef]);
  };

  /**
   * Call this function in the parent component or root element
   * with a ref to the component where you want the scroll to lock when the modal is open.
   *
   * // declare a useRef
   * const elementToScrollLockRef = useRef();
   *
   * // access setElementToScrollLockRef from useModalScrollLock
   * const { setElementToScrollLockRef } = useModalScrollLock();
   *
   * // pass the element ref
   * setElementToScrollLockRef(elementToScrollLockRef);
   */
  const setElementToScrollLockRef = (ref) => {
    //NOTE: results in infinite loop if not inside useEffect
    useEffect(() => {
      setTargetElementRef(ref);
    }, []);
  };

  return {
    setElementToScrollLockRef,
    setScrollLockActive,
  };
}
