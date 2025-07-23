const BasicCard = ({ title, image }) => {

    return (
      <div
        className={`relative flex h-22 items-center justify-center rounded-[12px] bg-cover bg-center p-2 lg:px-3 lg:py-2.5 shadow-md lg:h-62.5 lg:items-end lg:justify-start`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black/60 to-transparent"></div>

        <span className="font-w z-10 block text-[16px] tracking-[0.08px] text-white lg:text-[16px]">
          {title}
        </span>
      </div>
    );
};

export default BasicCard;
        