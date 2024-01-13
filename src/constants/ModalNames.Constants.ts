import UserInfoEditPage from "../pages/UserInfoEdit.Page"
import UserAddSkillPage from "../pages/UserAddSkill.Page"
import UserAboutEditPage from "../pages/UserAboutEdit.Page"

import UserContactEditModalComponent from "../components/modals/user/UserContactEdit.Modal.Component"
import UserAddSkillErrorModaComponent from "../components/modals/user/UserAddSkillError.Modal.Component"
import UserCoverImageViewModalComponent from "../components/modals/user/UserCoverImageView.Modal.Component"
import UserAddSkillSuccessModalComponent from "../components/modals/user/UserAddSkillSuccess.Modal.Component"
import UserProfileImageViewModalComponent from "../components/modals/user/UserProfileImageView.Modal.Component"
import UserCoverImageUpdatePreviewModalComponent from "../components/modals/user/UserCoverImageUpdatePreview.Modal.Component"
import UserProfileImageUpdatePreviewModalComponent from "../components/modals/user/UserProfileImageUpdatePreview.Modal.Component"


  const createModal = (
    name: string,
    component: React.ComponentType<any>
  ): { name: string; component: React.ComponentType<any> } => ({
    name,
    component,
  });

  type UserModal = {
    userAddSkillModal: { name: string; component: React.ComponentType<any> };
    userInfoEditModal: { name: string; component: React.ComponentType<any> };
    userAboutEditModal: { name: string; component: React.ComponentType<any> };
    userContactEditModal: { name: string; component: React.ComponentType<any> };
    userAddSkillErrorModal: { name: string; component: React.ComponentType<any> };
    userCoverImageViewModal: { name: string; component: React.ComponentType<any> };
    userAddSkillSuccessModal: { name: string; component: React.ComponentType<any> };
    userProfileImageViewModal: { name: string; component: React.ComponentType<any> };
    userCoverImageUpdatePreviewModal: { name: string; component: React.ComponentType<any> };
    userProfileImageUpdatePreviewModal: { name: string; component: React.ComponentType<any> };
  };
  
  const Modals: UserModal = {
    userInfoEditModal: createModal("userInfoEditModal",UserInfoEditPage),
    userAddSkillModal: createModal("userAddSkillModal", UserAddSkillPage),
    userAboutEditModal: createModal("userAboutEditModal",UserAboutEditPage),
    userContactEditModal: createModal("userContactEditModal",UserContactEditModalComponent ),
    userAddSkillErrorModal: createModal("userAddSkillErrorModal", UserAddSkillErrorModaComponent),
    userCoverImageViewModal: createModal("userCoverImageViewModal", UserCoverImageViewModalComponent),
    userAddSkillSuccessModal: createModal("userAddSkillSuccessModal", UserAddSkillSuccessModalComponent),
    userProfileImageViewModal: createModal("userProfileImageViewModal", UserProfileImageViewModalComponent),
    userCoverImageUpdatePreviewModal: createModal("userCoverImageUpdatePreviewModal", UserCoverImageUpdatePreviewModalComponent),
    userProfileImageUpdatePreviewModal: createModal("userProfileImageUpdatePreviewModal", UserProfileImageUpdatePreviewModalComponent),
  };

  type ModalNamesType = {
    [key in keyof UserModal]: { name: string; component: React.ComponentType<any> };
  };

  const UserModals: ModalNamesType = Modals;
  
  export { UserModals };