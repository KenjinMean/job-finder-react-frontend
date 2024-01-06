import React from "react";

import { userRoutes, userModalOverlayRoutes } from "../../../constants/routes";
import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenOverlay } from "../../../hooks/useOverlay";
import {
  useFetchtUserInfo,
  useUpdateUserProfileImage,
} from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";

import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserProfileImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    useOpenOverlay(userModalOverlayRoutes.userProfileImageUpdatePreviewModal)
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
    <ModalUtil modalTitle="Profile Photo">
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
