import React, { useState } from "react";
import appLogo from "../../assets/logo/JobFinderLogo.png";
import burgerIcon from "../../assets/icons/burger-menu.png";
import closeIcon from "../../assets/icons/close-menu.png";

export default function HeaderNavView() {
  const links = [{ name: "login", link: "/login" }];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="items-center py-4 bg-white md:flex md:px-10 px-7 md:justify-between">
        <div className="w-36">
          <a href="">
            <img src={appLogo} alt="" />
          </a>
        </div>
        <div>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="absolute text-3xl right-8 top-6 md:hidden"
          >
            <img
              src={isMenuOpen ? closeIcon : burgerIcon}
              alt=""
              className="w-10 h-10"
            />
          </button>
        </div>
        <ul
          className={`absolute pb-8 md:flex md:items-center md:pb-0 md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out md:static bg-white md:z-auto left-0 w-full z-[-1] ${
            isMenuOpen ? "top-20" : "top-[-390px] md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
