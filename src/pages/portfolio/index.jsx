import React from "react";
import RecentProjects from "./RecentProjects";
import MyGallery from "./myGallery";
import SocialMedia from "./SocialMedia";

const Portfolio = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-red-200 ">portfolio</h1>
      <RecentProjects />
      <MyGallery />
      <SocialMedia />
    </div>
  );
};

export default Portfolio;
