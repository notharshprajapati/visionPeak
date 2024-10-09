import React from "react";
import Videography from "./Videography";
import Photography from "./Photography";

const MyGallery = () => {
  return (
    <div className="w-full">
      <div className="px-40">
        <div className=" flex flex-col items-center">
          <div className="w-full bg-white/50 h-0.5 my-2"> </div>
          <div className="w-full bg-white/50 h-0.5 mb-2" />
          <span className=" text-4xl font-bold ">MY GALLERY</span>
          <div className="w-full bg-white/50 h-0.5 my-2"> </div>
          <div className="w-full bg-white/50 h-0.5"> </div>
        </div>
        <Videography />
        <Photography />
      </div>
    </div>
  );
};

export default MyGallery;
