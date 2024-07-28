export const jobSubpath = "/";
export const authSubpath = "/auth";
export const userSubpath = "/user";

// Function to prepend subpath to routes and infer the route type
const createRoutes = <T extends Record<string, string>>(subpath: string, routes: T): Record<keyof T, string> => {
  return Object.fromEntries(
    Object.entries(routes).map(([key, value]) => [
      key,
      subpath + value,
    ])
  ) as Record<keyof T, string>;
};

// Auth routes
const auth = {
  authLoginPage: "/login",
  authRegisterPage: "/register",
  authRequestOtp: "/request-otp",
  authVerifyOtp: "/verify-otp",
  authVerifyOtpSuccess: "/verify-otp-success",
  authProviderCallbackPage: "/auth-provider-callback",
};
export const authRoutes = createRoutes(authSubpath, auth);

// User routes
const user = {
  userProfilePage: "",
  userEditSkillPage: "/edit-skills",
  userSavedJobsPage: "/saved-jobs",
  userPostJobPage: "/post-job",
  userCompaniesPage: "/companies",
  userCompanyDetailsPage: "/company-details/",
  userAddCompanyPage: "/companies/add",
  userUpdateCompanyPage: "/companies/update/",
};
export const userRoutes = createRoutes(userSubpath, user);

// Job routes
const job = {
  jobListingPage: "",
  jobDetailsPage: "view/",
  jobSearchResultPage: "search",
} as const;
export const jobRoutes = createRoutes(jobSubpath, job);

