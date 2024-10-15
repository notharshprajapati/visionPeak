import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPerson, MdWork } from "react-icons/md";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 py-2 px-4 md:px-8 bg-white/50 backdrop-blur-md rounded-full text-sm md:text-base z-20">
        <div className="flex flex-row justify-center items-center  gap-8 text-black font-nunito">
          <div
            className={`flex ease-in-out duration-300 transition-all cursor-pointer ${
              activeItem === "Home"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("Home")}
          >
            <div className="block md:hidden text-3xl">
              <FaHome />
            </div>
            <div className="hidden md:block">Home</div>
          </div>
          <div
            className={`flex ease-in-out duration-300 transition-all cursor-pointer ${
              activeItem === "Works"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("Works")}
          >
            <div className="block md:hidden text-3xl">
              <MdWork />
            </div>
            <div className="hidden md:block">Works</div>
          </div>
          <div
            className={`flex ease-in-out duration-300 transition-all cursor-pointer ${
              activeItem === "About"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("About")}
          >
            <div className="block md:hidden text-3xl">
              <MdPerson />
            </div>
            <div className="hidden md:block">About</div>
          </div>
          <div
            className={`flex ease-in-out duration-300 transition-all cursor-pointer ${
              activeItem === "Contact Us"
                ? "font-extrabold opacity-100"
                : "font-normal opacity-50"
            }`}
            onClick={() => handleClick("Contact Us")}
          >
            <div className="block md:hidden text-3xl">
              <IoIosMail />
            </div>
            <div className="hidden md:block">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
