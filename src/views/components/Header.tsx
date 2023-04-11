import React from "react";
import Logo from "../../images/k0003_1.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="bg-rose-900 px-2 sm:px-4 py-5 dark:bg-gray-900  w-full z-20 top-0 left-0 ">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            FlySeacher
          </span>
        </Link>
      </nav>
    </>
  );
}
