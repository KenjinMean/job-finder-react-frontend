import React, { Fragment, useState } from "react";

import { UserModals } from "../../constants/ModalNames.Constants";

import { useOpenModalParam } from "../../hooks/useModalFunctions";
import { useApiUserEducationsFetch } from "../../hooks/useApiUserEducation";

import CardContainerUitl from "../utils/CardContainer.Uitl";
import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import CardHeadingUiComponent from "../UI/CardHeading.Ui.Component";
import UserEducationDetailsComponent from "./UserEducationDetails.Component";

export default function UserEducationsCardComponent() {
  const { data: userEducation } = useApiUserEducationsFetch();

  const [showAllEducations, setShowAllEducations] = useState(false);

  const visibleEducations = showAllEducations
    ? userEducation
    : userEducation.slice(0, 2);

  const handleSeeAllEducations = () => {
    setShowAllEducations((prevState) => !prevState);
  };

  const hideButton = userEducation.length <= 2;

  return (
    <CardContainerUitl>
      <CardHeadingUiComponent title="Educations" />

      <div className="flex flex-col gap-3 pt-5 empty:hidden">
        {visibleEducations.map((education, index) => (
          <Fragment key={index}>
            <UserEducationDetailsComponent
              education={education}
              index={index}
            />
            {index !== visibleEducations.length - 1 && (
              <div className="border-b border-border-100"></div>
            )}
          </Fragment>
        ))}
      </div>

      {!hideButton && (
        <button
          className="w-full py-4 text-xl font-bold border-t border-border-100 hover:bg-background-gray300_hoover"
          onClick={handleSeeAllEducations}
        >
          {showAllEducations ? "See less" : "See more"}
        </button>
      )}

      <LinkAddUiComponent
        className="absolute top-5 right-5"
        to={useOpenModalParam(UserModals.userEducationAddModal.name)}
      />
    </CardContainerUitl>
  );
}
