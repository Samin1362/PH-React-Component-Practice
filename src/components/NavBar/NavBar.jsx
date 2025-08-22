import React from 'react';

const NavBar = ({totalBalance}) => {
  return (
    <div className='max-w-[1320px] mx-auto mt-[50px]'>
      <nav className='md:flex justify-between items-center'>
        <div className='flex justify-center'>
          <img src="/images/logo.png" alt="" />
        </div>
        <ul className='md:flex text-center text-xl gap-[48px] items-center'>
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
          <li className='bg-white mt-3 md:mt-0 text-black font-bold px-[20px] py-[16px] rounded-lg'>{totalBalance} Coin</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;