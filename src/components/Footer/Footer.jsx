import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer upper section */}
      <div className="relative top-[150px] max-w-[1320px] bg-white/30 mx-auto flex flex-col justify-center items-center p-[24px] border-2 border-white rounded-lg">
        <div className="bg-[url('/images/bg-shadow.png')] bg-cover w-full p-[24px] bg-[white] flex flex-col justify-center items-center rounded-lg py-[88px]">
          <h1 className="text-[32px] font-bold">Subscribe to our Newsletter</h1>
          <p className="my-[24px]">Get the latest updates and news right in your inbox!</p>
          <div className="flex gap-3">
            <input type="text" className="px-[30px] py-[18px] w-[400px] border-2 border-[gray] rounded-lg" placeholder="Enter your email" />
            <button className="bg-[yellow] py-[18px] px-[30px] rounded-lg font-bold">Subscribe</button>
          </div>
        </div>
      </div>
      {/* footer lower section */}
      <div className="max-w-[1601px] mx-auto bg-[#06091A] text-white">
        <div className="max-w-[1320px] mx-auto flex flex-col justify-center items-center">
          <div className="footer-image mx-auto mt-[160px]">
            <img src="/images/logo-footer.png" alt="" />
          </div>
          <div className="flex justify-center gap-[117px] mt-[64px]">
            <div>
              <h1 className="font-bold">About Us</h1>
              <p>
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </div>
            <div>
              <h1 className="font-bold">Quick Links</h1>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">Subscribe</h1>
              <p className="py-2">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              <div>
                <input
                  type="text"
                  className="bg-white py-[14px] px-[30px] text-black rounded-l-lg"
                  placeholder="Enter your email"
                />
                <button className="bg-[yellow] font-bold text-black text-center px-[30px] py-[14px] rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <p className="text-center mb-[32px]">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
