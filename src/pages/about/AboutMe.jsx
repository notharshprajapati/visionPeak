import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full  flex flex-col gap-8  items-center  py-16 justify-center ">
      <div className="w-full flex  flex-col items-center  justify-center bg-white relative">
        <div className="w-full flex  flex-col items-center  gap-2 px-0 py-8 justify-center relative">
          <div className="w-full flex  flex-col items-center opacity-50 gap-2  px-0 py-0.5 justify-center relative">
            <div className="w-full  mt-2 h-0.5 relative bg-black" />
            <div className="w-full  h-0.5 relative bg-black" />
          </div>
          <div className="   text-4xl md:text-6xl text-black relative font-bold text-center ">
            ABOUT ME
          </div>
          <div className="w-full flex  flex-col items-center opacity-50 gap-2  justify-center relative">
            <div className="w-full  mt-2 h-0.5 relative bg-black" />
            <img className="w-full  relative bg-black pb-0.5" />
          </div>
        </div>
        <p className="font-thin w-full md:w-2/3 text-xl text-black/50 relative  text-center ">
          Karan is a passionate home photography specialist, capturing stunning
          exterior and interior shots to showcase properties and events. With a
          keen eye for detail, I deliver high-quality visuals that help clients
          elevate their spaces and tell their unique stories.
        </p>
      </div>
      <div className="border-black flex border-t items-center  px-0 py-4 border-b relative w-full md:w-2/3  gap-4  flex-col lg:flex-row justify-center lg:justify-between ">
        <>
          <div className=" w-fit   text-4xl text-black  font-semibold text-center relative">
            Milestone
          </div>
          <div className="w-full flex  items-center  justify-between relative px-8">
            <div className="inline-flex flex-col items-center  justify-center relative">
              <div className=" w-fit  text-2xl md:text-3xl text-black/75 font-medium text-center  relative">
                320+
              </div>
              <div className=" w-fit text-lg md:text-xl text-black/50 font-normal text-center  relative">
                Project Live
              </div>
            </div>
            <div className="inline-flex flex-col items-center  justify-center relative">
              <div className=" w-fit  text-2xl md:text-3xl text-black/75 font-medium text-center  relative">
                320+
              </div>
              <div className=" w-fit text-lg md:text-xl text-black/50 font-normal text-center  relative">
                Project Live
              </div>
            </div>
            <div className="inline-flex flex-col items-center  justify-center relative">
              <div className=" w-fit  text-2xl md:text-3xl text-black/75 font-medium text-center  relative">
                320+
              </div>
              <div className=" w-fit text-lg md:text-xl text-black/50 font-normal text-center  relative">
                Project Live
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default AboutMe;
