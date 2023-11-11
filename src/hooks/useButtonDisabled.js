import { useState, useEffect } from "react";

const useButtonDisabled = (loadingStates) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(loadingStates.some((loadingState) => loadingState === true));
  }, [loadingStates]);

  return isDisabled;
};

export default useButtonDisabled;
