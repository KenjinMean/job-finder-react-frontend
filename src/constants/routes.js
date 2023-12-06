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

const baseUrl = "/job-finder-react-frontend/";

const prependBaseUrl = (route) => baseUrl + route;

const jobListingPageRoute = prependBaseUrl("jobs");
const jobDetailsPageRoute = prependBaseUrl("jobs/view/");
const jobSearchResultPageRoute = prependBaseUrl("jobs/search");

const userProfilePageRoute = prependBaseUrl("profile");
const userAddSkillPageRoute = prependBaseUrl("profile/add-skill");
const userEditSkillPageRoute = prependBaseUrl("profile/edit-skills");
const userAddSkillSuccessPageRoute = prependBaseUrl(
  "profile/add-skill-success"
);
const userAddSkillErrorPageRoute = prependBaseUrl("profile/add-skill-error");
const userAddSkillStatusPageRoute = prependBaseUrl("profile/add-skill-status/");

const authLoginPageRoute = prependBaseUrl("auth/login");
const authRegisterPageRoute = prependBaseUrl("auth/register");
const authProviderCallbackPageRoute = prependBaseUrl("auth-provider-callback");

export {
  baseUrl,
  jobListingPageRoute,
  jobDetailsPageRoute,
  jobSearchResultPageRoute,
  userProfilePageRoute,
  userAddSkillPageRoute,
  userEditSkillPageRoute,
  authLoginPageRoute,
  authRegisterPageRoute,
  authProviderCallbackPageRoute,
  userAddSkillSuccessPageRoute,
  userAddSkillErrorPageRoute,
  userAddSkillStatusPageRoute,
};
