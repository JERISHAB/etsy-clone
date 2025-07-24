import React from 'react'

const StandoutCard = ({title,image,discount}) => {
  return (
    <div className="min-w-[169.6px]">
      <img
        src={image}
        alt={title}
        className="h-[169px] w-full rounded-xl object-cover lg:h-[251px] lg:w-[251.1px]"
      />
      <p className="font-w mt-1.75 text-[16px] leading-[1.25] font-[500] tracking-[0.08px] lg:mt-1.75 pl-1.5">
        {title}
      </p>
      <p className="font-w text-[16px] leading-[1.25] font-[500] tracking-[0.08px] pl-1.5">
        {discount}
      </p>
    </div>
  );
}

export default StandoutCard