import { Outlet } from "react-router-dom";
import HeaderView from "../views/Header.View";
import { UNSAFE_useScrollRestoration } from "react-router-dom";
import OverlaysUtil from "../utils/Overlays.Util";

export default function AppLayout() {
  UNSAFE_useScrollRestoration((prevLocation, location) => {
    if (prevLocation && location.action === "PUSH") {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderView />

      <main className="min-h-screen p-5 lg:px-10">
        <Outlet />
      </main>

      <footer className="p-5 bg-white">Footer</footer>
    </div>
  );
}
