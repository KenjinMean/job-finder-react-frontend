import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/layouts/App.Layout";
import JobsLayout from "./components/layouts/Jobs.Layout";
import AuthLayout from "./components/layouts/Auth.Layout";
import UserProfileLayout from "./components/layouts/UserProfile.Layout";

import ComponentDesignView from "./components/views/ComponentDesign.View";

import ModalUtil from "./components/utils/Modal.Util.jsx";
import { QueryBoundaries } from "./components/utils/QueryBoundaries.Util";
import AuthSkeletonUtil from "./components/utils/LoadersSpinners/AuthSkeleton.Util.jsx";
import ProfileSkeletonLoadingUtil from "./components/utils/ProfileSkeletonLoading.Util.jsx";
import JobListSkeletonUtil from "./components/utils/LoadersSpinners/JobListSkeleton.Util.jsx";
import JobDetailSkeletonUtil from "./components/utils/LoadersSpinners/JobDetailSkeleton.Util.jsx";

import AddUserSkillModalComponent from "./components/modals/user/AddUserSkill.Modal.Component.jsx";
import EditUserSkillModalComponent from "./components/modals/user/EditUserSkill.Modal.Component.jsx";

import ErrorPage from "./components/pages/Error.Page";
import AuthProviderCallbackPage from "./components/utils/AuthProviderCallback.Page.Util.jsx";

const LoginPage = lazy(() => import("./components/pages/Login.Page"));
const RegisterPage = lazy(() => import("./components/pages/Register.Page"));
const JobDetailsPage = lazy(() => import("./components/pages/JobDetails.Page"));
const JobListingPage = lazy(() => import("./components/pages/JobListing.Page"));
const SearchResultPage = lazy(() =>
  import("./components/pages/SearchResult.Page")
);
const UserProfilePage = lazy(() =>
  import("./components/pages/UserProfile.Page")
);
const UserProfileWizardPage = lazy(() =>
  import("./components/pages/UserProfileWizard.Page")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryBoundaries>
        <AppLayout />
      </QueryBoundaries>
    ),
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
            element: (
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <JobListSkeletonUtil key={i} />
                ))}
              >
                <JobListingPage />
              </Suspense>
            ),
          },
          {
            path: "search",
            element: (
              <Suspense
                fallback={[...Array(10).keys()].map((i) => (
                  <JobListSkeletonUtil key={i} />
                ))}
              >
                <SearchResultPage />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: "job",
        element: <JobsLayout />,
        children: [
          {
            path: "view/:jobSlug",
            element: (
              <Suspense fallback={<JobDetailSkeletonUtil />}>
                <JobDetailsPage />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: "profile",
        element: <UserProfileLayout />,
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
                <UserProfilePage />
              </Suspense>
            ),
            children: [
              {
                path: "edit-skill",
                element: (
                  <ModalUtil modalComponent={<EditUserSkillModalComponent />} />
                ),
              },
              {
                path: "add-skill",
                element: (
                  <ModalUtil modalComponent={<AddUserSkillModalComponent />} />
                ),
              },
              {
                path: "edit-contact",
                element: (
                  <ModalUtil modalComponent={<EditUserSkillModalComponent />} />
                ),
              },
            ],
          },
          {
            path: "setup",
            element: <UserProfileWizardPage />,
          },
        ],
      },
    ],
  },

  {
    path: "/auth",
    element: (
      <QueryBoundaries>
        <AuthLayout />
      </QueryBoundaries>
    ),
    children: [
      {
        path: "/auth",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<AuthSkeletonUtil />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<AuthSkeletonUtil />}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/component-design",
    element: <ComponentDesignView />,
  },
  {
    path: "/auth-provider-callback",
    element: (
      <QueryBoundaries>
        <AuthProviderCallbackPage />
      </QueryBoundaries>
    ),
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
