import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error.Page";
import AppLayout from "./layouts/App.Layout";
import JobsLayout from "./layouts/Jobs.Layout";
import AuthLayout from "./layouts/Auth.Layout";
import AuthSkeletonUtil from "./utils/AuthSkeleton.Util";
import UserProfileLayout from "./layouts/UserProfile.Layout";
import JobListSkeletonUtil from "./utils/JobListSkeleton.Util";
import { QueryBoundaries } from "./utils/QueryBoundaries.Util";
import ComponentDesignView from "./components/views/ComponentDesign.View";
import JobDetailSkeletonUtil from "./utils/JobDetailSkeleton.Util";
import AuthProviderCallbackPage from "./utils/AuthProviderCallback.Page";
import ProfileSkeletonLoadingUtil from "./utils/ProfileSkeletonLoading.Util.jsx";

const LoginPage = lazy(() => import("./pages/Login.Page"));
const RegisterPage = lazy(() => import("./pages/Register.Page"));
const JobDetailsPage = lazy(() => import("./pages/JobDetails.Page"));
const JobListingPage = lazy(() => import("./pages/JobListing.Page"));

const SearchResultPage = lazy(() => import("./pages/SearchResult.Page"));
const UserProfilePage = lazy(() => import("./pages/UserProfile.Page"));
const UserProfileWizardPage = lazy(() =>
  import("./pages/UserProfileWizard.Page")
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
