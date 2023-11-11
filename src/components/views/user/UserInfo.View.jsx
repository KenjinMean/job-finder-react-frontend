import React from "react";
import { Link } from "react-router-dom";

export default function UserInfoView({ userData, handleEdit }) {
  return (
    <>
      <div className="">
        <div className="flex justify-end">
          <Link to="/profile/setup">edit</Link>
        </div>
        <div className="p-5">
          <div className="flex gap-1 text-xl font-bold">
            <p>{userData?.firstName}</p>
            <p>{userData?.lastName}</p>
          </div>
          <p>{userData?.headline}</p>
          <span>{userData?.location}</span>
          <p>{userData?.about}</p>
        </div>
      </div>
    </>
  );
}
