// NOTE when using this commented implementation the routes should be accessed using the routes object e.g. (routes.jobListingPageRoute)
// export const baseUrl = "/job-finder-react-frontend/";

// const prependBaseUrl = (route) => baseUrl + route;

// const routeNames = {
//   jobListingPage: "jobs",
//   jobDetailsPage: "jobs/view/",
//   jobSearchResultPage: "jobs/search",

//   userProfilePage: "profile",
//   userAddSkillPage: "profile/add-skill",
//   userEditSkillPage: "profile/edit-skills",
//   userAddSkillSuccessPage: "profile/add-skill-success",
//   userAddSkillErrorPage: "profile/add-skill-error",
//   userAddSkillStatusPage: "profile/add-skill-status/",

//   authLoginPage: "auth/login",
//   authRegisterPage: "auth/register",
//   authProviderCallbackPage: "auth-provider-callback",
// };

// export const routes = Object.fromEntries(
//   Object.entries(routeNames).map(([key, value]) => [key, prependBaseUrl(value)])
// );

// IMPROVE: dynamic routes can be a function that accepts the dynamic variable and return it.
// export const baseUrl = import.meta.env.VITE_APP_BASE_URL;
export const baseUrl = "/job-finder-react-frontend/";

export const prependBaseUrl = (route) => baseUrl + route;

export const jobListingPageRoute = prependBaseUrl("jobs");
export const jobDetailsPageRoute = prependBaseUrl("jobs/view/");
export const jobSearchResultPageRoute = prependBaseUrl("jobs/search");

export const userProfilePageRoute = prependBaseUrl("profile");
export const userAddSkillPageRoute = prependBaseUrl("profile/add-skill");
export const userEditSkillPageRoute = prependBaseUrl("profile/edit-skills");
export const userAddSkillSuccessPageRoute = prependBaseUrl(
  "profile/add-skill-success"
);
export const userAddSkillErrorPageRoute = prependBaseUrl(
  "profile/add-skill-error"
);
export const userAddSkillStatusPageRoute = prependBaseUrl(
  "profile/add-skill-status/"
);
export const editUserInfoPageRoute = prependBaseUrl("profile/edit-user-info");
export const userProfileOverlayPageRoute = prependBaseUrl(
  "profile/overlay/profile-picture"
);
export const userImagePreviewpageRoute = prependBaseUrl(
  "profile/overlay/image-preview"
);

export const authLoginPageRoute = prependBaseUrl("auth/login");
export const authRegisterPageRoute = prependBaseUrl("auth/register");
export const authProviderCallbackPageRoute = prependBaseUrl(
  "auth-provider-callback"
);
