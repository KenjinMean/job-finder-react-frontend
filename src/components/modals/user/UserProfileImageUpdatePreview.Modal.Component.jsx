import React from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

import { userRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import { useFileUploadStore } from "../../../services/state/FileUploadStore";
import { useAsyncUpdateUserProfileImage } from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

// ENHANCE: create a modal component the handles user update preview and
//    user cover update preview because they got the same functionality but different sizes only
export default function UserProfileImageUpdatePreviewModalComponent() {
  const { imageFile, imageDataURL, fromViewPage } = useFileUploadStore();
  const { handleImageSelect } = useFileHandling(
    userRoutes.userProfileImagePreviewPage
  );

  const asyncUpdateUserProfileImage = useAsyncUpdateUserProfileImage();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("profile_image", imageFile);

    toast.promise(asyncUpdateUserProfileImage(formData), {
      pending: "Updating User Profile Image",
      success: "User Profile image updated sucessfully",
      error: "Error Updating User profile image",
    });
  };

  // prevents user from accessing this page (Profile Image Preview Page) directly.
  // Users must come from the respective profile or cover view pages to ensure a
  // valid context before previewing and updating their images.
  if (!fromViewPage) {
    return <Navigate to={userRoutes.userProfilePage} />;
  }

  return (
    <ModalContainerUtil
      navigateOnClose={userRoutes.userProfilePage}
      contentClassName="w-full max-w-3xl"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-lg">
        {/*header*/}
        <div className="flex items-center justify-between p-5">
          <h3 className="text-xl font-secondary">
            Profile Image Update Preview
          </h3>
          <LinkClosePrimaryUiComponent to={userRoutes.userProfilePage} />
        </div>
        {/* body */}
        <div className="flex justify-center">
          <div className="w-64 h-64 overflow-hidden rounded-full">
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
          />
          <ButtonActionPrimaryUiComponent onClick={handleSubmit}>
            Save
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}
