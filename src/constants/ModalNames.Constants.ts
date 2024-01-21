import UserAboutEditPage from "../pages/UserAboutEdit.Modal.Page"
import UserInfoEditModalPage from "../pages/UserInfoEdit.Modal.Page"
import UserAddSkillModalPage from "../pages/UserAddSkill.Modal.Page"
import UserContactEditModalPage from "../pages/UserContactEdit.Modal.Page"
import UserAddSkillErrorModalPage from "../pages/UserAddSkillError.Modal.Page"
import UserCoverImageViewModalPage from "../pages/UserCoverImageView.Modal.Page"
import UserAddSkillSuccessModalPage from "../pages/UserAddSkillSuccess.Modal.Page"
import UserProfileImageViewModalPage from "../pages/UserProfileImageView.Modal.Page"
import UserCoverImageUpdatePreviewModalPage from "../pages/UserCoverImageUpdatePreview.Modal.Page"
import UserProfileImageUpdatePreviewModalPage from "../pages/UserProfileImageUpdatePreview.Modal.Page"

import SettingsModalComponent from "../components/modals/Settings.Modal.Component"


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
    userAboutEditModal: createModal("userAboutEditModal",UserAboutEditPage),
    userInfoEditModal: createModal("userInfoEditModal",UserInfoEditModalPage),
    userAddSkillModal: createModal("userAddSkillModal", UserAddSkillModalPage),
    userContactEditModal: createModal("userContactEditModal",UserContactEditModalPage ),
    userAddSkillErrorModal: createModal("userAddSkillErrorModal", UserAddSkillErrorModalPage),
    userCoverImageViewModal: createModal("userCoverImageViewModal", UserCoverImageViewModalPage),
    userAddSkillSuccessModal: createModal("userAddSkillSuccessModal", UserAddSkillSuccessModalPage),
    userProfileImageViewModal: createModal("userProfileImageViewModal", UserProfileImageViewModalPage),
    userCoverImageUpdatePreviewModal: createModal("userCoverImageUpdatePreviewModal", UserCoverImageUpdatePreviewModalPage),
    userProfileImageUpdatePreviewModal: createModal("userProfileImageUpdatePreviewModal", UserProfileImageUpdatePreviewModalPage),
  };

  type ModalNamesType = {
    [key in keyof UserModal]: { name: string; component: React.ComponentType<any> };
  };

  const UserModals: ModalNamesType = Modals;
  export { UserModals };



  type GlobalModalsType = {
    settingsModal: { name: string; component: React.ComponentType<any> };
  };

  const globalModals: GlobalModalsType = {
    settingsModal: createModal("settingsModal", SettingsModalComponent),
   };

  type GlobalModalNamesType = {
    [key in keyof GlobalModalsType]: { name: string; component: React.ComponentType<any> };
  }

  const GlobalModals: GlobalModalNamesType = globalModals;
  export {GlobalModals}