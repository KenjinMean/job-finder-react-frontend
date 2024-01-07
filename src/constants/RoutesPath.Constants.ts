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

type UserRoutes = {
  userProfilePage: string;
  userEditSkillPage: string;
};

type JobRoutes = {
  jobListingPage: string;
  jobDetailsPage: string;
  jobSearchResultPage: string;
};

// AUTH Routes
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
