import React from "react";
import LogoFooter from "../atoms/LogoFooter";

const FooterLeft = () => {
  return (
    <div className="flex md:flex-col md:gap-3 md:ml-5 md:w-192   items-center md:order-1  bg-[#14186a] text-center text-white justify-center gap-5  p-4">
      <LogoFooter/>

      <button className="rounded-full font-cw text-[12.99px] bg-[#2f3bd6] md:text-[16px] px-4 py-2 md:py-3 font-medium text-white">
        Download the Etsy App
      </button>
    </div>
  );
};

export default FooterLeft;
