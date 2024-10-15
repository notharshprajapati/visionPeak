import React from "react";
import Card from "./Card";

const Photography = () => {
  return (
    <div className="flex flex-col items-start h-full w-full   my-20 ">
      <div className=" flex flex-row w-full  text-white ">Photography</div>
      <div className="flex flex-row items-center gap-8 h-[464px] w-full ">
        <div className="grow h-full bg-white rounded-2xl order-0 ">
          <Card name="img00002" />
        </div>

        <div className="grow h-full bg-white rounded-2xl order-1 ">
          <Card name="img00024" />
        </div>
        <div className="grow h-full bg-white rounded-2xl order-2 ">
          <Card name="img00001" />
        </div>
      </div>
    </div>
  );
};

export default Photography;
