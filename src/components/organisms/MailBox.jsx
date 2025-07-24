import React from "react";

const MailBox = () => {
  return (
    <div className="bg-[#d5f3ff] px-4 py-6 text-center font-cw">
      <p className="mx-auto max-w-[600px] lg:max-w-900 text-[16px] font-[500] tracking-[.08px] leading-[1.25] text-[#000]">
        Yes! Send me exclusive offers, unique gift ideas, and personalised tips
        for shopping and selling on Etsy.
      </p>

      <div className="mx-auto mt-4 flex max-w-[500px] h-[48px] overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 text-[16px] outline-none"
        />
        <button className="bg-transparent px-4 text-[16px] font-[500] text-black">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailBox;
