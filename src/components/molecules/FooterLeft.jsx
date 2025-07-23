import React from "react";
import LogoFooter from "../atoms/LogoFooter";

const FooterLeft = () => {
  return (
    <div className="flex md:flex-col md:gap-3 md:ml-4 md:w-1/3  items-center md:order-1  bg-[#1d2386] text-center text-white justify-center gap-5  p-4">
      <LogoFooter/>

      <button className="rounded-full bg-[#2f3bd6] px-6 py-2 font-medium text-white">
        Download the Etsy App
      </button>
    </div>
  );
};

export default FooterLeft;
