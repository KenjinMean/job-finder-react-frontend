export const baseUrl = "/job-finder-react-frontend/";
export const jobSubpath = "jobs";
export const authSubpath = "auth";
export const userSubpath = "user";

const prependBaseUrl = (route: string): string => baseUrl + route;
const prependJobSubpath = (route: string): string => jobSubpath + route;
const prependUserSubpath = (route: string): string => userSubpath + route;
const prependAuthSubpath = (route: string): string => authSubpath + route;

// AUTHENICATION Rotues
type AuthRoutes = {
  authLoginPage: string;
  authRegisterPage: string;
  authProviderCallbackPage: string;
};

type UserOverlays = {
  userAboutEditOverlay: string;
  userSkillAddOverlay: string;
};

type UserRoutes = {
  userProfilePage: string;
  userEditSkillPage: string;
  userAddSkillPage: string;
  userAboutEditPage: string;
  useUserInfoEditPage: string;
  userAddSkillErrorPage: string;
  userProfileViewPage: string;
  userCoverImageViewPage: string;
  userAddSkillSuccessPage: string;
  userProfileImagePreviewPage: string;
  userCoverImageUpdatePreviewPage: string;
};

type JobRoutes = {
  jobListingPage: string;
  jobDetailsPage: string;
  jobSearchResultPage: string;
};

const auth: AuthRoutes = {
  authLoginPage: "/login",
  authRegisterPage: "/register",
  authProviderCallbackPage: "/auth-provider-callback",
};

// JOB Routes
const job: JobRoutes = {
  jobListingPage: "",
  jobDetailsPage: "/view/",
  jobSearchResultPage: "/search",
};

// USER Routes
const user: UserRoutes = {
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

const user_Overlays: UserOverlays = {
  userAboutEditOverlay: "editAboutModal",
  userSkillAddOverlay: "addSkillModal",
};

export const authRoutes: Record<keyof AuthRoutes, string> = Object.fromEntries(
  Object.entries(auth).map(([key, value]) => [
    key as keyof AuthRoutes,
    prependBaseUrl(prependAuthSubpath(value)),
  ])
) as Record<keyof AuthRoutes, string>;

export const jobRoutes: Record<keyof JobRoutes, string> = Object.fromEntries(
  Object.entries(job).map(([key, value]) => [
    key as keyof JobRoutes,
    prependBaseUrl(prependJobSubpath(value)),
  ])
) as Record<keyof JobRoutes, string>;

export const userRoutes: Record<keyof UserRoutes, string> = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [
    key as keyof UserRoutes,
    prependBaseUrl(prependUserSubpath(value)),
  ])
) as Record<keyof UserRoutes, string>;

export const userOverlays: Record<keyof UserOverlays, string> =
  Object.fromEntries(
    Object.entries(user_Overlays).map(([key, value]) => [
      key as keyof UserOverlays,
      value,
    ])
  ) as Record<keyof UserOverlays, string>;
