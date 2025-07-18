import React from 'react'

const NavIconBtn = ({ icon }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={icon} alt="" className="hover:p-2 hover:bg-blue-300 rounded-full" />
      </div>
    </>
  );
};

export default NavIconBtn    