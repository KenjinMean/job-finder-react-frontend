import React, { Fragment } from "react";

import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import {
  useApiUserInfoFetch,
  useApiUserProfileImageUpdateMutation,
} from "../../../hooks/useApiUserInfo";
import { useOpenModalParam } from "../../../hooks/useModalFunctions";
import useConfirmationDialog from "../../../hooks/useConfirmactionDialog";

import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionSecondaryUiComponent from "../../UI/ButtonActionSecondary.Ui.Component";

export default function UserProfileImageViewModalComponent() {
  const { data: userInfo } = useApiUserInfoFetch();

  const { requestConfirmation } = useConfirmationDialog();

  const { isLoading, mutate: updateProfileImage } =
    useApiUserProfileImageUpdateMutation();

  const { handleImageSelect } = useFileHandling(
    useOpenModalParam(UserModals.userProfileImageUpdatePreviewModal.name)
  );

  const handleProfileDelete = async () => {
    try {
      const response = await requestConfirmation(
        "Are you sure you want to delete profile Image?"
      );

      if (response) {
        const formData = new FormData();
        formData.append("_method", "PATCH");
        formData.append("profile_image", "");

        updateProfileImage(formData);
      }
    } catch (error) {
      console.error("An error occurred while deleting the profile:", error);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="w-64 h-64 mt-5 overflow-hidden rounded-full">
          <ImageUrlLoaderUtil
            imageUrl={userInfo?.profile_image}
            alt="user profile image"
          />
        </div>
      </div>

      <div className="flex justify-between p-5">
        <ButtonActionSecondaryUiComponent
          text="Delete"
          loadingText="Deleting"
          onClick={handleProfileDelete}
          isSubmitting={isLoading}
        />

        <ButtonFileUploadUiComponent
          title="Add Photo"
          accept="image/*"
          handleFileSelect={handleImageSelect}
        />
      </div>
    </Fragment>
  );
}
