import React from "react";
import { toast } from "react-toastify";

import { UserModals } from "../../../constants/ModalNames.Constants";

import useFileHandling from "../../../hooks/useFileHandling";
import { useOpenModalOverlay } from "../../../hooks/useOverlayFunctions";
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
    useOpenModalOverlay(UserModals.userCoverImageUpdatePreviewModal.name)
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
        {/* select file */}
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
