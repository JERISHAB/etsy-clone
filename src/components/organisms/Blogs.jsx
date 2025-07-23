import React from 'react'
import BlogCard from '../molecules/BlogCard'
import arrow from "../../assets/images/seemore-arrow.svg";
import { BlogList } from '../../db/data';

const Blogs = () => {
  return (
    <div className="mt-24.75 flex flex-col gap-2.75 lg:gap-4 px-3 lg:px-14">
      <span className=" font-cw tracking-[.09px] flex gap-2.5 text-[18px] lg:text-[27.01px] font-[500]">
        Fresh from the blog
        <img src={arrow} alt="" className="pt-0.5" />
      </span>
      <div className=" flex flex-col md:flex-row gap-3 lg:gap-5">
        {BlogList.map((item) => (
          <BlogCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs    
