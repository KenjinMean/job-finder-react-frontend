export const baseUrl = "/job-finder-react-frontend/";

export const jobSubpath = "jobs";
export const userSubpath = "users";
export const authSubpath = "auth";

export const prependBaseUrl = (route) => baseUrl + route;
const prependJobSubpath = (route) => jobSubpath + route;
const prependUserSubpath = (route) => userSubpath + route;
const prependAuthSubpath = (route) => authSubpath + route;

const job = {
  jobListingPage: "",
  jobDetailsPage: "/view/",
  jobSearchResultPage: "/search",
};

const user = {
  userProfilePage: "",
  userAddSkillPage: "/add-skill",
  userEditSkillPage: "/edit-skills",
  userEditUserInfoPage: "/edit-user-info",
  userAddSkillErrorPage: "/add-skill-error",
  userAddSkillSuccessPage: "/add-skill-success",
  userProfileOverlayPage: "/overlay/profile-picture",
  userCoverImageOverlayPage: "/overlay/cover-image-overlay",
  userProfileImagePreviewPage: "/overlay/profile-image-preview",
  userCoverImageUpdatePreviewPage: "/overlay/cover-image-update-preview",
};

const auth = {
  authLoginPage: "/login",
  authRegisterPage: "/register",
  authProviderCallbackPage: "/auth-provider-callback",
};

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

export const authRoutes = Object.fromEntries(
  Object.entries(auth).map(([key, value]) => [
    key,
    prependBaseUrl(prependAuthSubpath(value)),
  ])
);
