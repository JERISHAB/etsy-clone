import { GiftsData } from "../../db/data";
import GiftCard from "../molecules/GiftCard";

const Gift = ({ title, image }) => {
  return (
    <div className="mt-4 px-3 lg:px-14">
      <span className="font-w block text-[16px] font-[500] tracking-[0.08px]">
        Gifts as special as they are
      </span>
      <div className="mt-4.5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {GiftsData.slice(0, 4).map((gift) => (
          <GiftCard key={gift.id} image={gift.image} title={gift.title} />
        ))}

        {GiftsData.slice(4).map((gift) => (
          <div className="hidden md:block lg:inline-block" key={gift.id}>
            <GiftCard key={gift.id} image={gift.image} title={gift.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;
            