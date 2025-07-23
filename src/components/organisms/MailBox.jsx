import React from "react";

const MailBox = () => {
  return (
    <div className="bg-[#d5f3ff] px-4 py-6 text-center">
      <p className="mx-auto max-w-[600px] text-[16px] font-semibold text-[#000]">
        Yes! Send me exclusive offers, unique gift ideas, and personalised tips
        for shopping and selling on Etsy.
      </p>

      <div className="mx-auto mt-4 flex max-w-[500px] overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 text-sm outline-none"
        />
        <button className="bg-transparent px-4 text-sm font-semibold text-black">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailBox;
