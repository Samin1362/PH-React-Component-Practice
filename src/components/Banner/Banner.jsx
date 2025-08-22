import React from "react";

const Banner = ({handleTotalBalance}) => {
  return (
    <div className="max-w-[1320px] mx-auto bg-[url('/images/bg-shadow.png')] bg-black text-white py-[64px] px-[175px] mt-[24px] rounded-2xl">
      <div className="max-w-[970px] flex flex-col justify-center items-center text-center ">
        <img
          className="mx-auto mb-[24px]"
          src="/images/banner-main.png"
          alt=""
        />
        <h1 className="text-[40px] font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[24px] text-[##ffffffb3]">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="mt-[24px] border-2 border-[#E7FE29] p-[8px] rounded-lg max-w-[200px]">
          <button onClick={() => handleTotalBalance(1000)} className="bg-[#E7FE29] text-[black] font-bold px-[20px] py-[14px] rounded-lg">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
