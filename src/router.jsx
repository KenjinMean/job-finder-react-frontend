import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./components/page/Error.Page";
import AppLayout from "./components/layouts/App.Layout";
import JobsLayout from "./components/layouts/Jobs.Layout";
import AuthLayout from "./components/layouts/Auth.Layout";
import AuthSkeletonUtil from "./components/utils/AuthSkeleton.Util";
import UserProfileLayout from "./components/layouts/UserProfile.Layout";
import JobListSkeletonUtil from "./components/utils/JobListSkeleton.Util";
import { QueryBoundaries } from "./components/utils/QueryBoundaries.Util";
import ComponentDesignView from "./components/views/ComponentDesign.View";
import JobDetailSkeletonUtil from "./components/utils/JobDetailSkeleton.Util";
import AuthProviderCallbackPage from "./components/utils/AuthProviderCallback.Page";
import ProfileSkeletonLoadingUtil from "./components/utils/ProfileSkeletonLoading.Util.jsx";
import Error404View from "./components/views/Error404.View";

const LoginPage = lazy(() => import("./components/page/Login.Page"));
const RegisterPage = lazy(() => import("./components/page/Register.Page"));
const JobDetailsPage = lazy(() => import("./components/page/JobDetails.Page"));
const JobListingPage = lazy(() => import("./components/page/JobListing.Page"));

const SearchResultPage = lazy(() =>
  import("./components/page/SearchResult.Page")
);
const UserProfilePage = lazy(() =>
  import("./components/page/UserProfile.Page")
);
const UserProfileWizardPage = lazy(() =>
  import("./components/page/UserProfileWizard.Page")
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
    path: "/test-component",
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
