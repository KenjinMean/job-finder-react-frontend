import React from "react";

export default function UserSkillsView({ userData }) {
  return (
    <section className="relative flex flex-col w-full p-5 mt-5 overflow-hidden rounded-lg bg-slate-200">
      <h2 className="text-2xl font-semibold">Skills</h2>
      {userData.user_skills.map((skill) => {
        return (
          <span className="rounded-md" key={skill.id}>
            {skill.name}
          </span>
        );
      })}
    </section>
  );
}
