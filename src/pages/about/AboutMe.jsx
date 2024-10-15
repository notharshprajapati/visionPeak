import React from "react";
import { useWindowWidth } from "../../breakpoints";

const AboutMe = () => {
  const screenWidth = useWindowWidth();
  return (
    <div>
      <div className="w-full  flex self-stretch items-center gap-2.5 flex-[0_0_auto] px-0 py-16 justify-center relative">
        <div className="flex flex-col items-center grow gap-16 flex-1 px-16 py-8 justify-center relative">
          <div className="w-full flex self-stretch flex-col items-center max-w-[1000px] flex-[0_0_auto] justify-center bg-white relative">
            <div className="w-full flex self-stretch flex-col items-center flex-[0_0_auto] gap-2 px-0 py-8 justify-center relative">
              <div className="w-full flex self-stretch flex-col items-center opacity-50 gap-2 flex-[0_0_auto] px-0 py-0.5 justify-center relative">
                <div className="w-full self-stretch mt-[-2.00px] h-0.5 relative bg-black" />
                <div className="w-full self-stretch h-0.5 relative bg-black" />
              </div>
              <div className="[font-family:'Kanit',Helvetica] self-stretch tracking-[0] text-[40px] text-[#000000bf] relative font-bold text-center leading-[normal]">
                ABOUT ME
              </div>
              <div className="w-full flex self-stretch flex-col items-center opacity-50 gap-2 flex-[0_0_auto] justify-center relative">
                <div className="w-full self-stretch mt-[-2.00px] h-0.5 relative bg-black" />
                <img className="w-full self-stretch relative bg-black pb-0.5" />
              </div>
            </div>
            <p className="[font-family:'Nunito',Helvetica] self-stretch tracking-[0] text-2xl text-[#000000bf] relative font-normal text-center leading-[normal]">
              Karan is a passionate home photography specialist, capturing
              stunning exterior and interior shots to showcase properties and
              events. With a keen eye for detail, I deliver high-quality visuals
              that help clients elevate their spaces and tell their unique
              stories.
            </p>
          </div>
          <div
            className={`border-black flex border-t items-center max-w-[1000px] flex-[0_0_auto] px-0 py-4 border-b relative w-full [border-top-style:solid] [border-bottom-style:solid] self-stretch ${
              (screenWidth >= 768 && screenWidth < 1024) || screenWidth < 768
                ? "flex-col"
                : ""
            } ${
              (screenWidth >= 768 && screenWidth < 1024) || screenWidth < 768
                ? "gap-8"
                : ""
            } ${
              (screenWidth >= 768 && screenWidth < 1024) || screenWidth < 768
                ? "justify-center"
                : screenWidth >= 1024
                ? "justify-between"
                : ""
            }`}
          >
            {((screenWidth >= 768 && screenWidth < 1024) ||
              screenWidth < 768) && (
              <>
                <div className="[font-family:'Kanit',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[32px] text-[#000000bf] font-normal text-center leading-[normal] relative">
                  Milestone
                </div>
                <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
                  <div className="inline-flex flex-col items-center flex-[0_0_auto] justify-center relative">
                    <div className="[font-family:'Kanit',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[40px] text-[#000000bf] font-medium text-center leading-[normal] relative">
                      320+
                    </div>
                    <div className="[font-family:'Nunito',Helvetica] w-fit tracking-[0] text-2xl text-[#000000bf] font-normal text-center leading-[normal] relative">
                      Project Live
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-center flex-[0_0_auto] justify-center relative">
                    <div className="[font-family:'Kanit',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[40px] text-[#000000bf] font-medium text-center leading-[normal] relative">
                      320+
                    </div>
                    <div className="[font-family:'Nunito',Helvetica] w-fit tracking-[0] text-2xl text-[#000000bf] font-normal text-center leading-[normal] relative">
                      Project Live
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-center flex-[0_0_auto] justify-center relative">
                    <div className="[font-family:'Kanit',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[40px] text-[#000000bf] font-medium text-center leading-[normal] relative">
                      320+
                    </div>
                    <div className="[font-family:'Nunito',Helvetica] w-fit tracking-[0] text-2xl text-[#000000bf] font-normal text-center leading-[normal] relative">
                      Project Live
                    </div>
                  </div>
                </div>
              </>
            )}

            {screenWidth >= 1024 && (
              <>
                <div className="relative w-fit [font-family:'Kanit',Helvetica] font-normal text-[#000000bf] text-[32px] text-center tracking-[0] leading-[normal]">
                  Milestone
                </div>
                <div className="items-center justify-center inline-flex flex-col relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] [font-family:'Kanit',Helvetica] font-medium text-[#000000bf] text-[40px] text-center relative w-fit tracking-[0] leading-[normal]">
                    320+
                  </div>
                  <div className="relative w-fit [font-family:'Nunito',Helvetica] font-normal text-[#000000bf] text-2xl text-center tracking-[0] leading-[normal]">
                    Project Live
                  </div>
                </div>
                <div className="items-center justify-center inline-flex flex-col relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] [font-family:'Kanit',Helvetica] font-medium text-[#000000bf] text-[40px] text-center relative w-fit tracking-[0] leading-[normal]">
                    320+
                  </div>
                  <div className="relative w-fit [font-family:'Nunito',Helvetica] font-normal text-[#000000bf] text-2xl text-center tracking-[0] leading-[normal]">
                    Project Live
                  </div>
                </div>
                <div className="items-center justify-center inline-flex flex-col relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] [font-family:'Kanit',Helvetica] font-medium text-[#000000bf] text-[40px] text-center relative w-fit tracking-[0] leading-[normal]">
                    320+
                  </div>
                  <div className="relative w-fit [font-family:'Nunito',Helvetica] font-normal text-[#000000bf] text-2xl text-center tracking-[0] leading-[normal]">
                    Project Live
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
