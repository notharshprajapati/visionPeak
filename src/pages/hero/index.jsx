import React from "react";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className="  w-full h-screen text-white ">
      <div className="h-screen w-full">
        <div className="w-full h-full">
          <video autoPlay muted loop className="w-full h-full object-cover ">
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen z-20 flex items-center justify-center">
        <div className="h-screen w-screen py-10 relative flex flex-col ">
          <div className="relative z-10 flex flex-col items-center ">
            <Fade bottom delay={0}>
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center font-head">
                Vision Peak
              </span>
            </Fade>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2  w-full  z- font-bold">
        <div className="flex flex-col  items-center  ">
          <div class="relative">
            <span class="text-8xl py-2 text-white/75 bg-transparent backdrop-blur-sm">
              CAPTURING
            </span>
          </div>
          <div className="  bold text-2xl  text-white/75 ">
            THE MOMENTS THAT CAPTIVATE YOUR HEART
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
