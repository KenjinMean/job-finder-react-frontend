import React, { Fragment } from "react";
import { toast } from "react-toastify";

import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import {
  useApiUserInfoFetch,
  useApiUserProfileImageUpdateAsync,
} from "../../../hooks/useApiUserInfo";
import { useOpenModalOverlay } from "../../../hooks/useModalFunctions";

import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserProfileImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    useOpenModalOverlay(UserModals.userProfileImageUpdatePreviewModal.name)
  );

  const { data: userInfo } = useApiUserInfoFetch();

  const asyncUpdateUserProfileImage = useApiUserProfileImageUpdateAsync();

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
    <Fragment>
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
        {/* select file button */}
        <ButtonFileUploadUiComponent
          title="Add Photo"
          accept="image/*"
          handleFileSelect={handleImageSelect}
        />
        <ButtonActionPrimaryUiComponent onClick={handleProfileDelete}>
          Delete
        </ButtonActionPrimaryUiComponent>
      </div>
    </Fragment>
  );
}
