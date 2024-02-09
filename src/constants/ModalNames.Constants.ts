import { lazy } from "react"

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

const UserAboutEditModalComponent = lazy(() =>
  import("../components/modals/user/UserAboutEdit.Modal.Component")
  );
  const SettingsModalComponent = lazy(() =>
  import("../components/modals/Settings.Modal.Component")
  );
  const UserAddEducationModalComponent =  lazy(() =>
  import("../components/modals/user/UserEducationAdd.Modal.Component")
  );

  const UserEducationEditModalComponent =  lazy(() =>
  import("../components/modals/user/UserEducationEdit.Modal.Component")
  );

/*---------------------------------------------------------------------------------- */
  const createModal = (
    name: string,
    component: React.ComponentType<any>
  ): { name: string; component: React.ComponentType<any> } => ({
    name,
    component,
  });

/*---------------------------------------------------------------------------------- */
// IMPLEMENT THIS LATER

// type UserModal = {
//   [key: string]: { name: string; component: React.ComponentType<any> };
// };

// // Define an array of modal names
// const modalNames: string[] = [
//   "userAboutEditModal",
//   "userInfoEditModal",
//   "userAddSkillModal",
//   "userContactEditModal",
//   "userAddSkillErrorModal",
//   "userCoverImageViewModal",
//   "userAddSkillSuccessModal",
//   "userProfileImageViewModal",
//   "userCoverImageUpdatePreviewModal",
//   "userProfileImageUpdatePreviewModal"
// ];

// // Create a function to create a modal object
// const createModal = (name: string, component: React.ComponentType<any>) => {
//   return { name, component };
// };

// // Dynamically import and create modal objects
// const userModals: UserModal = modalNames.reduce((acc, modalName) => {
//   const importPath = `../pages/${modalName}.Modal.Page`;
//   const lazyComponent = lazy(() =>
//     import(importPath).then(module => module.default)
//   );
//   return { ...acc, [modalName]: createModal(modalName, lazyComponent) };
// }, {});

// export default userModals;
/*---------------------------------------------------------------------------------- */


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
    userEducationAddModal: { name: string; component: React.ComponentType<any> };
    userEducationEditModal: { name: string; component: React.ComponentType<any> };
  };
  
  const Modals: UserModal = {
    userAboutEditModal: createModal("user-about-edit-modal",UserAboutEditModalComponent),
    userInfoEditModal: createModal("userInfoEditModal",UserInfoEditModalPage),
    userAddSkillModal: createModal("userAddSkillModal", UserAddSkillModalPage),
    userContactEditModal: createModal("userContactEditModal",UserContactEditModalPage ),
    userAddSkillErrorModal: createModal("userAddSkillErrorModal", UserAddSkillErrorModalPage),
    userCoverImageViewModal: createModal("userCoverImageViewModal", UserCoverImageViewModalPage),
    userAddSkillSuccessModal: createModal("userAddSkillSuccessModal", UserAddSkillSuccessModalPage),
    userProfileImageViewModal: createModal("userProfileImageViewModal", UserProfileImageViewModalPage),
    userCoverImageUpdatePreviewModal: createModal("userCoverImageUpdatePreviewModal", UserCoverImageUpdatePreviewModalPage),
    userProfileImageUpdatePreviewModal: createModal("userProfileImageUpdatePreviewModal", UserProfileImageUpdatePreviewModalPage),

    userEducationAddModal: createModal("user-education-add-modal",UserAddEducationModalComponent),
    userEducationEditModal: createModal("user-education-edit-modal",UserEducationEditModalComponent),
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