import React, { Fragment, useState } from "react";

import { useApiUserExperienceFetch } from "../../hooks/useApiUserExperience";

import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import { UserModals } from "../../constants/ModalNames.Constants";
import { useOpenModalParam } from "../../hooks/useModalFunctions";
import UserExperienceDetailsComponent from "./UserExperienceDetails.Component";

export default function UserExperienceCardComponent() {
  const { data: UserExperiences } = useApiUserExperienceFetch();

  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences
    ? UserExperiences
    : UserExperiences.slice(0, 2);

  const handleSeeAllExperiences = () => {
    setShowAllExperiences((prevState) => !prevState);
  };

  const hideButton = UserExperiences.length <= 2;

  return (
    <section className="relative w-full overflow-hidden border sm:rounded-lg bg-background-gray_50 border-border-100 text-content-black">
      <h2 className="p-5 text-2xl font-semibold">Experience</h2>

      <div className="flex flex-col gap-3 p-5">
        {visibleExperiences.map((experience, index) => (
          <Fragment key={index}>
            <UserExperienceDetailsComponent
              experience={experience}
              index={index}
            />
            {index !== visibleExperiences.length - 1 && (
              <div className="border-b border-border-100"></div>
            )}
          </Fragment>
        ))}
      </div>

      {!hideButton && (
        <button
          className="w-full py-4 text-xl font-bold border-t border-border-100 hover:bg-background-gray300_hoover"
          onClick={handleSeeAllExperiences}
        >
          {showAllExperiences ? "See less" : "See more"}
        </button>
      )}

      <LinkAddUiComponent
        className="absolute top-5 right-5"
        to={useOpenModalParam(UserModals.userAddExperienceModal.name)}
      />
    </section>
  );
}
