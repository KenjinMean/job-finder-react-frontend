import React, { useState } from "react";

import { userProfilePageRoute } from "../../../constants/routes";

import { useFileUploadStore } from "../../../services/state/FileUploadStore";
import { useUpdateUserProfileImage } from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserProfileImageUpdatePreviewModalComponent() {
  const { imageFile, imageDataURL } = useFileUploadStore();
  const [formData, setFormData] = useState(new FormData());

  const { mutate: updateUserProfileMutation } = useUpdateUserProfileImage();

  const handleSubmit = () => {
    formData.append("_method", "PATCH");
    formData.append("profile_image", imageFile);

    updateUserProfileMutation(formData);
  };

  return (
    <ModalContainerUtil
      navigateOnClose={userProfilePageRoute}
      contentClassName="w-full max-w-3xl"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-lg">
        {/*header*/}
        <div className="flex items-center justify-between p-5">
          <h3 className="text-xl font-secondary">Image Preview</h3>
          <LinkClosePrimaryUiComponent to={userProfilePageRoute} />
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
          <ButtonFileUploadUiComponent title="Add Photo" />
          <ButtonActionPrimaryUiComponent onClick={handleSubmit}>
            Save
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}
