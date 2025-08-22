import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";

const Card = ({ player }) => {
  const { image, name, nationality, price, type } = player;
  return (
    <div className="border-2 border-gray-400 rounded-lg p-[24px]">
      <div className="md:w-[376px] h-[240px]">
        <img className="w-full h-full rounded-lg" src={image} alt="" />
      </div>
      <div>
        <div className="flex mt-[24px] items-center gap-[16px]">
          <IoPerson className="text-[20px]" />
          <h1 className="font-bold text-[20px]">{name}</h1>
        </div>
        <div className="mt-[24px] flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <FaFlag />
            <h2>{nationality}</h2>
          </div>
          <p>{type}</p>
        </div>
        <div className="divider"></div>
        <h3 className="font-bold">Rating</h3>
        <div className="mt-[12px] flex items-center justify-between">
          <h3 className="font-bold">Price: {price}</h3>
          <button className="bg-white text-[14px] text-black py-[9px] px-[16px] border-2 border-gray-400 font-bold rounded-lg">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
