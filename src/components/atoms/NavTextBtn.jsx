import React from 'react'
import "../../index.css";

const NavTextBtn = ({ headName, icon, view }) => {
  return (
    <div
      className={`flex justify-center items-center hover:bg-gray-400 rounded-full  lg:py-0.5 lg:ml-6 lg:mr-5.25 ${
        view === 'sm' ? "hidden lg:flex" : ""
      } `}
    >
      {icon && <img src={icon} alt="" className={` mr-1.75 ${headName === 'Gifts'? 'h-4.5 relative top-[1px] left-[0.5px]': 'h-[18px] relative left-[0.5px]  -ml-[1px]'} `} />}

      <span className="text-[13px] font-w">{headName}</span>
    </div>
  );
};

export default NavTextBtn