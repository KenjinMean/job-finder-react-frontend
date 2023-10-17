import { Outlet, Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import MemberHeaderLayout from "./MemberHeader.Layout";
import GuestHeaderLayout from "./GuestHeader.Layout";

export default function AppLayout() {
  const { token } = useStateContext();

  return (
    <div className="flex flex-col min-h-screen">
      {token ? <MemberHeaderLayout /> : <GuestHeaderLayout />}

      <main className="flex-grow px-5 md:px-28 lg:px-32">
        <Outlet />
      </main>

      <footer className="p-5 bg-gray-500">
        <ul className="flex gap-2">
          <li>
            <a href="#" className="text-2xl font-bold font-primary">
              Job Finder
            </a>
          </li>
          <li className="ml-auto">
            <Link
              to="/login"
              className="text-xl font-bold text-white hover:text-indigo-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
