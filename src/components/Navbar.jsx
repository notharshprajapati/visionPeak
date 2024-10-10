import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2  py-2 px-8  bg-white/50  backdrop-blur-md rounded-full text-base z-20 ">
        <div className="flex flex-row justify-center items-center gap-8 text-black font-nunito">
          <div
            className={`flex  ease-in-out duration-300  transition-all cursor-pointer  ${
              activeItem === "Home"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("Home")}
          >
            Home
          </div>
          <div
            className={`flex ease-in-out duration-300  transition-all cursor-pointer ${
              activeItem === "About"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("About")}
          >
            About
          </div>
          <div
            className={`flex ease-in-out duration-300  transition-all cursor-pointer ${
              activeItem === "Works"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("Works")}
          >
            Works
          </div>
          <div
            className={`flex ease-in-out duration-300  transition-all cursor-pointer ${
              activeItem === "Contact Us"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("Contact Us")}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="fixed bottom-0  w-screen h-28  bg-gradient-to-t from-black"></div>
    </div>
  );
};

export default Navbar;
