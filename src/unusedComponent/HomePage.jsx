import { Outlet, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import GuestHeader from "../views/HeaderAndFooter/GuestHeader";
import MemberHeader from "../views/HeaderAndFooter/MemberHeader";

export default function HomePage() {
  const { token } = useStateContext();

  return (
    <div className="flex flex-col min-h-screen">
      {token ? <MemberHeader /> : <GuestHeader />}

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
