type userModalName = {
  userInfoEditModal: string;
  userAddSkillModal: string;
  userAboutEditModal: string;
  userAddSkillErrorModal: string;
  userCoverImageViewModal: string;
  userAddSkillSuccessModal: string;
  userProfileImageViewModal: string;
  userCoverImageUpdatePreviewModal: string;
  userProfileImageUpdatePreviewModal: string;
};

const userModals: userModalName = {
  userInfoEditModal: "edit-info",
  userAddSkillModal: "add-skill",
  userAboutEditModal: "edit-about",
  userAddSkillErrorModal: "add-skill-error",
  userCoverImageViewModal: "view-cover-image",
  userAddSkillSuccessModal: "add-skill-success",
  userProfileImageViewModal: "view-profile-image",
  userCoverImageUpdatePreviewModal: "preview-cover-image",
  userProfileImageUpdatePreviewModal: "preview-profile-image",
};

export const userModalNames: Record<keyof userModalName, string> =
  Object.fromEntries(
    Object.entries(userModals).map(([key, value]) => [
      key as keyof userModalName,
      value,
    ])
  ) as Record<keyof userModalName, string>;

