import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-2.5 px-0 py-8 relative">
      <div className="flex flex-col h-[958px] px-16 py-0 self-stretch w-full items-start relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Kanit-Bold',Helvetica] font-bold text-[#00000040] text-9xl tracking-[0] leading-[normal]">
          SERVICES
        </div>
        <div className="flex flex-col justify-center gap-2.5 self-stretch w-full flex-[0_0_auto] -mt-12 bg-black rounded-[20px] overflow-hidden items-start relative">
          <div className="flex justify-between p-8 self-stretch w-full flex-[0_0_auto] items-start relative">
            <div className="inline-flex flex-col gap-4 flex-[0_0_auto] items-start relative">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#ffffffbf] text-base tracking-[0] leading-[normal]">
                Our Expertise
              </div>
              <p className="relative w-[380px] [font-family:'Kanit-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-10">
                When moments captured every dreams crafted into beautiful
                reality
              </p>
            </div>
            <div className="inline-flex gap-[51px] flex-[0_0_auto] items-start relative">
              <div className="inline-flex flex-col gap-4 flex-[0_0_auto] items-start relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Nunito-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
                  Exterior
                </div>
                <div className="relative self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-[#ffffff80] text-2xl tracking-[0] leading-[normal]">
                  Interior
                </div>
                <div className="relative self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-[#ffffff80] text-2xl tracking-[0] leading-[normal]">
                  Event
                </div>
                <div className="relative self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-[#ffffff80] text-2xl tracking-[0] leading-[normal]">
                  Concept
                </div>
                <div className="relative self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-[#ffffff80] text-2xl tracking-[0] leading-[normal]">
                  Aerial
                </div>
              </div>
              <div className="relative w-fit mr-[-110.50px] rotate-90 [font-family:'Nunito-ExtraLight',Helvetica] font-extralight text-[#ffffff80] text-base tracking-[10.24px] leading-4 whitespace-nowrap">
                PHOTOGRAPHY
              </div>
            </div>
          </div>
          <div className="flex h-[528px] items-start justify-between p-8 relative self-stretch w-full">
            <div className="inline-flex flex-col justify-end gap-4 self-stretch flex-[0_0_auto] items-start relative">
              <div className="relative w-[380px] [font-family:'Kanit-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                Chasing Clouds at Ontario
              </div>
              <div className="relative self-stretch [font-family:'Nunito-Regular',Helvetica] font-normal text-[#ffffffbf] text-base tracking-[0] leading-[normal]">
                Ontario, Georgian Bay
              </div>
            </div>
            <div className="inline-flex items-center justify-end gap-8 relative flex-[0_0_auto]">
              <div className="relative w-[600px] h-[464px] bg-white rounded-[29px] overflow-hidden">
                <img
                  className="absolute w-[600px] h-[464px] top-0 left-0 object-cover"
                  alt="Drone house"
                  src="/images/img00002.jpeg"
                />
              </div>
              <div className="relative w-[600px] h-[464px] bg-white rounded-[20px] overflow-hidden">
                <img
                  className="absolute w-[600px] h-[464px] top-0 left-0 object-cover"
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
