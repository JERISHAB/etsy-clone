import React from 'react'
import { StandoutList } from '../../db/data'
import StandoutCard from '../molecules/StandoutCard'

const Standout = () => {
    return (
      <div className="px-3 mt-9 lg:p-14">
        <h2 className="font-w mb-4 text-[24px] leading-[1.35] font-[500] tracking-[.12px] lg:text-[27.01px] lg:tracking-[1.3]">
          Save now on standout styles
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {StandoutList.map((item) => (
            <StandoutCard
              key={item.id}
              image={item.image}
              title={item.title}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
    );
}

export default Standout