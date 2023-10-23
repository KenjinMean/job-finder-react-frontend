import { lazy, Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "./components/views/ErrorFallback.View";

import AppLayout from "./components/layouts/App.Layout";
import JobsLayout from "./components/layouts/Jobs.Layout";
// import JobListingPage from "./components/page/JobListing.Page";
import AuthProviderCallbackPage from "./components/utils/AuthProviderCallback.Page";
import ProfileSkeletonLoadingUtil from "./components/utils/ProfileSkeletonLoading.Util.jsx";
import JobListSkeletonUtil from "./components/utils/JobListSkeleton.Util";
import { QueryBoundaries } from "./components/utils/QueryBoundaries.Util";
import AuthLayout from "./components/layouts/Auth.Layout";
const NotFoundPage = lazy(() => import("./components/page/NotFound.Page"));
const ErrorPage = lazy(() => import("./components/page/Error.Page"));
const LoginPage = lazy(() => import("./components/page/Login.Page"));
const RegisterPage = lazy(() => import("./components/page/Register.Page"));
const JobDetailsPage = lazy(() => import("./components/page/JobDetails.Page"));
const JobListingPage = lazy(() => import("./components/page/JobListing.Page"));

const RegistrationLayout = lazy(() =>
  import("./components/layouts/Registration.Layout")
);
const SearchResultPage = lazy(() =>
  import("./components/page/SearchResult.Page")
);
const UserProfileLayout = lazy(() =>
  import("./components/layouts/UserProfile.Layout")
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
          {
            path: "view/:jobSlug",
            element: (
              <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
                <JobDetailsPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
            <UserProfileLayout />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
      {
        path: "/error",
        element: (
          <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
            <RegisterPage />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: (
  //     <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
  //       <AuthLayout />
  //     </Suspense>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <LoginPage />,
  //     },
  //   ],
  // },
  // {
  //   path: "/register",
  //   element: (
  //     <Suspense fallback={<ProfileSkeletonLoadingUtil />}>
  //       <RegistrationLayout />
  //     </Suspense>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <RegisterPage />,
  //     },
  //   ],
  // },
  {
    path: "/callback",
    element: <AuthProviderCallbackPage />,
  },
]);

export default router;
