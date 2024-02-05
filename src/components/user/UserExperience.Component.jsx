import React, { Fragment } from "react";

import { useApiUserExperienceFetch } from "../../hooks/useApiUserExperience";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import UserExperienceContainerComponent from "./UserExperienceContainer.Component";

export default function UserExperienceComponent() {
  const { data: UserExperiences } = useApiUserExperienceFetch();

  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg bg-background-gray_50 border-border-100 text-content-black">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="absolute flex items-center gap-1 right-5 top-5">
        <LinkAddUiComponent
        // to={useOpenModalParam(UserModals.userAddSkillModal.name)}
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {UserExperiences.map((experiences, index) => (
          <Fragment key={index}>
            <UserExperienceContainerComponent experiences={experiences} />
            {index !== UserExperiences.length - 1 && (
              <div className="border-b border-border-100"></div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
