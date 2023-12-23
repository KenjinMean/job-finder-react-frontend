import React, { useState } from "react";

import {
  userProfileImagePreviewpageRoute,
  userProfilePageRoute,
} from "../../../constants/routes";

import { useFileUploadStore } from "../../../services/state/FileUploadStore";
import { useUpdateUserProfileImage } from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import { useNavigate } from "react-router-dom";

// ENHANCE: create a modal component the handles user update preview and
//    user cover update preview because they got the same functionality but different sizes only
export default function UserProfileImageUpdatePreviewModalComponent() {
  const navigate = useNavigate();

  const { imageFile, setImageFile, imageDataURL, setImageDataURL } =
    useFileUploadStore();
  const [formData, setFormData] = useState(new FormData());

  const { mutate: updateUserProfileMutation } = useUpdateUserProfileImage();

  const handleSubmit = () => {
    formData.append("_method", "PATCH");
    formData.append("profile_image", imageFile);

    updateUserProfileMutation(formData);
  };

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      navigate(userProfileImagePreviewpageRoute);
      setImageDataURL(reader.result);
    };
    reader.readAsDataURL(file);
    setImageFile(file);
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
          <ButtonFileUploadUiComponent
            title="Add Photo"
            handleFileSelect={handleFileSelect}
          />
          <ButtonActionPrimaryUiComponent onClick={handleSubmit}>
            Save
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}
