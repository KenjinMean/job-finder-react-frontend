import React from "react";
import { Link } from "react-router-dom";
import ImageUrlLoaderUtil from "../utils/ImageUrlLoader.Util";

export default function UserInfoView({ data, handleEdit }) {
  return (
    <>
      <div>
        <Link to="/edit-cover" className="block w-full h-48">
          <ImageUrlLoaderUtil imageUrl={data?.data?.cover_image} />
        </Link>
        <Link
          to="/edit-profile"
          className="absolute w-40 h-40 overflow-hidden border-4 rounded-full top-20 left-5 border-slate-200"
        >
          <ImageUrlLoaderUtil imageUrl={data?.data?.profile_image} />
        </Link>
      </div>

      <div className="p-5">
        <div className="flex justify-end">
          <button onClick={handleEdit}>edit</button>
        </div>
        <div className="p-5">
          <div className="flex gap-1 text-xl font-bold">
            <p>{data?.data?.firstName}</p>
            <span>{data?.data?.pronouns && `(${data?.data?.pronouns})`}</span>
            <p>{data?.data?.lastName}</p>
          </div>
          <p>{data?.data?.headline}</p>
          <span>{data?.data?.location}</span>
        </div>
      </div>
    </>
  );
}
