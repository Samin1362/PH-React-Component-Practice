import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="mt-[88px]">
      <div className="max-w-[1320px] mx-auto flex justify-between">
        <h1 className="text-[28px] font-bold">Available Players</h1>
        <div>
          <button className="mr-4">Available</button>
          <button>Selected (0)</button>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto grid grid-cols-3 gap-[24px] mt-[32px]">
        {
          players.map((player, idx) => <Card key={idx} player={player}></Card>)
        }
      </div>
    </div>
  );
};

export default Main;
