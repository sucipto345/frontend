import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoCompany from "../assets/images/logo-company.png";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-transparent shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Left Section: Logo and Name */}
          <div className="flex items-center space-x-8 flex-1">
            <Link to="/" className="flex items-center">
              <img
                src={logoCompany}
                alt="Company Logo"
                className="h-10 w-auto pl-2 pt-2 sm:h-12"
              />
            </Link>
            <div className="flex-col flex">
              <p className="text-sm font-bold text-white sm:text-xl">InStay</p>
              <p className="text-sm font-bold text-white sm:text-xl">
                Creative
              </p>
            </div>
          </div>

          {/* Right Section: Navigation for Desktop */}
          <div className="hidden sm:flex space-x-6 m-6 relative items-center">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                className="text-white px-4 py-2 hover:bg-slate-700 rounded bg-transparent"
              >
                TALENT
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="absolute top-full left-0 mt-2 w-48 bg-slate-800 text-white rounded shadow-lg z-10"
                >
                  <Link
                    to="/talent/designers"
                    className="block px-4 py-2 hover:bg-slate-700 rounded-t"
                    onClick={closeDropdown}
                  >
                    {/* Designers */}
                    Comming Soon
                  </Link>
                  <Link
                    to="/talent/developers"
                    className="block px-4 py-2 hover:bg-slate-700"
                    onClick={closeDropdown}
                  >
                    {/* Developers */}
                    Comming Soon
                  </Link>
                  <Link
                    to="/talent/managers"
                    className="block px-4 py-2 hover:bg-slate-700 rounded-b"
                    onClick={closeDropdown}
                  >
                    {/* Managers */}
                    Comming Soon
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="#"
              className="text-white px-4 py-2 hover:bg-slate-700 rounded transition-colors"
            >
              UNDANGAN
            </Link>

            <button
              onClick={() => scrollToSection("testimoni")}
              className="text-white px-4 py-2 hover:bg-slate-700 rounded bg-transparent"
            >
              TESTIMONI
            </button>

            <Link
              to="#"
              className="text-white px-4 py-2 hover:bg-slate-700 rounded transition-colors"
            >
              E-BOOK
            </Link>
            <Link
              to="/portal"
              className="text-white px-4 py-2 hover:bg-slate-700 rounded transition-colors"
            >
              ORDER
            </Link>
          </div>
          <div className="relative pr-5 text-sm sm:hidden">
            <Link
              to="/portal"
              className="text-white px-4 py-2 bg-purple-700 rounded transition-colors"
            >
              ORDER
            </Link>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            className="sm:hidden p-2 text-white z-50"
            onClick={toggleNavbar}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Sidebar Navbar for Mobile */}
          <div
            className={`fixed top-0 right-0 h-full bg-slate-800 text-white transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ width: "250px" }}
          >
            <nav className="flex flex-col items-start p-4 space-y-4">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                  className="text-white px-4 py-2 hover:bg-slate-700 rounded bg-transparent"
                >
                  TALENT
                </button>
                {isDropdownOpen && (
                  <div
                    id="dropdown"
                    className="absolute top-full left-0 mt-2 w-48 bg-slate-800 text-white rounded shadow-lg z-10"
                  >
                    <Link
                      to="/talent/designers"
                      className="block px-4 py-2 hover:bg-slate-700 rounded-t"
                      onClick={closeDropdown}
                    >
                      Designers
                    </Link>
                    <Link
                      to="/talent/developers"
                      className="block px-4 py-2 hover:bg-slate-700"
                      onClick={closeDropdown}
                    >
                      Developers
                    </Link>
                    <Link
                      to="/talent/managers"
                      className="block px-4 py-2 hover:bg-slate-700 rounded-b"
                      onClick={closeDropdown}
                    >
                      Managers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/undangan"
                className="text-white px-4 py-2 hover:bg-slate-700 rounded transition-colors"
              >
                UNDANGAN
              </Link>

              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-white px-4 py-2 hover:bg-slate-700 rounded bg-transparent"
              >
                TESTIMONI
              </button>

              <Link
                to="/ebook"
                className="text-white px-4 py-2 hover:bg-slate-700 rounded transition-colors"
              >
                E-BOOK
              </Link>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
