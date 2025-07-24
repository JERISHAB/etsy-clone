
import HeroLeft from "../molecules/HeroLeft";
import printables from "../../assets/images/printables.png";

const Hero = () => {
  return (
    <div className="mt-3 border-t-1 border-gray-400 px-3 pt-6 lg:mt-0 lg:flex lg:justify-between lg:px-14">
      <HeroLeft />

      <div className="relative hidden w-100 rounded-xl shadow-lg lg:block">
        <img
          src={printables}
          alt="Printables"
          className=" h-auto w-full rounded-xl object-cover"
        />
        <div className="absolute top-1/2 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="font-w absolute right-0 bottom-0 left-0 rounded-b-xl px-4.5 pb-4.25">
          <h2 className="text-[27.01px] tracking-[0.13505px] text-white">
            Printables
          </h2>
          <p className="-mt-1.25 text-[16px] text-white">Shop now</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
