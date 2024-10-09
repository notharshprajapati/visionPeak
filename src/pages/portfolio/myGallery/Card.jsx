import React from "react";

const Card = ({ name }) => {
  return (
    <div class="grow h-full bg-white rounded-2xl order-0 overflow-hidden">
      <img
        src={`/image/${name}.jpg`}
        alt={`${name}`}
        class="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Card;
