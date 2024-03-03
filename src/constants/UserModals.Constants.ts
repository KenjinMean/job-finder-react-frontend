// FIX: dynamically imported but not lazyLoaded because when used on userModalProvider it already invoked
// so it loaded Immediately
import userModals from './generatedUserModals';
import { toKebabCase } from "../utils/toKebabCase";
import { toCamelCase } from "../utils/toCamelCase";


/** ------------------------------------------------------------ */
// Define a type for the user modal names
interface UserModalNames {
  [camelCaseName: string]: string;
}

// Create an object to store the modal names
const userModalNames: UserModalNames = {};

// Loop through modals and extract the names
for (const modalName of userModals) {
  const [name] = modalName.split(".Modal.Component");
  const camelCaseName = toCamelCase(name) + "Modal";
  const kebabCaseName = toKebabCase(name) + "-modal";

  userModalNames[camelCaseName] = kebabCaseName;
}
/** ------------------------------------------------------------ */


// Define a single object representing a user modal
interface UserModal {
  name: string;
  component: React.ComponentType<any>;
}

// Define a type for the user modal parameters as a record
type UserModalParams = Record<string, UserModal>;

// Dynamically import each modal component and populate userModalParams
const userModalParams: UserModalParams = {};

for (const modalName of userModals) {
  const [name] = modalName.split(".Modal.Component");
  const componentName = toKebabCase(name);

  // Dynamically import the component using dynamic import
  const importedComponent = await import(
    `../components/modals/user/${modalName}.jsx`
  );

  userModalParams[toCamelCase(name) + "Modal"] = {
    name: componentName,
    component: importedComponent.default,
  };
}

export { userModalNames, userModalParams };

// import { lazy } from "react"

// import UserAboutEditPage from "../pages/UserAboutEdit.Modal.Page"
// import UserInfoEditModalPage from "../pages/UserInfoEdit.Modal.Page"
// import UserAddSkillModalPage from "../pages/UserAddSkill.Modal.Page"
// import UserContactEditModalPage from "../pages/UserContactEdit.Modal.Page"
// import UserAddSkillErrorModalPage from "../pages/UserAddSkillError.Modal.Page"
// import UserCoverImageViewModalPage from "../pages/UserCoverImageView.Modal.Page"
// import UserAddSkillSuccessModalPage from "../pages/UserAddSkillSuccess.Modal.Page"
// import UserProfileImageViewModalPage from "../pages/UserProfileImageView.Modal.Page"
// import UserCoverImageUpdatePreviewModalPage from "../pages/UserCoverImageUpdatePreview.Modal.Page"
// import UserProfileImageUpdatePreviewModalPage from "../pages/UserProfileImageUpdatePreview.Modal.Page"

// const UserAboutEditModalComponent = lazy(() =>
//   import("../components/modals/user/UserAboutEdit.Modal.Component")
//   );
//   const SettingsModalComponent = lazy(() =>
//   import("../components/modals/Settings.Modal.Component")
//   );
//   const UserAddEducationModalComponent =  lazy(() =>
//   import("../components/modals/user/UserEducationAdd.Modal.Component")
//   );

//   const UserEducationEditModalComponent =  lazy(() =>
//   import("../components/modals/user/UserEducationEdit.Modal.Component")
//   );

//   import UserExperienceEditModalComponent from "../components/modals/user/UserExperienceEdit.Modal.Component"
//   import UserExperienceAddModalComponent from "../components/modals/user/UserExperienceAdd.Modal.Component"
//   import UserSkillsModalComponent from "../components/modals/user/UserSkills.Modal.Component"
//   /*---------------------------------------------------------------------------------- */
//   const createModal = (
//     name: string,
//     component: React.ComponentType<any>
//   ): { name: string; component: React.ComponentType<any> } => ({
//     name,
//     component,
//   });
  
//   const userModals: string[] = [
//     "UserAboutEdit.Modal.Component",
//     "UserAddSkill.Modal.Component",
//     "UserAddSkillError.Modal.Component",
//   ];

//   const formattedModals: { name: string; componentName: string }[] = userModals.map(modalName => {
//     const [name] = modalName.split(".Modal.Component");
//     const componentName = name.charAt(0).toLowerCase() + name.slice(1);
  
//     return {
//       name: name,
//       componentName: componentName,
//     };
//   });

// /*---------------------------------------------------------------------------------- */
//   type UserModal = {
//     userAddSkillModal: { name: string; component: React.ComponentType<any> };
//     userInfoEditModal: { name: string; component: React.ComponentType<any> };
//     userAboutEditModal: { name: string; component: React.ComponentType<any> };
//     userContactEditModal: { name: string; component: React.ComponentType<any> };
//     userAddSkillErrorModal: { name: string; component: React.ComponentType<any> };
//     userCoverImageViewModal: { name: string; component: React.ComponentType<any> };
//     userAddSkillSuccessModal: { name: string; component: React.ComponentType<any> };
//     userProfileImageViewModal: { name: string; component: React.ComponentType<any> };
//     userCoverImageUpdatePreviewModal: { name: string; component: React.ComponentType<any> };
//     userProfileImageUpdatePreviewModal: { name: string; component: React.ComponentType<any> };
//     userEducationAddModal: { name: string; component: React.ComponentType<any> };
//     userEducationEditModal: { name: string; component: React.ComponentType<any> };
//     userAddExperienceModal: { name: string; component: React.ComponentType<any> };
//     userEditExperienceModal: { name: string; component: React.ComponentType<any> };
//     UserSkillsModalComponent: { name: string; component: React.ComponentType<any> };
//   };
  
// /*---------------------------------------------------------------------------------- */
//   const Modals: UserModal = {
//     userAboutEditModal: createModal("user-about-edit-modal",UserAboutEditModalComponent),
//     userInfoEditModal: createModal("userInfoEditModal",UserInfoEditModalPage),
//     userAddSkillModal: createModal("userAddSkillModal", UserAddSkillModalPage),
//     userContactEditModal: createModal("userContactEditModal",UserContactEditModalPage ),
//     userAddSkillErrorModal: createModal("userAddSkillErrorModal", UserAddSkillErrorModalPage),
//     userCoverImageViewModal: createModal("userCoverImageViewModal", UserCoverImageViewModalPage),
//     userAddSkillSuccessModal: createModal("userAddSkillSuccessModal", UserAddSkillSuccessModalPage),
//     userProfileImageViewModal: createModal("userProfileImageViewModal", UserProfileImageViewModalPage),
//     userCoverImageUpdatePreviewModal: createModal("userCoverImageUpdatePreviewModal", UserCoverImageUpdatePreviewModalPage),
//     userProfileImageUpdatePreviewModal: createModal("userProfileImageUpdatePreviewModal", UserProfileImageUpdatePreviewModalPage),

//     userEducationAddModal: createModal("user-education-add-modal",UserAddEducationModalComponent),
//     userEducationEditModal: createModal("user-education-edit-modal",UserEducationEditModalComponent),

//     userAddExperienceModal: createModal("user-experience-add-modal",UserExperienceAddModalComponent),
//     userEditExperienceModal: createModal("user-experience-edit-modal",UserExperienceEditModalComponent),
//     UserSkillsModalComponent: createModal("user-skills",UserSkillsModalComponent),
//   };

//   type ModalNamesType = {
//     [key in keyof UserModal]: { name: string; component: React.ComponentType<any> };
//   };

//   const UserModals: ModalNamesType = Modals;
//   export { UserModals };
