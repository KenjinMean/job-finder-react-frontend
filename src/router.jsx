import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  authRoutes,
  authSubpath,
  baseUrl,
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
import AuthProviderCallbackPage from "./pages/AuthProviderCallback.Page.jsx";

import JobDetailspage from "./pages/JobDetails.Page";
import JobListingPage from "./pages/JobListing.Page.jsx";
import JobSearchResultpage from "./pages/JobSearchResult.Page.jsx";

import UserProfilePage from "./pages/UserProfile.Page";
import UserSkillEditPage from "./pages/UserSkillEdit.Page.jsx";

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
