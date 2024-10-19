import React from "react";
import Videography from "./Videography";
import Photography from "./Photography";

const MyGallery = () => {
  return (
    <div className="w-full h-fit ">
      <div className="mt-20 ">
        <div className=" flex flex-col items-center">
          <div className="w-full bg-white/50 h-0.5 my-2"> </div>
          <div className="w-full bg-white/50 h-0.5 mb-2" />
          <span className=" text-6xl font-bold font-kanit">MY GALLERY</span>
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
