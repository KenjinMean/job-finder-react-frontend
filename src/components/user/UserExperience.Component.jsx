import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";

export default function UserExperienceComponent() {
  return (
    <section className="relative w-full p-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent />
      </div>
    </section>
  );
}
