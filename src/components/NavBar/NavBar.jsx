import React from 'react';

const NavBar = ({totalBalance}) => {
  return (
    <div className='max-w-[1320px] mx-auto mt-[50px]'>
      <nav className='flex justify-between items-center'>
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <ul className='flex text-xl gap-[48px] items-center'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li className='bg-white text-black font-bold px-[20px] py-[16px] rounded-lg'>{totalBalance} Coin</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;