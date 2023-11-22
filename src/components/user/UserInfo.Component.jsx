import React from "react";
import { Link } from "react-router-dom";

export default function UserInfoComponent({ userData, handleEdit }) {
  return (
    <div className="relative p-5">
      <div className="flex gap-1 mt-10 text-xl font-bold">
        <p>{userData?.firstName}</p>
        <p>{userData?.lastName}</p>
      </div>
      <p>{userData?.headline}</p>
      <span>{userData?.location}</span>
      <p>{userData?.about}</p>
      <Link className="absolute right-5 top-5" to="/profile/setup">
        edit
      </Link>
    </div>
  );
}
