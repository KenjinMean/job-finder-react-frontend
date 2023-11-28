const baseUrl = import.meta.env.VITE_BASE_URL;

const jobListingPageRoute = `${baseUrl}jobs`;
const jobDetailsPageRoute = `${baseUrl}jobs/view/`;
const jobSearchResultPageRoute = `${baseUrl}jobs/search`;

const userProfilePageRoute = `${baseUrl}profile`;
const userAddSkillPageRoute = `${baseUrl}profile/add-skill`;
const userEditSkillPageRoute = `${baseUrl}profile/edit-skills`;

const authLoginPageRoute = `${baseUrl}auth/login`;
const authRegisterPageRoute = `${baseUrl}auth/register`;
const authProviderCallbackPageRoute = `${baseUrl}auth-provider-callback`;

export {
  jobListingPageRoute,
  jobDetailsPageRoute,
  jobSearchResultPageRoute,
  userProfilePageRoute,
  userAddSkillPageRoute,
  userEditSkillPageRoute,
  authLoginPageRoute,
  authRegisterPageRoute,
  authProviderCallbackPageRoute,
};
