import React, { Fragment } from "react";

import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenModalParam } from "../../../hooks/useModalFunctions";
import {
  useApiUserCoverImageDeleteMutation,
  useApiUserInfoFetch,
} from "../../../hooks/useApiUserInfo";
import useConfirmationDialog from "../../../hooks/useConfirmactionDialog";

import UserCoverImageComponent from "../../user/UserCoverImage.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionSecondaryUiComponent from "../../UI/ButtonActionSecondary.Ui.Component";

export default function UserCoverImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    useOpenModalParam(UserModals.userCoverImageUpdatePreviewModal.name)
  );

  const { data: userInfo } = useApiUserInfoFetch();
  const { requestConfirmation } = useConfirmationDialog();

  const { isLoading, mutate: deleteCoverImage } =
    useApiUserCoverImageDeleteMutation();

  const handleCoverDelete = async () => {
    try {
      const response = await requestConfirmation(
        "Are you sure you want to delete Cover Image?"
      );

      if (response) {
        deleteCoverImage();
      }
    } catch (error) {
      console.error("An error occurred while deleting the profile:", error);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center p-5">
        <div className="w-full h-64 overflow-hidden ">
          <UserCoverImageComponent
            imageUrl={userInfo?.cover_image}
            alt="user profile image"
          />
        </div>
      </div>
      <div className="flex justify-between p-5">
        {userInfo?.cover_image ? (
          <ButtonActionSecondaryUiComponent
            text="Delete"
            loadingText="Deleting"
            onClick={handleCoverDelete}
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
