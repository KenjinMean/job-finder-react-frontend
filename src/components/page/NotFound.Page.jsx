import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { PageTitleUtil } from "../utils/PageTitle.Util";

export default function NotFoundPage() {
  return (
    <Fragment>
      <PageTitleUtil title="Not Found" />
      <div className="not-found">
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
      </div>
    </Fragment>
  );
}
