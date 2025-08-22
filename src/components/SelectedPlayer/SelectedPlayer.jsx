import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer, handleDeleteSelectedPlayer }) => {
  const { name, type, image } = selectedPlayer;
  return (
    <div className="max-w-[1320px] mx-auto mt-[24px] flex justify-between items-center p-[24px] border-2 border-gray-300 rounded-lg">
      <div className="flex">
        <div className="w-[80px] h-[80px]">
          <img className="w-full h-full rounded-lg" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-center ml-[24px]">
          <h1 className="text-[16px] font-bold ">{name}</h1>
          <p>{type}</p>
        </div>
      </div>
      <div>
        <button onClick={()=> handleDeleteSelectedPlayer(selectedPlayer)}><MdDelete className="text-red-600 hover:text-red-700 text-[24px]"/></button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
