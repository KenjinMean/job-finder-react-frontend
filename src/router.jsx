import { createBrowserRouter } from "react-router-dom";

import {
  authRoutes,
  authSubpath,
  jobRoutes,
  jobSubpath,
  userRoutes,
  userSubpath,
} from "./constants/RoutesPath.Constants";

import AppLayout from "./layouts/App.Layout.jsx";
import JobsLayout from "./layouts/Jobs.Layout.jsx";
import AuthLayout from "./layouts/Auth.Layout.jsx";
import UserLayout from "./layouts/User.Layout.jsx";

import ComponentDesignView from "./components/ComponentDesign.View.jsx";

import ProtectedRouteUtil from "./components/utils/ProtectedRoute.Util.jsx";

import ErrorPage from "./pages/Error.Page";
import LoginPage from "./pages/Login.Page";
import RegisterPage from "./pages/Register.Page";
import OTPSuccessPage from "./pages/OTPSuccess.Page.jsx";
import OTPRequestPage from "./pages/OTPRequest.Page.jsx";
import OTPVerificationPage from "./pages/OTPVerification.Page.jsx";
import AuthProviderCallbackPage from "./pages/AuthProviderCallback.Page.jsx";

import JobListingPage from "./pages/JobListing.Page.jsx";
import JobDetailsPage from "./pages/JobDetails/JobDetails.Page.jsx";
import JobSearchResultpage from "./pages/JobSearchResult.Page.jsx";

import UserProfilePage from "./pages/UserProfile.Page";
import UserSkillEditPage from "./pages/UserSkillEdit.Page.jsx";
import UserSavedJobsPage from "./pages/UserSavedJobs.Page.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: jobSubpath,
        element: <JobsLayout />,
        children: [
          {
            index: true,
            element: <JobListingPage />,
          },
          {
            path: jobRoutes.jobSearchResultPage,
            element: <JobSearchResultpage />,
          },
          {
            path: `${jobRoutes.jobDetailsPage}:jobSlug`,
            element: <JobDetailsPage />,
          },
        ],
      },
      {
        path: userSubpath,
        element: <ProtectedRouteUtil component={<UserLayout />} />,
        children: [
          {
            index: true,
            element: <UserProfilePage />,
          },
          {
            path: userRoutes.userEditSkillPage,
            element: <UserSkillEditPage />,
          },
          {
            path: userRoutes.userSavedJobsPage,
            element: <UserSavedJobsPage />,
          },
        ],
      },
      {
        path: authSubpath,
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          {
            path: authRoutes.authLoginPage,
            element: <LoginPage />,
          },
          {
            path: authRoutes.authRegisterPage,
            element: <RegisterPage />,
          },
          {
            path: authRoutes.authVerifyOtp,
            element: <OTPVerificationPage />,
          },
          {
            path: authRoutes.authRequestOtp,
            element: <OTPRequestPage />,
          },
          {
            path: authRoutes.authVerifyOtpSuccess,
            element: <OTPSuccessPage />,
          },
        ],
      },
      {
        path: authRoutes.authProviderCallbackPage,
        element: <AuthProviderCallbackPage />,
      },
      {
        path: "component-design",
        element: <ComponentDesignView />,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage error={{ code: "404" }} />,
  },
  {
    path: "error",
    element: <ErrorPage />,
  },
]);

export default router;
