import React from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";

export default function UserEducationComponent() {
  return (
    <section className="relative w-full p-5 overflow-hidden border rounded-lg bg-background-gray200 border-border-100 text-content-black">
      <h2 className="text-2xl font-semibold">Education</h2>

      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkEditUiComponent />
      </div>
    </section>
  );
}
