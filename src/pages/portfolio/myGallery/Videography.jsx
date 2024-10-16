import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Videography = () => {
  return (
    <div className="flex flex-col items-start h-full w-full  flex-none my-10 ">
      <div className=" flex flex-row justify-between w-full text-white my-2 ">
        <div className="font-bold">Videography</div>
        <div className="flex items-center gap-2 border-b-[.1rem] ">
          <div>See All</div>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-2 ">
        <div className="w-full h-auto   ">
          <img
            src="/images/img00021.jpeg"
            alt="img00021"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="w-full h-fit grid grid-row-2 gap-2 ">
          <div className="w-full h-60 md:h-80  ">
            <img
              src="/images/img00022.jpeg"
              alt="img00022"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="w-full h-40 md:h-60   ">
            <img
              src="/images/img00023.jpeg"
              alt="img00023"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videography;
