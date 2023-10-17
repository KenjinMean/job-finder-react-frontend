import { useEffect, useRef } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios-client";
import ImageUrl from "../views/helper/ImageUrl";

export default function MemberLayout() {
  const { token, user, setToken, setUser, refreshTimeoutRef } =
    useStateContext();

  if (!token) {
    return <Navigate to="/jobs-guest" />;
  }

  const isRefreshing = useRef(false);

  const refreshToken = () => {
    console.log("silent-token-refresh");
    if (!isRefreshing.current) {
      isRefreshing.current = true;
      axiosClient
        .post("refresh-token")
        .then(({ data }) => {
          refreshTimeoutRef.current = setTimeout(() => {
            refreshToken();
          }, (data.expires_in - 5) * 1000);

          setToken(data);
        })
        .catch((error) => {
          console.log("Token Refresh Failed");
        })
        .finally(() => {
          isRefreshing.current = false;
        });
    }
  };

  const handleLogout = () => {
    clearTimeout(refreshTimeoutRef.current);
    axiosClient
      .post("/logout")
      .then(() => {
        setUser("");
        setToken("");
      })
      .catch((error) => {
        console.error("logout failed", error.message);
      });
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="p-5 bg-indigo-700 shadow-sm">
        <ul className="flex gap-2">
          <li>Job Finder</li>
          <li className="ml-auto">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              {user && <ImageUrl imageUrl={user.user_info.profile_image} />}
            </div>
          </li>
          <li>
            <Link to="/jobs" className="text-indigo-500 hover:text-indigo-300">
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/companies"
              className="text-indigo-500 hover:text-indigo-300"
            >
              Companies
            </Link>
          </li>
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        </ul>
      </header>
      <section className="flex-grow px-5 bg-indigo-50 md:px-28 lg:px-32">
        <Outlet />
      </section>
    </div>
  );
}
