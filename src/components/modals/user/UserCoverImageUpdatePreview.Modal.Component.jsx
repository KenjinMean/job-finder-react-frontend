import React from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { userRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import { useFileUploadStore } from "../../../services/state/FileUploadStore";
import { useAsyncUpdateUserCoverImage } from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import ModalUtil from "../../utils/Modal.Util";

export default function UserCoverImageUpdatePreviewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    userRoutes.userCoverImageUpdatePreviewPage
  );

  const asyncUpdateUserCoverImage = useAsyncUpdateUserCoverImage();
  const { imageFile, imageDataURL, fromViewPage } = useFileUploadStore();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("cover_image", imageFile);

    toast.promise(asyncUpdateUserCoverImage(formData), {
      pending: "Updating User Cover Image",
      success: "User Cover image updated sucessfully",
      error: "Error Updating User Cover Image",
    });
  };

  // prevents user from accessing this page (Cover Image Preview Page) directly.
  // Users must come from the respective cover view pages to ensure a
  // valid context before previewing and updating their images.
  if (!fromViewPage) {
    return <Navigate to={userRoutes.userProfilePage} />;
  }

  return (
    <ModalUtil
      size="large"
      modalTitle="Cover Image Preview"
      navigateToUrlOnClose={userRoutes.userProfilePage}
    >
      {/* body */}
      <div className="flex justify-center">
        <div className="w-full p-5 overflow-hidden h-80">
          <img
            src={imageDataURL}
            alt="user profile image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* footer */}
      <div className="flex justify-between p-5">
        <ButtonFileUploadUiComponent
          title="Add Photo"
          accept="image/*"
          handleFileSelect={handleImageSelect}
          imagePreviewPage={userRoutes.userCoverImageUpdatePreviewPage}
        />
        <ButtonActionPrimaryUiComponent onClick={handleSubmit}>
          Save
        </ButtonActionPrimaryUiComponent>
      </div>
    </ModalUtil>
  );
}
