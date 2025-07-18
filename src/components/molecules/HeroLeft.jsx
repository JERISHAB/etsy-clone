import React from 'react'
import toSchool from "../../assets/images/back-to-school.png"

const HeroLeft = () => {
  return (
    <div className='flex' >
      <div className="flex items-center  flex-col">
        <span className="text-5xl">Back to school</span>
        <span className="">For the first day and beyond</span>
      </div>
      <div className=""><img src={toSchool} alt="" /></div>
    </div>
  );
}

export default HeroLeft