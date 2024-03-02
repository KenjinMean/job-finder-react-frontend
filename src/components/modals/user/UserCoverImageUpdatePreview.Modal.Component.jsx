import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { userRoutes } from "../../../constants/RoutesPath.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import { UserModals } from "../../../constants/ModalNames.Constants";
import { useOpenModalParam } from "../../../hooks/useModalFunctions";
import { useApiUserCoverImageUpdateMutation } from "../../../hooks/useApiUserInfo";

import ButtonActionUiComponent from "../../UI/ButtonAction.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";

export default function UserCoverImageUpdatePreviewModalComponent() {
  const { handleImageSelect, imageFile, imageDataURL, fromViewPage } =
    useFileHandling(
      useOpenModalParam(UserModals.userCoverImageUpdatePreviewModal.name)
    );

  const { isLoading, mutate: updateCoverImage } =
    useApiUserCoverImageUpdateMutation();

  const handleCoverImageUpdate = async () => {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("cover_image", imageFile);

    updateCoverImage(formData);
  };

  // prevents user from accessing this page (Cover Image Preview Page) directly.
  // Users must come from the respective cover view pages to ensure a
  // valid context before previewing and updating their images.
  if (!fromViewPage) {
    return <Navigate to={userRoutes.userProfilePage} />;
  }

  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="w-full p-5 overflow-hidden h-80">
          <img
            src={imageDataURL}
            alt="user profile image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-between p-5">
        <ButtonFileUploadUiComponent
          title="Change Image"
          accept="image/*"
          handleFileSelect={handleImageSelect}
          imagePreviewPage={userRoutes.userCoverImageUpdatePreviewPage}
        />

        <ButtonActionUiComponent
          text="Update"
          loadingText="Updating"
          onClick={handleCoverImageUpdate}
          isSubmitting={isLoading}
        />
      </div>
    </Fragment>
  );
}
