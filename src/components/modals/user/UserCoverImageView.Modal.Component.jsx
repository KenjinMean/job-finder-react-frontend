import React from "react";

// NOTE: rename this to UserCoverImageView.Modal.Component.jsx to clearly convey component purpose
// and also the USerProfileOverlay

import { userRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import {
  useFetchtUserInfo,
  useUpdateUserCoverImage,
} from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";

import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import ModalUtil from "../../utils/Modal.Util";

export default function UserCoverImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    userRoutes.userCoverImageUpdatePreviewPage
  );
  const { mutate: updateuserCoverMutation } = useUpdateUserCoverImage();
  const { data: userInfo } = useFetchtUserInfo();

  const handleCoverDelete = () => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    formData.append("cover_image", "");

    updateuserCoverMutation(formData);
  };

  return (
    <ModalUtil
      size="large"
      modalTitle="Cover Photo"
      navigateToUrlOnClose={userRoutes.userProfilePage}
    >
      {/* body */}
      <div className="flex justify-center p-5">
        <div className="w-full h-64 overflow-hidden ">
          <ImageUrlLoaderUtil
            imageUrl={userInfo?.cover_image}
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
        <ButtonActionPrimaryUiComponent onClick={handleCoverDelete}>
          Delete
        </ButtonActionPrimaryUiComponent>
      </div>
    </ModalUtil>
  );
}
