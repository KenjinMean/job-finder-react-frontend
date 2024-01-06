import React from "react";
import { toast } from "react-toastify";

// NOTE: rename this to UserCoverImageView.Modal.Component.jsx to clearly convey component purpose
// and also the USerProfileOverlay

import { userModalOverlayRoutes } from "../../../constants/routes";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenOverlay } from "../../../hooks/useOverlay";
import {
  useAsyncUpdateUserCoverImage,
  useFetchtUserInfo,
} from "../../../services/api/useProfileRequesthandler";

import ModalUtil from "../../utils/Modal.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";

export default function UserCoverImageViewModalComponent() {
  const { handleImageSelect } = useFileHandling(
    useOpenOverlay(userModalOverlayRoutes.userCoverImageUpdatePreviewModal)
  );

  const { data: userInfo } = useFetchtUserInfo();

  const asyncUpdateUserCoverImage = useAsyncUpdateUserCoverImage();

  const handleCoverDelete = () => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    formData.append("cover_image", "");

    toast.promise(asyncUpdateUserCoverImage(formData), {
      pending: "Deleting User Cover Image",
      success: "User Cover image Deleted sucessfully",
      error: "Error Deleting User Cover image",
    });
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
