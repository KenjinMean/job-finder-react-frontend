import React from "react";
import { toast } from "react-toastify";

import { userModalNames } from "../../../constants/ModalNames.Constants";

import { useOpenOverlay } from "../../../hooks/useOverlayFunctions";
import useFileHandling from "../../../hooks/useFileHandling";
import {
  useAsyncUpdateUserProfileImage,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";

import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserProfileImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    useOpenOverlay(userModalNames.userProfileImageUpdatePreviewModal)
  );

  const { data: userInfo } = useFetchtUserInfo();

  const asyncUpdateUserProfileImage = useAsyncUpdateUserProfileImage();

  const handleProfileDelete = () => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    formData.append("profile_image", "");

    toast.promise(asyncUpdateUserProfileImage(formData), {
      pending: "Deleting User Profile Image",
      success: "User Profile image Deleted sucessfully",
      error: "Error Deleting User profile image",
    });
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
