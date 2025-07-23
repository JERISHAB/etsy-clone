import React from 'react'

const StandoutCard = ({title,image,discount}) => {
  return (
    <div className="min-w-[113px] ">
      <img
        src={image}
        alt={title}
        className="h-[165px] rounded-xl object-cover lg:h-[245px]"
      />
      <p className="font-w mt-2 text-[16px] leading-[1.25] font-[500] tracking-[0.08px]">
        {title}
      </p>
      <p className="font-w  text-[16px] leading-[1.25] font-[500] tracking-[0.08px]">
        {discount}
      </p>
    </div>
  );
}

export default StandoutCard