import React from "react";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";
import { Link } from "react-router-dom";

export default function UserCoverPhotoView({ userData }) {
  return (
    <Link to="/edit-cover" className="block w-full h-48">
      <ImageUrlLoaderUtil imageUrl={userData?.cover_image} />
    </Link>
  );
}
