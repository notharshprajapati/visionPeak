import React from "react";
import AboutMe from "./AboutMe";
import Milestone from "./Milestone";
import Services from "./Services";

const About = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-green-500">About</h1>
      <AboutMe />
      <Milestone />
      <Services />
    </div>
  );
};

export default About;
