const BlogCard = ({ title, desc, image, detail }) => {
  return (
    <div className="flex w-full min-w-[113px] rounded-xl border-1 border-b-gray-400 shadow-2xl lg:flex-col">
      <img
        src={image}
        alt={title}
        className="h-full w-1/2 rounded-l-xl object-cover lg:h-100 lg:w-full lg:rounded-t-xl lg:rounded-b-none"
      />
      <div className="ml-4 flex flex-col pt-6 pr-4">
        <p className="font-w mb-3 tracking-[.08px]">{title}</p>
        <p className="font-w text-[16px] font-[600] tracking-[.08px] lg:mb-4">
          {desc}
        </p>
        <p className="font-w hidden text-[16px] font-[500] tracking-[.08px] lg:block">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
