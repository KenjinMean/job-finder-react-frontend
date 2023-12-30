import React from "react";

import { userRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import {
  useFetchtUserInfo,
  useUpdateUserProfileImage,
} from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";

import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import ModalUtil from "../../utils/Modal.Util";

export default function UserProfileImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    userRoutes.userProfileImagePreviewPage
  );

  const { data: userInfo } = useFetchtUserInfo();
  const { mutate: updateUserProfileMutation } = useUpdateUserProfileImage();

  const handleProfileDelete = () => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    formData.append("profile_image", "");

    updateUserProfileMutation(formData);
  };

  return (
    <ModalUtil
      modalTitle="Profile Photo"
      navigateToUrlOnClose={userRoutes.userProfilePage}
    >
      {/* body */}
      <div className="flex justify-center">
        <div className="w-64 h-64 mt-5 overflow-hidden rounded-full">
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
          accept="image/*"
          handleFileSelect={handleImageSelect}
        />
        <ButtonActionPrimaryUiComponent onClick={handleProfileDelete}>
          Delete
        </ButtonActionPrimaryUiComponent>
      </div>
    </ModalUtil>
  );
}
