import React from "react";
import MaxWidthWrapperUtil from "./utils/MaxWidthWrapper.Util";

import ImageSkeletonUtil from "./utils/LoadersSpinners/ImageSkeleton.Util";

export default function ComponentDesignView() {
  return (
    <MaxWidthWrapperUtil>
      <ImageSkeletonUtil />
    </MaxWidthWrapperUtil>
  );
}
