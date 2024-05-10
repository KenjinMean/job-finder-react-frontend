import React, { Fragment } from "react";

import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import {
  useApiUserInfoFetch,
  useApiUserProfileImageDeleteMutation,
  useApiUserProfileImageUpdateMutation,
} from "../../../hooks/useApiUserInfo";
import { useOpenModalParam } from "../../../hooks/useModalFunctions";
import useConfirmationDialog from "../../../hooks/useConfirmactionDialog";

import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionSecondaryUiComponent from "../../UI/ButtonActionSecondary.Ui.Component";
import UserProfileImageComponent from "../../user/UserProfileImage.Component";

export default function UserProfileImageViewModalComponent() {
  const { data: userInfo } = useApiUserInfoFetch();

  const { requestConfirmation } = useConfirmationDialog();

  const { handleImageSelect } = useFileHandling(
    useOpenModalParam(UserModals.userProfileImageUpdatePreviewModal.name)
  );

  const { isLoading, mutate: deleteProfileImage } =
    useApiUserProfileImageDeleteMutation();

  const handleProfileDelete = async () => {
    try {
      const response = await requestConfirmation(
        "Are you sure you want to delete profile Image?"
      );

      if (response) {
        deleteProfileImage();
      }
    } catch (error) {
      console.error("An error occurred while deleting the profile:", error);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="w-64 h-64 mt-5 overflow-hidden rounded-full">
          <UserProfileImageComponent imageUrl={userInfo?.profile_image} />
        </div>
      </div>

      <div className="flex justify-between p-5">
        {userInfo?.profile_image ? (
          <ButtonActionSecondaryUiComponent
            text="Delete"
            loadingText="Deleting"
            onClick={handleProfileDelete}
            isSubmitting={isLoading}
          />
        ) : (
          ""
        )}

        <ButtonFileUploadUiComponent
          title="Change Image"
          accept="image/*"
          handleFileSelect={handleImageSelect}
        />
      </div>
    </Fragment>
  );
}
