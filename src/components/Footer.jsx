import React, { useEffect, useState } from "react";

const Footer = () => {
  const email = "kcheema027@gmail.com";
  const [characters, setCharacters] = useState([]);
  const handleMailTo = () => {
    const subject = "Your Subject Here";
    const body = "Your message body here.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    const linkArray = email.split(""); // Split string into an array
    setCharacters(linkArray);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16 relative bg-[url(/images/footer.jpg)] bg-cover ">
      <div
        onClick={handleMailTo}
        className=" flex items-center justify-around    self-stretch w-full h-fit cursor-pointer  text-white hover:text-blue-500 uppercase    font-black text-xl lg:text-3xl xl:text-5xl "
      >
        <div className="flex justify-evenly h-auto w-full bg-white/5  rounded-lg overflow-hidden backdrop-blur-xl  md:mx-8 md:p-2">
          {characters.map((char, index) => (
            <span key={index}>{char}</span> // Map and print each character
          ))}
        </div>
        <div className="flex items-center justify-center w-40  lg:w-96 h-auto bg-black/80 rounded-lg  backdrop-blur-xl  md:p-2">
          Mail Us!
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2  justify-between items-center   px-16 py-8 relative self-stretch  ml-[-1.00px] mr-[-1.00px] border-t [border-top-style:solid] border-white/80">
        <div className="inline-flex flex-col  gap-2 relative  ">
          <div className="relative w-fit text-white/90  text-xl md:text-2xl ">
            Contact Us
          </div>
          <div className="w-full    font-bold  text-2xl  md:text-4xl ">
            Lets Discuss your Vision
          </div>
          <p className="relative w-fit font-light text-white/75  text-base  md:text-xl text-left ">
            You deserve the best
            <br /> work with us and see the difference.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 p-5 relative w-full xl:w-fit
             bg-white/5 rounded-lg overflow-hidden backdrop-blur-xl  "
        >
          <div className="flex flex-col  items-start gap-4 relative w-full ">
            <div className="flex items-center gap-2.5 px-4 py-2 relative self-stretch w-full   xl:w-80 bg-white/5 rounded-lg overflow-hidden border-[0.25px] border-solid border-white/40 backdrop-blur-xl  ">
              <div className="relative w-fit mt-[-0.25px]  text-white/80 text-xs ">
                Example name
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 relative self-stretch w-full xl:w-80 bg-white/5 rounded-lg overflow-hidden border-[0.25px] border-solid border-white/40 backdrop-blur-xl  ">
              <div className="relative w-fit mt-[-0.25px]  text-white/80 text-xs ">
                example@gmail.com
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 relative self-stretch w-full xl:w-80 bg-white/5 rounded-lg overflow-hidden border-[0.25px] border-solid border-white/40 backdrop-blur-xl  ">
              <div className="relative w-fit mt-[-0.25px]  text-white/80 text-xs ">
                416-XXXXXXXXX
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 relative w-full">
            <div className="flex h-20 items-start gap-2.5 px-4 py-2 relative self-stretch w-full xl:w-80 bg-white/5 rounded-lg overflow-hidden border-[0.25px] border-solid border-white/40 backdrop-blur-xl  ">
              <div className="relative w-fit mt-[-0.25px]  text-white/80 text-xs ">
                Message...
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-[21px] py-1 relative self-stretch w-full xl:w-80 bg-[#00000080] rounded-lg overflow-hidden backdrop-blur-xl  ">
              <div className="relative w-fit mt-[-1.00px] font-black text-white/90 text-xl ">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-0 items-center justify-between px-16 py-8 relative self-stretch w-full border-t [border-top-style:solid] border-white/80">
        <div className="inline-flex items-center justify-center relative bg-white/5  rounded-lg overflow-hidden backdrop-blur-xl  ">
          <div className="inline-flex flex-col items-start justify-center gap-1 px-4 py-2 relative rounded-lg overflow-hidden">
            <a
              className="relative w-fit mt-[-0.25px]  text-white/80 text-[8px] "
              href="mailto:janesmith@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              CALL US
            </a>
            <div className="relative w-fit  text-white/90 text-xs ">
              +41609202024
            </div>
          </div>
          <div className="inline-flex w-fit flex-col items-start justify-center gap-1 px-4 py-2 relative rounded-lg overflow-hidden">
            <div className="relative w-fit mt-[-0.25px]  text-white/80 text-[8px] ">
              VISIT US
            </div>
            <p className="relative w-fit  text-white/90 text-xs ">
              15 Carney Rd, North York, ON M2M 1T1, Canada
            </p>
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-8 p-4 relative bg-white/5 rounded-lg overflow-hidden backdrop-blur-xl  ">
          <p className="relative w-fit mt-[-1.00px]  text-white/80 text-[10px] ">
            Copyright 2024 VP. All rights reserved.
          </p>
        </div>
        <div className="inline-flex items-center justify-center gap-8 p-4 relative bg-white/5 rounded-lg overflow-hidden backdrop-blur-xl  ">
          <div className="relative w-fit mt-[-1.00px]   text-xs ">Privacy</div>
          <div className="relative w-fit mt-[-1.00px]   text-xs ">
            Terms &amp; Conditions
          </div>
          <div className="relative w-fit mt-[-1.00px]   text-xs ">Security</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
