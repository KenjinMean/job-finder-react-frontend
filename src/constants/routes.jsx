export const baseUrl = "/job-finder-react-frontend/";
export const jobSubpath = "jobs";
export const authSubpath = "auth";
export const userSubpath = "user";

const prependBaseUrl = (route) => baseUrl + route;
const prependJobSubpath = (route) => jobSubpath + route;
const prependUserSubpath = (route) => userSubpath + route;
const prependAuthSubpath = (route) => authSubpath + route;

// AUTHENICATION Rotues
const auth = {
  authLoginPage: "/login",
  authRegisterPage: "/register",
  authProviderCallbackPage: "/auth-provider-callback",
};

// JOB Routes
const job = {
  jobListingPage: "",
  jobDetailsPage: "/view/",
  jobSearchResultPage: "/search",
};

// USER Routes
// update the routes to noun first then adjective
const user = {
  userProfilePage: "",
  userEditSkillPage: "/edit-skills",
  userAddSkillPage: "/overlay/add-skill",
  userAboutEditPage: "/overlay/edit-about",
  useUserInfoEditPage: "/overlay/edit-user-info",
  userAddSkillErrorPage: "/overlay/add-skill-error",
  userProfileViewPage: "/overlay/profile-image/view",
  userCoverImageViewPage: "/overlay/cover-image/view",
  userAddSkillSuccessPage: "/overlay/add-skill-success",
  userProfileImagePreviewPage: "/overlay/profile-image-update/preview",
  userCoverImageUpdatePreviewPage: "/overlay/cover-image-update/preview",
};

const user_Overlays = {
  userAboutEditOverlay: "editAboutModalnew",
  userSkillAddOverlay: "addSkillModalnew",
  userProfileImagePreviewOverlay: "previewProfileImage",
  userCoverImagePreviewOverlay: "previewCoverImage",
};

export const userOverlays = Object.fromEntries(
  Object.entries(user_Overlays).map(([key, value]) => [key, value])
);

export const authRoutes = Object.fromEntries(
  Object.entries(auth).map(([key, value]) => [
    key,
    prependBaseUrl(prependAuthSubpath(value)),
  ])
);

export const jobRoutes = Object.fromEntries(
  Object.entries(job).map(([key, value]) => [
    key,
    prependBaseUrl(prependJobSubpath(value)),
  ])
);

export const userRoutes = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [
    key,
    prependBaseUrl(prependUserSubpath(value)),
  ])
);
