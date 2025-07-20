import toSchool from "../../assets/images/back-to-school.png";
import "../../index.css";

const HeroLeft = () => {
  return (
    <div className="flex flex-col rounded-[12px] bg-amber-100 pt-4 lg:w-4xl lg:flex-row lg:pt-0 lg:h-100">
      <div className="mb-6 flex flex-col items-center lg:w-2/5 lg:justify-center">
        <p className="font-g block text-[35.01px] lg:text-5xl">
          Back to school
        </p>
        <p className="font-w -m-1 block text-[18px] tracking-[0.09px]">
          For the first day and beyond
        </p>
      </div>
      <div className="curved-top relative mt-1 lg:mt-0 lg:w-3/5">
        <img
          src={toSchool}
          alt=""
          className="rounded-b-[12px] lg:h-[100%] lg:w-[100%] lg:rounded-r-[12px] lg:rounded-bl-[0px]"
        />
        <div className="text-1xl absolute bottom-3 left-[25%] w-44 rounded-3xl bg-black py-3 text-center text-white lg:bottom-[20%] lg:left-[-50%]">
          <p className="font-w font-[500] lg:inline-block ">Shop school</p>
          <p className="font-w font-[500] lg:inline-block"> supplies</p>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
