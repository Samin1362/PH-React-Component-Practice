import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {
  //loading data
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  //available section
  const [available, setAvailable] = useState(true);

  const handleAvailableTrue = () => {
    setAvailable(true);
  };

  const handleAvailableFalse = () => {
    setAvailable(false);
  };

  return (
    <div className="mt-[30px] md:mt-[88px]">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        <h1 className="text-[12px] md:text-[28px] font-bold">Available Players</h1>
        <div>
          {available && (
            <div>
              <button
                onClick={() => handleAvailableTrue()}
                className="text-[12px] md:text-xl px-[30px] py-[14px] bg-[#E7FE29] rounded-l-lg font-bold"
              >
                Available
              </button>

              <button
                onClick={() => handleAvailableFalse()}
                className="text-[12px] md:text-xl px-[30px] py-[14px]"
              >
                Selected (0)
              </button>
            </div>
          )}

          {!available && (
            <div>
              <button
                onClick={() => handleAvailableTrue()}
                className="text-[12px] md:text-xl px-[30px] py-[14px]"
              >
                Available
              </button>

              <button
                onClick={() => handleAvailableFalse()}
                className="text-[12px] md:text-xl px-[30px] py-[14px] bg-[#E7FE29] rounded-r-lg font-bold"
              >
                Selected (0)
              </button>
            </div>
          )}

        </div>
      </div>

      {/* available section */}
      {available && (
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[32px]">
          {players.map((player, idx) => (
            <Card key={idx} player={player}></Card>
          ))}
        </div>
      )}


      {/* selected section */}

    </div>
  );
};

export default Main;
