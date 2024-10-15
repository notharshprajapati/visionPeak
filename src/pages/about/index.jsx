import React from "react";
import AboutMe from "./AboutMe";
import Services from "./Services";

const About = () => {
  return (
    <div className="w-screen h-fit flex flex-col items-center justify-center bg-white z-0">
      <AboutMe />
      <Services />
    </div>
  );
};

export default About;
