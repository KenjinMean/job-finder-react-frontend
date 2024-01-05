// SOURCE: see more feature: https://stackoverflow.com/questions/74201658/how-do-i-truncate-text-and-display-a-read-more-button-in-react-if-the-text-goes

import React, { useState, useLayoutEffect } from "react";

export const useTruncatedElement = (ref) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, [ref]);

  const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore,
  };
};
