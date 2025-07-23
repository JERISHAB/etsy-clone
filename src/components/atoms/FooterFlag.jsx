import React from "react";

const FooterFlag = ({ icon }) => {
  return (
    <>
      <div className={`border-box rounded-full lg:mr-6 lg:ml-0`}>
        <img src={icon} alt="" />
      </div>
    </>
  );
};

export default FooterFlag;
