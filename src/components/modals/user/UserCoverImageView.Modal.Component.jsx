import React from "react";

// NOTE: rename this to UserCoverImageView.Modal.Component.jsx to clearly convey component purpose
// and also the USerProfileOverlay

import { userRoutes } from "../../../constants/routes";

import { useFileUploadStore } from "../../../services/state/FileUploadStore";
import {
  useFetchtUserInfo,
  useUpdateUserCoverImage,
} from "../../../services/api/useProfileRequesthandler";

import ModalContainerUtil from "../../utils/ModalContainer.Util";
import ImageUrlLoaderUtil from "../../utils/ImageUrlLoader.Util";

import LinkClosePrimaryUiComponent from "../../UI/LinkClosePrimay.Ui.Component";
import ButtonFileUploadUiComponent from "../../UI/ButtonFileUpload.Ui.Component";
import ButtonActionPrimaryUiComponent from "../../UI/ButtonActionPrimary.Ui.Component";
import { useNavigate } from "react-router-dom";

export default function UserCoverImageViewModalComponent() {
  const navigate = useNavigate();

  const { mutate: updateuserCoverMutation } = useUpdateUserCoverImage();
  const { data: userInfo } = useFetchtUserInfo();
  const { setImageDataURL, setImageFile } = useFileUploadStore();

  const handleFileSelect = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      navigate(userRoutes.userCoverImageUpdatePreviewPage);
      setImageDataURL(reader.result);
    };
    reader.readAsDataURL(file);

    setImageFile(file);
  };

  const handleCoverDelete = () => {
    const formData = new FormData();

    formData.append("_method", "PATCH");
    formData.append("cover_image", "");

    updateuserCoverMutation(formData);
  };

  return (
    <ModalContainerUtil
      navigateOnClose={userRoutes.userProfilePage}
      contentClassName="w-full max-w-5xl"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-lg">
        {/*header*/}
        <div className="flex items-center justify-between p-5">
          <h3 className="text-xl font-secondary">Cover Photo</h3>
          <LinkClosePrimaryUiComponent
            to={userRoutes.userProfilePage}
            preventScrollReset={true}
          />
        </div>
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
            handleFileSelect={handleFileSelect}
          />
          <ButtonActionPrimaryUiComponent onClick={handleCoverDelete}>
            Delete
          </ButtonActionPrimaryUiComponent>
        </div>
      </div>
    </ModalContainerUtil>
  );
}
