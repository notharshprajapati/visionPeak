import React from "react";
import Card from "./Card";

const Photography = () => {
  return (
    <div className="flex flex-col items-start h-full w-full   my-20 ">
      <div className=" flex flex-row w-full  text-white ">Photography</div>
      <div className="flex flex-row items-center gap-8 h-[464px] w-full ">
        <div class="grow h-full bg-white rounded-2xl order-0 ">
          <Card name="pic1" />
        </div>

        <div class="grow h-full bg-white rounded-2xl order-1 ">
          <Card name="pic2" />
        </div>
        <div class="grow h-full bg-white rounded-2xl order-2 ">
          <Card name="pic3" />
        </div>
      </div>
    </div>
  );
};

export default Photography;
