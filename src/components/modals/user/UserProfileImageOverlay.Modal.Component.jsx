import React from "react";

import {
  userProfilePageRoute,
  userProfileImagePreviewpageRoute,
} from "../../../constants/routes";

import { useFileUploadStore } from "../../../services/state/FileUploadStore";
import {
  useFetchtUserInfo,
  useUpdateUserProfileImage,
} from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";

import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import { useNavigate } from "react-router-dom";

export default function UserProfileImageOverlayModalComponent() {
  const { setImageDataURL, setImageFile } = useFileUploadStore();

  const navigate = useNavigate();

  const { data: userInfo } = useFetchtUserInfo();
  const { mutate: updateUserProfileMutation } = useUpdateUserProfileImage();

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      navigate(userProfileImagePreviewpageRoute);
      setImageDataURL(reader.result);
    };
    reader.readAsDataURL(file);

    setImageFile(file);
  };

  const handleProfileDelete = () => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    formData.append("profile_image", "");

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
          <h3 className="text-xl font-secondary">Profile Photo</h3>
          <LinkClosePrimaryUiComponent
            to={userProfilePageRoute}
            preventScrollReset={true}
          />
        </div>
        {/* body */}
        <div className="flex justify-center">
          <div className="w-64 h-64 overflow-hidden rounded-full">
            <ImageUrlLoaderUtil
              imageUrl={userInfo?.profile_image}
              alt="user profile image"
            />
          </div>
        </div>
        {/* footer */}
        <div className="flex justify-between p-5">
          <ButtonFileUploadUiComponent
            title="Add Photo"
            handleFileSelect={handleFileSelect}
          />
          <ButtonActionPrimaryUiComponent onClick={handleProfileDelete}>
            Delete
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}
