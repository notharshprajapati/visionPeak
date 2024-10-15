import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-[url('/image/footer.jpg')] bg-center bg-cover">
      <div className="flex flex-col items-center p-16 gap-10 w-full ">
        <div className="flex justify-between items-center px-4 w-full ">
          <div className=" font-black text-6xl tracking-widest uppercase text-white/50 ">
            kcheema027@gmail.com
          </div>
          <div className="flex flex-row justify-center items-center px-8  bg-white/25 backdrop-blur-md rounded-full">
            <div className="px-5 py-2 font-black text-6xl text-black hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-200">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 w-full h-fit">
          <div className="w-full border-[.1rem] border-white/50"></div>
          <div className="flex flex-row justify-between items-center px-2 w-full    ">
            <div className="flex flex-col justify-center items-start p-0 gap-4 w-fit ">
              <div className="w-full h-fit  font-normal text-2xl  text-white/90">
                Contact Us
              </div>
              <div className="w-full h-fit font-kanit font-bold text-4xl  text-white">
                Let&#39;s Discuss your Vision
              </div>
              <div className="w-64 h-fit  font-normal text-base  text-white/80">
                You deserve the best. Work with us and see the difference.
              </div>
            </div>
            <div className="flex flex-row justify-center items-center p-5 gap-4 w-fit bg-white/10 backdrop-blur-md rounded-lg ">
              <div className="flex flex-col items-start gap-4 ">
                <input
                  type="text"
                  placeholder="Example name"
                  className="box-border  p-2  w-72  bg-white/10 border-[0.1px] border-white/25  rounded-lg text-xs  placeholder:text-white/50 shadow-sm "
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Example@gmail.com"
                  className="box-border   p-2  w-72  bg-white/10 border-[0.1px] border-white/10  rounded-lg text-xs   placeholder:text-white/50 shadow-sm"
                />
                <input
                  type="tel"
                  placeholder="416-XXXXXXXXX"
                  className="box-border   p-2  w-72  bg-white/10 border-[0.1px] border-white/10  rounded-lg text-xs  placeholder:text-white/50 shadow-sm"
                />
              </div>
              <div className="flex flex-col items-start gap-4 h-fit">
                <div className="flex flex-col space-y-4">
                  <textarea
                    placeholder="Enter your message"
                    className="box-border h-[5.25rem] p-2 w-72 bg-white/10 border-[0.1px] border-white/10 rounded-lg text-xs  placeholder:text-white/50 shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="box-border   p-1  w-72  bg-black/25 border-[0.1px] border-white/10 text-xl font-black  rounded-lg bl hover:text-black hover:border-black/10 transition-all duration-200 hover:bg-white/25     shadow-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 ">
          <div className="w-full border-[.1rem] border-white/50 "></div>
          <div className="flex flex-row justify-between items-center px-2  w-full h-fit">
            <div className="flex   w-fit h-fit bg-white/10 backdrop-blur-md rounded-lg">
              <div className="flex flex-col justify-center items-start p-2 gap-1  rounded-lg">
                <div className="w-fit  font-normal text-[8px]  text-white/50">
                  CALL US
                </div>
                <div className="w-fit  font-normal text-xs leading-4 text-white/75">
                  +41609202024
                </div>
              </div>
              <div className="flex flex-col justify-center items-start p-2 gap-1  rounded-lg">
                <div className="w-fit  font-normal text-[8px]  text-white/50">
                  VISIT US
                </div>
                <div className="w-fit  font-normal text-xs leading-4 text-white/75">
                  15 Carney Rd, North York, ON M2M 1T1, Canada
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center p-4 gap-8   bg-white/10 backdrop-blur-md rounded-lg text-xs">
              <div>Privacy</div>
              <div>Terms & Conditions</div>
              <div>Security</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
