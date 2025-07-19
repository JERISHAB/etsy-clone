import React from "react";
import searchLogo from "../../assets/images/search-icon.svg";
import "../../index.css";

const SearchBox = ({ view = "lg" }) => {
  return (
    <div
      className={`lg:mr-2.25 box-border flex h-12 w-[833.5px] shrink justify-between rounded-full border-2 ${
        view === "sm" ? "hidden sm:flex" : ""
      } `}
    >
      <input
        type="text"
        placeholder="Search for anything"
        className="font-w box-border px-4.5"
      />
      <div
        className={`mx-1 my-0.75 flex w-[38.4px] lg:w-9.5 items-center justify-center rounded-full bg-red-400 pb-0.25`}
      >
        <img src={searchLogo} className="h-6" alt="" />
      </div>
    </div>
  );
};

export default SearchBox;
