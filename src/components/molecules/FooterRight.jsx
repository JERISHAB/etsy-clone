import React from "react";
import DownArrow from "../atoms/DownArrow";
import InstaLogo from "../atoms/InstaLogo";
import FbLogo from "../atoms/FbLogo";
import PintrestLogo from "../atoms/PintrestLogo";
import YtLogo from "../atoms/YtLogo";


const FooterRight = () => {
  return (
    <div className="font-cw grid w-full grid-cols-1 gap-2 px-3 py-3 md:py-10 text-[16px] md:order-2 md:grid-cols-4">
      <div className="flex justify-between md:block">
        <h4 className="mb-2 font-[500]">Shop</h4>
        <ul className=" md:text-[12.99px] hidden space-y-3 md:block">
          <li>Gift cards</li>
          <li>Etsy Registry</li>
          <li>Sitemap</li>
          <li>Etsy blog</li>
          <li>Etsy United Kingdom</li>
          <li>Etsy Germany</li>
          <li>Etsy Canada</li>
        </ul>
        <DownArrow />
      </div>
      <div className="flex justify-between md:block">
        <h4 className="mb-2 font-[500]">Sell</h4>
        <ul className=" md:text-[12.99px] hidden space-y-3 md:block">
          <li>Sell on Etsy</li>
          <li>Teams</li>
          <li>Forums</li>
          <li>Affiliates & Creators</li>
        </ul>
        <DownArrow />
      </div>
      <div className="flex justify-between md:block">
        <h4 className="mb-2 font-[500]">About</h4>
        <ul className=" md:text-[12.99px] hidden space-y-3 md:block">
          <li>Etsy, Inc.</li>
          <li>Policies</li>
          <li>Investors</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Impact</li>
          <li>Legal imprint</li>
        </ul>
        <DownArrow />
      </div>
      <div className="flex flex-col md:block">
        <div className="flex w-full justify-between md:block">
          <h4 className="mb-2 font-[500]">Help</h4>
          <ul className=" md:text-[12.99px] mb-4 hidden space-y-3 md:block">
            <li className="">Help Centre</li>
            <li className="">Privacy settings</li>
          </ul>
          <DownArrow />
        </div>
        <div className="flex flex-wrap md:justify-start justify-center gap-5 mt-5">
          <InstaLogo />
          <FbLogo/>
          <PintrestLogo/>
          <YtLogo/>
        </div>
      </div>
    </div>
  );
};

export default FooterRight;
