import React from "react";
import {
  FaHome,
  FaUser,
  FaBook,
  FaBriefcase,
  FaEnvelope,
  FaMoon,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header
        className="fixed top-0 left-0 w-full bg-body-color z-fixed transition duration-400"
        id="header"
      >
        <nav className="h-header-height flex justify-between items-center container mx-4">
          <a
            href="#"
            className="text-first-color font-medium transition duration-400"
          >
            Ansel
          </a>

          <div className="fixed bottom-4 bg-hsla-second-hue-32-16-0.8 w-9/10 rounded-full p-4 backdrop-blur-lg transition duration-400">
            <ul className="flex justify-around items-center">
              <li>
                <a
                  href="#home"
                  className="text-text-color text-xl p-2 flex rounded-full bg-gradient-to-b from-first-hue to-first-hue-0.2 shadow-lg text-title-color"
                >
                  <FaHome />
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-text-color text-xl p-2 flex rounded-full"
                >
                  <FaUser />
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-text-color text-xl p-2 flex rounded-full"
                >
                  <FaBook />
                </a>
              </li>

              <li>
                <a
                  href="#work"
                  className="text-text-color text-xl p-2 flex rounded-full"
                >
                  <FaBriefcase />
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-text-color text-xl p-2 flex rounded-full"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>

          <FaMoon
            className="text-xl cursor-pointer transition duration-300 hover:text-first-color"
            id="theme-button"
          />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
