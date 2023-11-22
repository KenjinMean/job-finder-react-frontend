import React from "react";
import { Link } from "react-router-dom";

import ImageUrlLoaderUtil from "../../components/utils/ImageUrlLoader.Util";

export default function ClickableLinkedImageUiComponent({
  imagePathUrl,
  className,
  to,
}) {
  return (
    <Link to={to} className={className}>
      <ImageUrlLoaderUtil imageUrl={imagePathUrl} />
    </Link>
  );
}
