// SOURCE INSPIRATION https://medium.com/@jaredloson/a-replacement-for-window-confirm-using-promises-and-react-hooks-cfc011e76a7a

import { useEffect, useState } from "react";
import { useConfirmationModalStore } from "../services/state/ConfirmationModalStore";

const useConfirmationDialog = () => {
  const [needsCleanup, setNeedsCleanup] = useState(false);
  const {
    prompt,
    isOpen,
    confirmCallback,
    cancelCallback,
    setConfirmation,
    resetConfirmationState,
  } = useConfirmationModalStore();

  const requestConfirmation = (prompt) => {
    setNeedsCleanup(true);
    const promise = new Promise((resolve, reject) => {
      setConfirmation({
        prompt: prompt,
        isOpen: true,
        confirmCallback: resolve,
        cancelCallback: reject,
      });
    });

    return promise.then(
      () => {
        resetConfirmationState();
        return true;
      },
      () => {
        resetConfirmationState();
        return false;
      }
    );
  };

  useEffect(() => {
    return () => {
      if (cancelCallback && needsCleanup) {
        cancelCallback();
      }
    };
  }, [cancelCallback, needsCleanup]);

  return {
    prompt,
    isOpen,
    confirmCallback,
    cancelCallback,
    requestConfirmation,
  };
};

export default useConfirmationDialog;
