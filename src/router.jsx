import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  authRoutes,
  authSubpath,
  baseUrl,
  jobRoutes,
  jobSubpath,
  userRoutes,
  userSubpath,
} from "./constants/routes.jsx";

import AppLayout from "./layouts/App.Layout.jsx";
import JobsLayout from "./layouts/Jobs.Layout.jsx";
import AuthLayout from "./layouts/Auth.Layout.jsx";
import UserLayout from "./layouts/User.Layout.jsx";

// used for designing/previewing component
import ComponentDesignView from "./components/ComponentDesign.View.jsx";

import ErrorPage from "./pages/Error.Page";

import LoginPage from "./pages/Login.Page";
import RegisterPage from "./pages/Register.Page";
import AuthProviderCallbackPage from "./pages/AuthProviderCallback.Page.jsx";

import JobDetailspage from "./pages/JobDetails.Page";
import JobListingPage from "./pages/JobListing.Page.jsx";
import JobSearchResultpage from "./pages/JobSearchResult.Page.jsx";

import UserProfilePage from "./pages/UserProfile.Page";
import UserAddSkillPage from "./pages/UserAddSkill.Page.jsx";
import UserInfoEditPage from "./pages/UserInfoEdit.Page.jsx";
import UserSkillEditPage from "./pages/UserSkillEdit.Page.jsx";
import UserAddSkillErrorPage from "./pages/UserAddSkillError.Page.jsx";
import UserCoverImageViewPage from "./pages/UserCoverImageView.Page.jsx";
import UserAddSkillSuccessPage from "./pages/UserAddSkillSuccess.Page.jsx";
import UserProfileImageViewPage from "./pages/UserProfileImageView.Page.jsx";
import UserProfileImagePreviewPage from "./pages/UserProfileImageUpdatePreview.Page.jsx";
import UserCoverImageUpdatePreviewModalComponent from "./components/modals/user/UserCoverImageUpdatePreview.Modal.Component.jsx";

import ProtectedRouteUtil from "./components/utils/ProtectedRoute.Util.jsx";

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={`${jobRoutes.jobListingPage}`} />,
      },
      {
        path: jobSubpath,
        element: <JobsLayout />,
        children: [
          {
            path: jobRoutes.jobListingPage,
            element: <JobListingPage />,
          },
          {
            path: jobRoutes.jobSearchResultPage,
            element: <JobSearchResultpage />,
          },
          {
            path: `${jobRoutes.jobDetailsPage}:jobSlug`,
            element: <JobDetailspage />,
          },
        ],
      },
      {
        path: userSubpath,
        element: <ProtectedRouteUtil component={<UserLayout />} />,
        children: [
          {
            path: "",
            element: <UserProfilePage />,
            children: [
              {
                path: userRoutes.userAddSkillPage,
                element: <UserAddSkillPage />,
              },
              {
                path: userRoutes.userAddSkillSuccessPage,
                element: <UserAddSkillSuccessPage />,
              },
              {
                path: userRoutes.userAddSkillErrorPage,
                element: <UserAddSkillErrorPage />,
              },
              {
                path: userRoutes.userEditUserInfoPage,
                element: <UserInfoEditPage />,
              },
              {
                path: userRoutes.userProfileViewPage,
                element: <UserProfileImageViewPage />,
              },
              {
                path: userRoutes.userProfileImagePreviewPage,
                element: <UserProfileImagePreviewPage />,
              },
              {
                path: userRoutes.userCoverImageViewPage,
                element: <UserCoverImageViewPage />,
              },
              {
                path: userRoutes.userCoverImageUpdatePreviewPage,
                element: <UserCoverImageUpdatePreviewModalComponent />,
              },
            ],
          },
          {
            path: userRoutes.userEditSkillPage,
            element: <UserSkillEditPage />,
          },
        ],
      },
      {
        path: authSubpath,
        element: <AuthLayout />,
        children: [
          {
            path: authSubpath,
            element: <Navigate to={`${authRoutes.authLoginPage}}`} />,
          },
          {
            path: authRoutes.authLoginPage,
            element: <LoginPage />,
          },
          {
            path: authRoutes.authRegisterPage,
            element: <RegisterPage />,
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
