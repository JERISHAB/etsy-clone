import React from 'react'
import cart from "../../assets/images/mob-burger.svg";
import SearchBox from './SearchBox';

const MobSearch = () => {
  return (
    <div className='flex lg:hidden px-3 gap-3 mt-2'>
          <img src={cart} alt="" />
          <SearchBox/>
    </div>
  );
}

export default MobSearch