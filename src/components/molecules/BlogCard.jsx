const BlogCard = ({ title, desc, image, detail }) => {
  return (
    <div className="flex w-full min-w-[113px] rounded-xl border border-gray-300 lg:flex-col">
      <img
        src={image}
        alt={title}
        className="h-[144px] w-[174.8px] rounded-l-xl object-cover lg:h-85 lg:w-full lg:rounded-t-xl lg:rounded-b-none"
      />
      <div className="m-0 flex w-[174.8px] flex-col pt-6 pr-3 pl-4.5 lg:ml-0 lg:w-full lg:pt-4.25 lg:pr-4">
        <p className="font-cw mb-3.25 text-[12.99px] tracking-[.1299px]">
          {title}
        </p>
        <p className="font-cw text-[16px] leading-[1.25] font-[500] tracking-[.1299px] lg:mb-3.5 lg:text-[19.01px]">
          {desc}
        </p>
        <p className="font-cw hidden text-[12.99px] leading-[1.4] tracking-[1.4] lg:block mb-4">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

 

