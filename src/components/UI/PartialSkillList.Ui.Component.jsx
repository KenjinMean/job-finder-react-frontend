import React, { Fragment } from "react";

export default function PartialSkillListUiComponent({ skills }) {
  return (
    <Fragment>
      {skills.slice(0, 2).map((skill, index) => (
        <Fragment key={index}>
          <span className="text-sm text-indigo-500">{skill.name}</span>
          {index !== 1 && skills.length > 1 && (
            <span className="text-foreground-100"> • </span>
          )}
        </Fragment>
      ))}
      {skills.length > 2 && (
        <span>
          <span className="text-indigo-500 ">
            {" "}
            +{skills.length - 2} more...{" "}
          </span>
        </span>
      )}
    </Fragment>
  );
}
