import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  baseUrl,
  jobRoutes,
  jobSubpath,
  userCoverImageUpdatePreviewPageRouteNew,
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
import JobDetailspage from "./pages/JobDetails.Page";
import UserProfilePage from "./pages/UserProfile.Page";
import JobListingPage from "./pages/JobListing.Page.jsx";
import UserAddSkillPage from "./pages/UserAddSkill.Page.jsx";
import UserInfoEditPage from "./pages/UserInfoEdit.Page.jsx";
import UserSkillEditPage from "./pages/UserSkillEdit.Page.jsx";
import JobSearchResultpage from "./pages/JobSearchResult.Page.jsx";
import UserAddSkillErrorPage from "./pages/UserAddSkillError.Page.jsx";
import UserAddSkillSuccessPage from "./pages/UserAddSkillSuccess.Page.jsx";
import ProtectedRouteUtil from "./components/utils/ProtectedRoute.Util.jsx";
import AuthProviderCallbackPage from "./pages/AuthProviderCallback.Page.jsx";
import UserCoverImageOverlayPage from "./pages/UserCoverImageOverlay.Page.jsx";
import UserProfileImageOverlayPage from "./pages/UserProfileImageOverlay.Page.jsx";
import UserProfileImagePreviewPage from "./pages/UserProfileImageUpdatePreview.Page.jsx";
import UserCoverImageUpdatePreviewModalComponent from "./components/modals/user/UserCoverImageUpdatePreview.Modal.Component.jsx";

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={`${baseUrl}${jobRoutes.JobListingPage}`} />,
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
        path: "profile",
        element: <ProtectedRouteUtil component={<UserLayout />} />,
        children: [
          {
            path: "",
            element: <UserProfilePage />,
            children: [
              {
                path: "add-skill",
                element: <UserAddSkillPage />,
              },
              {
                path: "add-skill-success",
                element: <UserAddSkillSuccessPage />,
              },
              {
                path: "add-skill-error",
                element: <UserAddSkillErrorPage />,
              },
              {
                path: "edit-user-info",
                element: <UserInfoEditPage />,
              },
              {
                path: "overlay/profile-picture",
                element: <UserProfileImageOverlayPage />,
              },
              {
                path: "overlay/profile-image-preview",
                element: <UserProfileImagePreviewPage />,
              },
              {
                path: "overlay/user/cover-image-overlay",
                element: <UserCoverImageOverlayPage />,
              },
              {
                path: userCoverImageUpdatePreviewPageRouteNew,
                element: <UserCoverImageUpdatePreviewModalComponent />,
              },
            ],
          },
          {
            path: "edit-skills",
            element: <UserSkillEditPage />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "auth",
            element: <Navigate to="/auth/login" />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
      {
        path: "auth-provider-callback",
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
