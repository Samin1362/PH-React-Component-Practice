import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Main = ({ totalBalance, setTotalBalance }) => {
  //loading data
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [error, setError] = useState(false);

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

  //selected player section
  const handleSelectedPlayer = (e) => {
    if (!selectedPlayers.includes(e)) {
      if (totalBalance > 0 && totalBalance > e.price) {
        setTotalBalance(totalBalance - e.price);
        setSelectedPlayers((selectedPlayers) => [...selectedPlayers, e]);
        setError(false);
      } else {
        console.log("show alert");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    }
  };

  const handleDeleteSelectedPlayer = (e) => {
    setSelectedPlayers((selectedPlayers) =>
      selectedPlayers.filter((player) => player.id !== e.id)
    );
  };

  return (
    <div className="mt-[30px] md:mt-[88px]">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between">
        {available && (
          <div>
            <h1 className="text-[12px] md:text-[28px] font-bold">
              Available Players
            </h1>
          </div>
        )}
        {!available && (
          <div>
            <h1 className="text-[12px] md:text-[28px] font-bold">
              Selected Players
            </h1>
          </div>
        )}
        <div>
          {available && (
            <div>
              <button
                onClick={() => handleAvailableTrue()}
                className="text-[12px] md:text-xl px-[30px] py-[14px] text-[black] bg-[#E7FE29] rounded-l-lg font-bold"
              >
                Available
              </button>

              <button
                onClick={() => handleAvailableFalse()}
                className="text-[12px] md:text-xl px-[30px] py-[14px]"
              >
                Selected ({selectedPlayers.length})
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
                className="text-[12px] md:text-xl px-[30px] py-[14px] bg-[#E7FE29] text-black rounded-r-lg font-bold"
              >
                Selected ({selectedPlayers.length})
              </button>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div role="alert" className="alert alert-error max-w-[1320px] mx-auto mt-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Player is not Selected. Low Coin</span>
        </div>
      )}

      {/* available section */}
      {available && (
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[32px]">
          {players.map((player, idx) => (
            <Card
              key={idx}
              player={player}
              handleSelectedPlayer={handleSelectedPlayer}
            ></Card>
          ))}
        </div>
      )}

      {/* selected section */}
      {!available && (
        <div>
          <SelectedPlayers
            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
            selectedPlayers={selectedPlayers}
          ></SelectedPlayers>
        </div>
      )}
    </div>
  );
};

export default Main;
