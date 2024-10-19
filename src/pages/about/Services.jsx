import React, { useState } from "react";

const Services = () => {
  const [activeItem, setActiveItem] = useState("Exterior");
  const handleClick = (item) => {
    setActiveItem(item);
  };

  const lists = ["Exterior", "Interior", "Event", "Concept", "Aerial"];
  return (
    <div className="flex flex-col w-full items-center justify-center gap-2.5 px-0 py-8 relative">
      <div className="flex flex-col h-[958px] px-2 lg:px-16 py-0 self-stretch w-full items-start relative">
        <div className="font-bold font-kanit text-black/40 text-7xl md:text-8xl lg:text-9xl ">
          SERVICES
        </div>
        <div className="flex flex-col justify-center gap-2.5 self-stretch w-full  -mt-4 md:-mt-6 lg:-mt-8 bg-black rounded-[20px] overflow-hidden items-start relative">
          <div className="flex justify-between p-8  self-stretch w-full  items-start relative">
            <div className="inline-flex  flex-col gap-4 items-start relative">
              <div className="relative self-stretch   text-white/90 text-sm tracking-[0] leading-[normal]">
                Our Expertise
              </div>
              <p className="relative w-full font-kanit text-  md:w-[380px]  text-white text-3xl tracking-[0] leading-10">
                When moments captured every dreams crafted into beautiful
                reality
              </p>
            </div>
            <div className="flex  w-20 items-start gap-20 ">
              <div className="flex flex-col gap-[1px]">
                {lists.map((list, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(list)}
                    className={`text-sm cursor-pointer flex justify-end ${
                      activeItem === list
                        ? "font-bold opacity-100"
                        : " opacity-50"
                    }`}
                  >
                    {list}
                  </div>
                ))}
              </div>
              <div
                className="rotate-90 font-extralight -translate-x-6 text-white/80 tracking-[.5rem] h-full"
                style={{ transformOrigin: "top left" }}
              >
                PHOTOGRAPHY
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-col gap-4 lg:gap-0 lg:flex-row items-start justify-between p-8 relative self-stretch w-full">
            <div className="inline-flex flex-col justify-end gap-4 self-stretch  items-start relative">
              <div className="relative w-[380px] font-kanit  text-white text-2xl tracking-[0] leading-[normal]">
                Chasing Clouds at Ontario
              </div>
              <div className="relative self-stretch   text-white/90 text-base tracking-[0] leading-[normal]">
                Ontario, Georgian Bay
              </div>
            </div>
            <div className="w-full inline-flex items-center justify-end gap-4 ">
              <div className=" w-1/2 h-96 bg-white rounded-lg ">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt="Drone house"
                  src="/images/img00002.jpeg"
                />
              </div>
              <div className=" w-96 h-96 bg-white rounded-lg ">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt="Drone house"
                  src="/images/img00003.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
