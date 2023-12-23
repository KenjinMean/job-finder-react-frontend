import React, { useState } from "react";
import {
  userProfilePageRoute,
  userCoverImageUpdatePreviewPageRoute,
} from "../../../constants/routes";

import { useFileUploadStore } from "../../../services/state/FileUploadStore";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import { useUpdateUserCoverImage } from "../../../services/api/useProfileRequesthandler";
import { useNavigate } from "react-router-dom";

export default function UserCoverImageUpdatePreviewModalComponent() {
  const navigate = useNavigate();

  const { imageFile, setImageFile, imageDataURL, setImageDataURL } =
    useFileUploadStore();
  const [formData, setFormData] = useState(new FormData());

  const { mutate: updateUserCoverMutation } = useUpdateUserCoverImage();

  const handleSubmit = () => {
    formData.append("_method", "PATCH");
    formData.append("cover_image", imageFile);
    updateUserCoverMutation(formData);
  };

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      navigate(userCoverImageUpdatePreviewPageRoute);
      setImageDataURL(reader.result);
    };
    reader.readAsDataURL(file);

    setImageFile(file);
  };

  return (
    <ModalContainerUtil
      navigateOnClose={userProfilePageRoute}
      contentClassName="w-full max-w-5xl"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-lg">
        {/*header*/}
        <div className="flex items-center justify-between p-5">
          <h3 className="text-xl font-secondary">Cover Image Preview</h3>
          <LinkClosePrimaryUiComponent to={userProfilePageRoute} />
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
            handleFileSelect={handleFileSelect}
            imagePreviewPage={userCoverImageUpdatePreviewPageRoute}
          />
          <ButtonActionPrimaryUiComponent onClick={handleSubmit}>
            Save
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}
