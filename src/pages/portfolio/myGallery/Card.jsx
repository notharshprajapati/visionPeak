import React from "react";

const Card = ({ name }) => {
  return (
    <div className="grow h-full bg-white rounded-2xl order-0 overflow-hidden">
      <img
        src={`/images/${name}.jpeg`}
        alt={`${name}`}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Card;
