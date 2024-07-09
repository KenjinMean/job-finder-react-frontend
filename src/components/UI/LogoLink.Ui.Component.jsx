import React from "react";
import { Link } from "react-router-dom";

import appLogo from "../../assets/logo/JobFinderLogo.webp";
import { jobRoutes } from "../../constants/RoutesPath.Constants";

export default function LogoLinkUiComponent() {
  return (
    <Link
      to={jobRoutes.jobListingPage}
      className="block focus:ring-4 focus:outline-none focus:ring-accent-blue500 "
    >
      <div className="flex justify-center">
        <img src={appLogo} alt="Job Finder Logo" />
      </div>
    </Link>
  );
}
