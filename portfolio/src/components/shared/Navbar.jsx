import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [show, setShow] = useState(true);
  
  let lastScrollY = 0;

  const handleScroll = () => {
    setShow(window.scrollY <= lastScrollY);
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`hidden md:block bg-violet-300 text-black relative top-0 left-0 w-full transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } shadow-md`}
      >
        <div className="flex justify-around items-center">
          <div className="flex justify-evenly items-center py-2 gap-4">
            <div className="flex items-center py-1">
              <MdOutlineMail />
              <span className="ml-1 mb text-[14px] hover:text-[#1a83c6] font-[Merriweather]">
                website@gmail.com
              </span>
            </div>
            <div className="flex items-center py-1">
              <GrLocation />
              <span className="ml-1 mb-[2px] font-[Merriweather]">
                DD. Puram, Bareilly
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-4">
            <button>
              <TiSocialFacebook size={22} />
            </button>
            <button>
              <TiSocialLinkedin size={22} />
            </button>
            <button>
              <TiSocialTwitter size={22} />
            </button>
          </div>
        </div>
      </div>
      <nav className="px-auto dark:bg-[#1f2327] shadow-md dark:border-b bg-white dark:border-gray-700 dark:text-[rgb(224,228,232)] sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/">
                <h1 className="md:text-2xl font-bold font-doctor">
                  Dr. Vishal Agarwal
                </h1>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center">
                <div className="ml-10 flex items-baseline space-x-4">
                  
                <Link to={"/"}>
                  <button className="hover:bg-blue-800 hover:text-white px-3 py-2 transition-all duration-300 rounded-md text-sm font-medium">
                    Home
                  </button>
                </Link>
                <Link to={"/about"}>
                  <button className="hover:bg-blue-800 hover:text-white px-3 py-2 transition-all duration-300 rounded-md text-sm font-medium">
                    About Us
                  </button>
                </Link>
                <Link to={"/patientfeedback"}>
                  <button className="hover:bg-blue-800 hover:text-white px-3 py-2 transition-all duration-300 rounded-md text-sm font-medium">
                    Testimonials
                  </button>
                </Link>
                <Link to={"/news"}>
                  <button className="hover:bg-blue-800 hover:text-white px-3 py-2 transition-all duration-300 rounded-md text-sm font-medium">
                    News & Update
                  </button>
                </Link>
                <Link to={"/contact"}>
                  <button className="hover:bg-blue-800 hover:text-white px-3 py-2 transition-all duration-300 rounded-md text-sm font-medium">
                    Contact
                  </button>
                </Link>
               
    
                </div>
                <button
                  onClick={toggleTheme}
                  className="text-xl font-bold bg-zinc-200 p-2 rounded-full cursor-pointer dark:text-white dark:bg-gray-900 dark:hover:text-white hover:dark:bg-[#1a83c6] text-black"
                >
                  {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleTheme}
                className="text-xl mr-2 mb-1 font-bold bg-zinc-200 dark:bg-gray-900 dark:hover:text-white hover:dark:bg-[#1a83c6] p-2 rounded-full cursor-pointer"
              >
                {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
              </button>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1a83c6] focus:outline-none"
              >
                <CgMenuRight size={25} />
              </button>
            </div>
          </div>
        </div>

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
               {/* tab button */}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
