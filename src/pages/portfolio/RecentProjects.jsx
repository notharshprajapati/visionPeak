import React from "react";

const RecentProjects = () => {
  return (
    <div className="w-full h-[36rem] my-20   ">
      <div className="h-full rounded-xl p-4  bg-[url('/images/image00025.jpeg')] bg-cover bg-center flex flex-col justify-between">
        <div className="w-full">
          <span className=" text-4xl font-bold font-kanit uppercase ">
            Recent Projects
          </span>
          <div className="w-full bg-white/50 h-0.5 my-2" />
          <div className="w-full bg-white/50 h-0.5" />
        </div>
        <div className="flex flex-col  gap-4 lg:gap-0 lg:flex-row justify-between items-center ">
          <p className="h-auto w-full lg:w-80  text-center lg:text-left backdrop-blur-sm bg-none border border-white/10 rounded-xl p-2">
            Capturing the layout and landscape integration, our aerial
            photography highlights each homes unique architectural features
          </p>
          <div className="h-auto flex flex-row gap-2  justify-center md:justify-normal overflow-auto w-full lg:w-[32rem] ">
            <div>
              <Card src="20" />
            </div>
            <div className="hidden md:block">
              <Card src="21" />
            </div>
            <div className="hidden md:block">
              <Card src="22" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;

const Card = ({ src }) => {
  return (
    <div className=" flex flex-row justify-center items-center px-4 gap-4 w-fit h-32  backdrop-blur-sm bg-white/10 border border-white/50 rounded-xl ">
      <img
        src={`/images/img000${src}.jpeg`}
        className="w-24 h-24 rounded-2xl"
        alt="Image"
      />
      <div className="flex flex-col justify-center items-start gap-5 w-64 text-white">
        <span className="font-bold text-base capitalize">
          Lorem ipsum dolor
        </span>
        <span className="font-light text-xs text-justify">
          sit amet conse ctet ur adi pisi cing edi ous m apare eoden.
        </span>
      </div>
    </div>
  );
};
