import React from 'react'
import searchLogo from "../../assets/images/search-icon.svg";

const SearchBox = () => {
  return (
    <div className="flex justify-between border-2 rounded-full px-3 py-3 w-200">
      <input type="text" placeholder="Search for anything" className="" />
      <div className="bg-red-400 w-7 flex justify-center items-center rounded-full">
        <img src={searchLogo} className="h-5" alt="" />
      </div>
    </div>
  );
}

export default SearchBox