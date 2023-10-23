import { Outlet } from "react-router-dom";
import HeaderView from "../views/Header.View";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackView from "../views/ErrorFallback.View";
import { QueryBoundaries } from "../utils/QueryBoundaries.Util";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderView />

      <main className="min-h-screen p-5 lg:px-10">
        {/* <QueryBoundaries> */}
        <Outlet />
        {/* </QueryBoundaries> */}
        {/* <ErrorBoundary FallbackComponent={ErrorFallbackView}>
          <Outlet />
        </ErrorBoundary> */}
      </main>

      <footer className="p-5 bg-gray-500">Footer</footer>
    </div>
  );
}
