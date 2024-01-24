import React, { Fragment } from "react";

export default function SkillListUiComponent({
  skills,
  seperator,
  skillClass,
  seperatorClass,
}) {
  return (
    <Fragment>
      {skills.map((skill, index) => (
        <Fragment key={index}>
          <span key={index} className={skillClass}>
            {skill.name}
          </span>
          {index !== skills.length - 1 && (
            <span className={seperatorClass}>{seperator}</span>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
}
