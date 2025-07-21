const BasicCard = ({ title, image }) => {

    return (
      <div
        className={`flex h-24 items-center justify-center rounded-lg bg-cover bg-center p-2 shadow-md lg:h-50 lg:items-end lg:justify-start relative`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black/60 to-transparent"></div>

        <span className="font-w block text-[14px] tracking-[0.08px] text-white lg:text-[16px] z-10">
          {title}
        </span>
      </div>
    );
};

export default BasicCard;
