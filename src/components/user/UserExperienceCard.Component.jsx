import React, { Fragment, useState } from "react";

import { UserModals } from "../../constants/ModalNames.Constants";
import { useApiUserExperiencesFetch } from "../../hooks/useApiUserExperience";
import { useOpenModalParam } from "../../hooks/useModalFunctions";

import CardContainerUitl from "../utils/CardContainer.Uitl";
import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import CardHeadingUiComponent from "../UI/CardHeading.Ui.Component";
import UserExperienceDetailsComponent from "./UserExperienceDetails.Component";

export default function UserExperienceCardComponent() {
  const { data: UserExperiences } = useApiUserExperiencesFetch();

  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const visibleExperiences = showAllExperiences
    ? UserExperiences
    : UserExperiences.slice(0, 2);

  const handleSeeAllExperiences = () => {
    setShowAllExperiences((prevState) => !prevState);
  };

  const hideButton = UserExperiences.length <= 2;

  return (
    <CardContainerUitl>
      <CardHeadingUiComponent title="Experiences" />

      <div className="flex flex-col gap-3 pt-5 empty:hidden">
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
    </CardContainerUitl>
  );
}
