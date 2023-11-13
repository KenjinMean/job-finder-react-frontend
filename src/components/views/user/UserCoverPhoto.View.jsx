import React from "react";
import { Link } from "react-router-dom";

import ImageUrlLoaderUtil from "../../../utils/ImageUrlLoader.Util";

export default function UserCoverPhotoView({ userData }) {
  return (
    <Link to="/edit-cover" className="block w-full h-48">
      <ImageUrlLoaderUtil imageUrl={userData?.cover_image} />
    </Link>
  );
}
