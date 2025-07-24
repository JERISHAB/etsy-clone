import React from "react";
import NavIconBtn from "../atoms/NavIconBtn";
import flag from "../../assets/images/india-flag.svg";
import FooterFlag from "../atoms/FooterFlag";


const FooterBottom = () => {
  return (
    <div className="font-cw bg-[#1c1b1b] px-4 md:px-15 py-3 text-sm text-[12.99px] text-white pb-2">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
        <div className="flex items-center gap-2.5 py-4.5 font-[500]">
          <span role="img" aria-label="flag">
            <FooterFlag icon={flag} />
          </span>
          <span>India</span>
          <span>|&nbsp;&nbsp; English (IN)</span>
          <span>|&nbsp;&nbsp; ₹ (INR)</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5.5">
          <span className="w-full text-center md:w-auto py-1 md:py-0 md:text-left">
            © 2025 Etsy, Inc.
          </span>
          <a href="#" className="underline">
            Terms of Use
          </a>
          <a href="#" className="underline">
            Privacy
          </a>
          <a href="#" className="underline">
            Interest-based ads
          </a>
          <a href="#" className="underline">
            Local Shops
          </a>
          <a href="#" className="underline">
            Regions
          </a>
        </div>
      </div>
    </div> 
  );
};      

export default FooterBottom;
