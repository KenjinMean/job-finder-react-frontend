import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import { userModalOverlayRoutes } from "../../constants/routes";
import { useOverlayParamDetector } from "../../hooks/useOverlayFunctions";

import UserInfoEditModalComponent from "../../components/modals/user/UserInfoEdit.Modal.Component";
import UserAddSkillModalComponent from "../../components/modals/user/UserAddSkill.Modal.Component";
import UserAboutEditModalComponent from "../../components/modals/user/UserAboutEdit.Modal.Component";
import UserAddSkillErrorModalComponent from "../../components/modals/user/UserAddSkillError.Modal.Component";
import UserCoverImageViewModalComponent from "../../components/modals/user/UserCoverImageView.Modal.Component";
import UserAddSkillSuccessModalComponent from "../../components/modals/user/UserAddSkillSuccess.Modal.Component";
import UserProfileImageViewModalComponent from "../../components/modals/user/UserProfileImageView.Modal.Component";
import UserCoverImageUpdatePreviewModalComponent from "../../components/modals/user/UserCoverImageUpdatePreview.Modal.Component";
import UserProfileImageUpdatePreviewModalComponent from "../../components/modals/user/UserProfileImageUpdatePreview.Modal.Component";

const {
  userInfoEditModal,
  userAddSkillModal,
  userAboutEditModal,
  userAddSkillErrorModal,
  userCoverImageViewModal,
  userAddSkillSuccessModal,
  userProfileImageViewModal,
  userCoverImageUpdatePreviewModal,
  userProfileImageUpdatePreviewModal,
} = userModalOverlayRoutes;

// NOTE: when defining new overlayComponents, The keys in overlayComponents
// should match the names in overlayDetectionMap for consistency.

// ADD THE ADD SKILL SUCCESS AND ERROR MODALS
const overlayComponents = [
  {
    key: "userProfileImageView",
    component: UserProfileImageViewModalComponent,
  },
  { key: "userCoverImageView", component: UserCoverImageViewModalComponent },
  { key: "userInfoEdit", component: UserInfoEditModalComponent },
  {
    key: "userProfileImageUpdatePreview",
    component: UserProfileImageUpdatePreviewModalComponent,
  },
  {
    key: "userCoverImageUpdatePreview",
    component: UserCoverImageUpdatePreviewModalComponent,
  },
  {
    key: "userAboutEdit",
    component: UserAboutEditModalComponent,
  },
  {
    key: "userAddSkill",
    component: UserAddSkillModalComponent,
  },
  {
    key: "userAddSkillSuccess",
    component: UserAddSkillSuccessModalComponent,
  },
  {
    key: "userAddSkillError",
    component: UserAddSkillErrorModalComponent,
  },
];

/**
 * React component for displaying user related overlays or modals,
 * it looks for an active "overlay" param in the url and displays matching overlay name,
 * Utilizes Framer Motion's AnimatePresence for animation of overlay components.
 *
 * @component
 * @example
 * // Import the UserOverlayProvider
 * import UserOverlayProvider from 'path-to/UserOverlayProvider';
 *
 * // Call UserOverlayProvider on the parent component where the modals will be called
 * function App() {
 *   return (
 *     <UserOverlayProvider />
 *   );
 * }
 *
 * @returns {ReactNode} - Rendered React node.
 */
const UserOverlayProvider = () => {
  const overlayDetectionMap = {
    userProfileImageView: useOverlayParamDetector(userProfileImageViewModal),
    userCoverImageView: useOverlayParamDetector(userCoverImageViewModal),
    userInfoEdit: useOverlayParamDetector(userInfoEditModal),
    userProfileImageUpdatePreview: useOverlayParamDetector(
      userProfileImageUpdatePreviewModal
    ),
    userCoverImageUpdatePreview: useOverlayParamDetector(
      userCoverImageUpdatePreviewModal
    ),
    userAboutEdit: useOverlayParamDetector(userAboutEditModal),
    userAddSkill: useOverlayParamDetector(userAddSkillModal),
    userAddSkillSuccess: useOverlayParamDetector(userAddSkillSuccessModal),
    userAddSkillError: useOverlayParamDetector(userAddSkillErrorModal),
  };

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {overlayComponents.map(
          ({ key, component }) =>
            overlayDetectionMap[key] && React.createElement(component, { key })
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default UserOverlayProvider;
