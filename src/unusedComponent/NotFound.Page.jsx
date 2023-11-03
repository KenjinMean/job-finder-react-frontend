import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { PageTitleUtil } from "../components/utils/PageTitle.Util";
import MaxWidthWrapperUtil from "../components/utils/MaxWidthWrapper.Util";

export default function NotFoundPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Not Found" />
      <MaxWidthWrapperUtil className="p-5 border rounded-md">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for does not exist.</p>
        <p>Here are some things you can do:</p>
        <ul>
          <li>
            <strong>Go back:</strong> You can return to the{" "}
            <Link to="/">home page</Link>.
          </li>
          <li>
            <strong>Check the URL:</strong> Make sure there are no typos in the
            address bar.
          </li>
          <li>
            <strong>Contact Support:</strong> If you believe this is an issue,
            you can <Link to="/contact">contact our support team</Link>.
          </li>
        </ul>
      </MaxWidthWrapperUtil>
    </Fragment>
  );
}
