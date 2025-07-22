import React from 'react'
import BlogCard from '../molecules/BlogCard'
import arrow from "../../assets/images/seemore-arrow.svg";
import { BlogList } from '../../db/data';

const Blogs = () => {
  return (
    <div className="mt-15 flex flex-col gap-4 px-3 lg:px-14">
      <span className="font-w flex gap-4 text-[18px] font-[700]">
        Fresh from the blog
        <img src={arrow} alt="" className="pt-1" />
      </span>
      <div className=" flex flex-col md:flex-row gap-5">
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