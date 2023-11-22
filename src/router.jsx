import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/App.Layout.jsx";
import JobsLayout from "./layouts/Jobs.Layout.jsx";
import AuthLayout from "./layouts/Auth.Layout.jsx";
import UserLayout from "./layouts/User.Layout.jsx";

import ComponentDesignView from "./components/ComponentDesign.View.jsx";
import UserEditSkillComponent from "./components/user/UserEditSkill.Component.jsx";
import AddUserSkillModalComponent from "./components/modals/user/AddUserSkill.Modal.Component.jsx";

import ErrorPage from "./pages/Error.Page";
import LoginPage from "./pages/Login.Page";
import RegisterPage from "./pages/Register.Page";
import JobDetailspage from "./pages/JobDetails.Page";
import UserProfilePage from "./pages/UserProfile.Page";
import JobListingPage from "./pages/JobListing.Page.jsx";
import JobSearchResultpage from "./pages/JobSearchResult.Page.jsx";

import ModalUtil from "./components/utils/Modal.Util.jsx";
import AuthProviderCallbackPage from "./components/utils/AuthProviderCallback.Page.Util.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/jobs" />,
      },
      {
        path: "/jobs",
        element: <JobsLayout />,
        children: [
          {
            path: "",
            element: <JobListingPage />,
          },
          {
            path: "search",
            element: <JobSearchResultpage />,
          },
          {
            path: "view/:jobSlug",
            element: <JobDetailspage />,
          },
        ],
      },
      {
        path: "profile",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <UserProfilePage />,
            children: [
              {
                path: "add-skill",
                element: (
                  <ModalUtil modalComponent={<AddUserSkillModalComponent />} />
                ),
              },
            ],
          },
          {
            path: "edit-skills",
            element: <UserEditSkillComponent />,
          },
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth",
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
        path: "/auth-provider-callback",
        element: <AuthProviderCallbackPage />,
      },
    ],
  },

  {
    path: "/component-design",
    element: <ComponentDesignView />,
  },
  {
    path: "*",
    element: <ErrorPage error={{ code: "404" }} />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

export default router;
