import React from "react";

// NOTE: rename this to UserCoverImageView.Modal.Component.jsx to clearly convey component purpose
// and also the USerProfileOverlay

import { userModalOverlayRoutes, userRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenOverlay } from "../../../hooks/useOverlay";
import {
  useFetchtUserInfo,
  useUpdateUserCoverImage,
} from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserCoverImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    useOpenOverlay(userModalOverlayRoutes.userCoverImageUpdatePreviewModal)
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
    <ModalUtil size="large" modalTitle="Cover Photo">
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
