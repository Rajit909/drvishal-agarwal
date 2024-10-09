import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // to initial load, set the theme to the saved theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // save the theme to local storage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-[#1f2327] shadow-md dark:border-b dark:border-gray-700 dark:text-[rgb(224,228,232)] ">
      <div className="hidden md:block bg-violet-300 text-black">
        <div className="flex justify-around items-center ">
          <div className="flex justify-evenly items-center py-2 gap-4">
            <div className="flex items-center py-1">
              <MdOutlineMail />{" "}
              <span className="ml-1 mb- text-[14px] font-[Merriweather ] [2px]">
                website@gmial.com
              </span>
            </div>
            <div className="flex items-center py-1">
              <GrLocation />{" "}
              <span className="ml-1 mb-[2px] font-[Merriweather]">
                DD. Puram, Bareilly
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-4">
            <button>
              <TiSocialFacebook  size={22}/>
            </button>
            <button>
              <TiSocialLinkedin  size={22}/>
            </button>
            <button>
            
            <TiSocialTwitter size={22} />
            </button>
          </div>
        </div>
      </div>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Dr.</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center ">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#blog"
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className=" text-xl font-bold bg-zinc-200  p-2 rounded-full cursor-pointer dark:text-white dark:bg-gray-900 dark:hover:text-white hover:dark:bg-gray-700 text-black"
              >
                {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </button>
            </div>
          </div>
          {/* desktop nav ends here */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleTheme}
              className="text-xl mr-2 mb-1 font-bold bg-zinc-200 dark:bg-gray-900 dark:hover:text-white hover:dark:bg-gray-700 p-2 rounded-full  cursor-pointer "
            >
              {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <CgMenuRight size={25} />
            </button>
          </div>
          {/* mobile nav end here */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex justify-end bg-gray-800 bg-opacity-75`}
        >
          <div className="w-64 bg-violet-300 dark:bg-gray-900 text-white transform transition-transform ease-in-out duration-300 translate-x-0">
            <div className="p-4">
              <button
                onClick={toggleMenu}
                type="button"
                className="block text-gray-400 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
