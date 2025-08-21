import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1601px] mx-auto bg-[#06091A]">
      <div className="max-w-[1320px] mx-auto flex flex-col justify-center items-center">
        <div className="footer-image mx-auto">
          <img src="/src/assets/logo-footer.png" alt="" />
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
        <p className="text-center mb-[32px]">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
