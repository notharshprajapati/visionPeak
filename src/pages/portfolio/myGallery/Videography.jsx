import React from "react";
import Card from "./Card";

const Videography = () => {
  return (
    <div className="flex flex-col items-start h-full w-full  flex-none my-20">
      <div className=" flex flex-row w-full  text-white ">Videography</div>
      <div className="flex flex-row items-center gap-8 h-[464px] w-full ">
        <div class="grow h-full bg-white rounded-2xl order-0 overflow-hidden">
          <Card name="vid1" />
        </div>

        <div class="grow h-full bg-white rounded-2xl order-1 overflow-hidden">
          <Card name="vid2" />
        </div>
        <div class="grow h-full bg-white rounded-2xl order-2 overflow-hidden">
          <Card name="vid3" />
        </div>
      </div>
    </div>
  );
};

export default Videography;
