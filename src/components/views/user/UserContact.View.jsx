import React from "react";
import { Link } from "react-router-dom";

import TestModal from "../../modals/user/Test.Modal";

import OverlaysUtil from "../../../components/utils/Overlays.Util";

export default function UserContactView({ userData }) {
  // console.log("UserContact Component: ", userData);
  return (
    <section className="relative w-full p-5 mt-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="flex flex-col">
        <span></span>
      </div>
      <Link to="edit-skill" className="absolute right-5 top-5">
        edit
      </Link>
      <OverlaysUtil modalComponent={<TestModal />} />
    </section>
  );
}
