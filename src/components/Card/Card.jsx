import React from "react";
import { IoPerson } from "react-icons/io5";

const Card = ({ player }) => {
  const { image, name, nationality, price, type } = player;
  return (
    <div className="border-2 border-gray-400 rounded-lg p-[24px]">
      <div className="w-[376px] h-[240px]">
        <img className="w-full h-full rounded-lg" src={image} alt="" />
      </div>
      <div>
        <div className="flex items-center gap-[16px]">
          <IoPerson className="text-[20px]" />
          <h1 className="font-bold text-[20px]">{name}</h1>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <h2>{nationality}</h2>
          </div>
          <p>tag</p>
        </div>
        <div className="divider"></div>
        <h3>Rating</h3>
        <div>
          <h3>Price: {price}</h3>
          <button>Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
