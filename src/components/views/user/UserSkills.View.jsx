import React from "react";
import { Link } from "react-router-dom";

export default function UserSkillsView({ userData }) {
  return (
    <section className="relative w-full p-5 mt-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="flex flex-col">
        {userData.user_skills.map((skill) => {
          return (
            <span className="rounded-md" key={skill.id}>
              {skill.name}
            </span>
          );
        })}
      </div>
      <div className="absolute flex gap-5 right-5 top-5">
        <Link
          to="edit-skill"
          // prevents page scrolling back to top when opening modals
          preventScrollReset={true}
        >
          edit
        </Link>
        <Link
          to="add-skill"
          // prevents page scrolling back to top when opening modals
          preventScrollReset={true}
        >
          Add
        </Link>
      </div>
    </section>
  );
}
