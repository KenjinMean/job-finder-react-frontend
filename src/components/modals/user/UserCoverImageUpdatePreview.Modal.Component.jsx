import React from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { userRoutes } from "../../../constants/RoutesPath.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenModalOverlay } from "../../../hooks/useOverlayFunctions";
import { UserModals } from "../../../constants/ModalNames.Constants";
import { useAsyncUpdateUserCoverImage } from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserCoverImageUpdatePreviewModalComponent() {
  const { handleImageSelect, imageFile, imageDataURL, fromViewPage } =
    useFileHandling(
      useOpenModalOverlay(UserModals.userCoverImageUpdatePreviewModal.name)
    );

  const asyncUpdateUserCoverImage = useAsyncUpdateUserCoverImage();

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
    <ModalUtil size="large" modalTitle="Cover Image Preview">
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
        {/* select file button */}
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
