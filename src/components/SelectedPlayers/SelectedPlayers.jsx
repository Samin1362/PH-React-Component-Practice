import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({selectedPlayers, handleDeleteSelectedPlayer}) => {
  return (
    <div className='mt-[10px]'>
      {
        selectedPlayers.map((selectedPlayer) => <SelectedPlayer handleDeleteSelectedPlayer={handleDeleteSelectedPlayer} selectedPlayer={selectedPlayer}></SelectedPlayer>)
      }
    </div>
  );
};

export default SelectedPlayers;