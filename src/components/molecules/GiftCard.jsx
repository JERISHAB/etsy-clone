
const GiftCard = ({ image, title }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-300 p-1 shadow-sm">
      <img
        src={image}
        alt={title}
        className="h-16 w-16 lg:h-26 lg:w-26 rounded-lg object-cover"
      />
      <span className="font-w text-[12.99px] leading-[18.186px] font-[500] tracking-[0.1299px]">
        {title}
      </span>
    </div>
  );
};

export default GiftCard;
