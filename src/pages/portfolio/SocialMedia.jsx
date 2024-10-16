import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-8 px-0 py-16 relative bg-black  w-screen overflow-hidden">
      <div className="flex items-center justify-around gap-8 px-0 py-2 flex-[0_0_auto] relative self-stretch w-full">
        <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
          <div className="flex flex-col items-center justify-center gap-2 flex-[0_0_auto] opacity-50 relative self-stretch w-full">
            <div className="mt-[-2.00px] relative self-stretch w-full h-0.5 bg-white" />
            <div className="relative self-stretch w-full h-0.5 bg-white" />
          </div>
          <div className="relative self-stretch [font-family:'Kanit-Bold',Helvetica] font-bold text-white text-[40px] text-center tracking-[0] leading-[normal]">
            SOCIAL MEDIA
          </div>
          <div className="flex flex-col items-center justify-center gap-2 flex-[0_0_auto] opacity-50 relative self-stretch w-full">
            <div className="mt-[-2.00px] relative self-stretch w-full h-0.5 bg-white" />
            <div className="relative self-stretch w-full h-0.5 bg-white" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col  h-fit w-full">
        <div className="  h-40 md:h-60 lg:h-80 overflow-hidden   relative">
          <div className="flex h-full absolute  -left-[65rem] lg:-left-[110rem] ">
            <Card link={"01"} />
            <Card link={"02"} />
            <Card link={"03"} />
            <Card link={"04"} />
            <Card link={"05"} />
            <Card link={"06"} />
            <Card link={"07"} />
            <Card link={"08"} />
            <Card link={"09"} />
            <Card link={"10"} />
          </div>
        </div>
        <div className=" flex h-40 md:h-60 lg:h-80  overflow-hidden ">
          <Card link={"01"} />
          <Card link={"02"} />
          <Card link={"03"} />
          <Card link={"04"} />
          <Card link={"05"} />
          <Card link={"06"} />
          <Card link={"07"} />
          <Card link={"08"} />
          <Card link={"09"} />
          <Card link={"10"} />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

export const Card = ({ link }) => {
  return (
    <div className=" relative h-full   p-2   aspect-1 ">
      <img
        src={`images/img000${link}.jpeg`}
        alt={`image ${link}`}
        className="h-full w-full object-cover object-center rounded-xl"
      />
    </div>
  );
};
