import React from 'react'

const NavIconBtn = ({ logo, headName }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-1.5 hover:bg-gray-400 rounded-full px-2 py-0.5">
        <img src={logo} alt="" className="h-4" />
        <span className="text-xs">{headName}</span>
      </div>
    </>
  );
};

export default NavIconBtn