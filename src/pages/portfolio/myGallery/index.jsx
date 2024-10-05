import React from "react";
import Videography from "./Videography";
import Photography from "./Photography";

const MyGallery = () => {
  return (
    <div>
      <h1 className="text-orange-500">My Gallery</h1>
      <Videography />
      <Photography />
    </div>
  );
};

export default MyGallery;
