import React from 'react'

const NavIconBtn = ({ icon, border=false,}) => {
  return (
    <>
      <div
        className={` rounded-full lg:ml-0 lg:mr-6 border-box ${
          border ? "border-2 py-[1px] px-[1px]" : ""
        }  `}
      >
        <img src={icon} alt="" className={border ? `h-[18.85px]` : ""} />
      </div>
    </>
  );
};

export default NavIconBtn    