import React from "react";

const Hero = () => {
  return (
    <div className="  w-full h-fit text-white  ">
      <div className="h-screen w-screen">
        <div className="w-full h-full">
          <video autoPlay muted loop className="w-full h-full object-cover ">
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center">
        <div className="h-screen w-screen py-10 relative flex flex-col ">
          <div className="relative z-10 flex flex-col items-center ">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center font-head">
              Vision Peak
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2  w-full  z- font-bold">
        <div className="flex flex-col  items-center  ">
          <div className="relative">
            <span className="text-6xl md:text-8xl xl:text-9xl  py-2 text-white/75 ">
              CAPTURING
            </span>
          </div>
          <div className="  bold text-sm md:text-base xl:text-2xl  text-white/75 ">
            THE MOMENTS THAT CAPTIVATE YOUR HEART
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
