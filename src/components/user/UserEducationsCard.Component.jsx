import React, { Fragment, useState } from "react";
import LinkEditUiComponent from "../UI/LinkEdit.Ui.Component";
import { useApiUserEducationsFetch } from "../../hooks/useApiUserEducation";
import UserEducationDetailsComponent from "./UserEducationDetails.Component";
import LinkAddUiComponent from "../UI/LinkAdd.Ui.Component";
import { UserModals } from "../../constants/ModalNames.Constants";
import { useOpenModalParam } from "../../hooks/useModalFunctions";

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
    <section className="relative w-full overflow-hidden transition-all border sm:rounded-lg bg-background-gray_50 border-border-100 text-content-black">
      <h2 className="p-5 text-2xl font-semibold">Education</h2>

      <div className="flex flex-col gap-3 p-5">
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
    </section>
  );
}
