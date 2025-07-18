import React from 'react'

const NavTextBtn = ({ headName,icon }) => {
  return (
    <div className="flex justify-center items-center gap-1.5 hover:bg-gray-400 rounded-full px-2 py-0.5">
        {icon && <img src={icon} alt="" className="h-4" /> }
 
      <span className="text-xs">{headName}</span>
    </div>
  );
};

export default NavTextBtn