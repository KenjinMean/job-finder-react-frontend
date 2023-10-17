import { Navigate, createBrowserRouter } from "react-router-dom";

import CallbackPage from "./views/CallbackPage";
import ErrorPage from "./components/page/Error.Page";
import LoginPage from "./components/page/Login.Page";
import AppLayout from "./components/layouts/App.Layout";
import JobsLayout from "./components/layouts/Jobs.Layout";
import NotFoundPage from "./components/page/NotFound.Page";
import RegisterPage from "./components/page/Register.Page";
import JobDetailsPage from "./components/page/JobDetails.Page";
import JobsListingPage from "./components/page/JobListing.Page";
import UserProfilePage from "./components/page/UserProfile.Page";
import SearchResultPage from "./components/page/SearchResult.Page";
import UserProfileLayout from "./components/layouts/UserProfile.Layout";
import RegistrationLayout from "./components/layouts/Register.Layout";
import UserProfileWizardPage from "./components/page/UserProfileWizard.Page";

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
            element: <JobsListingPage />,
          },
          {
            path: "search",
            element: <SearchResultPage />,
          },
          {
            path: "view/:jobSlug",
            element: <JobDetailsPage />,
          },
        ],
      },
      {
        path: "profile",
        element: <UserProfileLayout />,
        children: [
          {
            path: "",
            element: <UserProfilePage />,
          },
          {
            path: "setup",
            element: <UserProfileWizardPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationLayout />,
    children: [
      {
        path: "",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/callback",
    element: <CallbackPage />,
  },
]);

export default router;
