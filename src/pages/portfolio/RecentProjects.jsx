import React from "react";

const RecentProjects = () => {
  return (
    <div className="w-full h-[36rem] my-20   ">
      <div className="h-full rounded-[20px]   bg-[url('/images/image00025.jpeg')] bg-cover bg-center  p-8 flex flex-col justify-between">
        <div>
          <span className=" text-4xl font-bold ">Recent Projects</span>
          <div className="w-full bg-white/50 h-0.5 my-2"> </div>
          <div className="w-full bg-white/50 h-0.5"> </div>
        </div>
        <div className="flex flex-row justify-between items-center ">
          <p className="  h-auto w-80">
            Capturing the layout and landscape integration, our aerial
            photography highlights each homes unique architectural features
          </p>
          <div className="h-auto flex flex-row overflow-auto w-[32rem] shadow-inner drop-shadow-lg">
            <Card src="20" />
            <Card src="20" />
            <Card src="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;

const Card = (src) => {
  return (
    <div className="flex flex-row justify-center items-center px-4 gap-4 w-fit h-32  backdrop-blur-md bg-white/30 border border-white/50 rounded-2xl mr-8">
      <img
        src={`/images/img00020.jpeg`}
        className="w-24 h-24 rounded-2xl"
        alt="Image"
      />
      <div className="flex flex-col justify-center items-start gap-5 w-64 text-white">
        <span className="font-bold text-base">Lorem ipsum dolor</span>
        <span className="font-light text-xs text-justify">
          sit amet conse ctet ur adi pisi cing edi ous m apare eoden.
        </span>
      </div>
    </div>
  );
};
