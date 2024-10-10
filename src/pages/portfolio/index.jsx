import React from "react";
import RecentProjects from "./RecentProjects";
import MyGallery from "./myGallery";
import SocialMedia from "./SocialMedia";

const Portfolio = () => {
  return (
    <div className="w-screen h-fit flex flex-col items-center justify-center px-40">
      <RecentProjects />
      <MyGallery />
      <SocialMedia />
    </div>
  );
};

export default Portfolio;
