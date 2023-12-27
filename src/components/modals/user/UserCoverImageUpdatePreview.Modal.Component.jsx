import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { userRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import { useFileUploadStore } from "../../../services/state/FileUploadStore";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import { useUpdateUserCoverImage } from "../../../services/api/useProfileRequesthandler";

export default function UserCoverImageUpdatePreviewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    userRoutes.userCoverImageUpdatePreviewPage
  );
  const { mutate: updateUserCoverMutation } = useUpdateUserCoverImage();
  const { imageFile, imageDataURL, fromViewPage } = useFileUploadStore();

  const [formData, setFormData] = useState(new FormData());
  const handleSubmit = () => {
    formData.append("_method", "PATCH");
    formData.append("cover_image", imageFile);
    updateUserCoverMutation(formData);
  };

  if (!fromViewPage) {
    return <Navigate to={userRoutes.userProfilePage} />;
  }

  return (
    <ModalContainerUtil
      navigateOnClose={userRoutes.userProfilePage}
      contentClassName="w-full max-w-5xl"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-lg">
        {/*header*/}
        <div className="flex items-center justify-between p-5">
          <h3 className="text-xl font-secondary">Cover Image Preview</h3>
          <LinkClosePrimaryUiComponent to={userRoutes.userProfilePage} />
        </div>
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
      </div>
    </ModalContainerUtil>
  );
}
