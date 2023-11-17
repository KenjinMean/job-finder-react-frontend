import React from "react";
import { Link } from "react-router-dom";
import ImageUrlLoaderUtil from "../../../components/utils/ImageUrlLoader.Util";

export default function UserProfilePhotoView({ userData }) {
  return (
    <Link
      to="/edit-profile"
      className="absolute w-40 h-40 overflow-hidden border-4 rounded-full top-20 left-5 border-slate-200"
    >
      <ImageUrlLoaderUtil imageUrl={userData.profile_image} />
    </Link>
  );
}
