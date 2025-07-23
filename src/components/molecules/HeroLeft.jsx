import toSchool from "../../assets/images/back-to-school.png";
import "../../index.css";

const HeroLeft = () => {
  return (
    <div className="flex flex-col rounded-[12px] bg-[#FFFBD8] pt-4 lg:h-100 lg:w-[898px] lg:flex-row lg:pt-0">
      <div className="mb-6 flex flex-col items-center lg:w-2/5 lg:justify-start lg:pt-27.25 lg:pl-0.5">
        <p className="font-g block text-[35.01px] lg:text-[51.01px]">
          Back to school
        </p>
        <p className="font-w -m-1 block text-[18px] tracking-[0.09px] lg:-m-1.5 lg:text-[19.01px] lg:tracking-[0.0950px]">
          For the first day and beyond
        </p>
      </div>
      <div className="curved-top relative mt-0.75 lg:mt-0 lg:w-3/5 lg:rounded-r-[12px] lg:pl-0.5">
        <div className="lg:h-full lg:overflow-hidden lg:rounded-r-[12px]">
          <img
            src={toSchool}
            alt=""
            className="lg:[aspect-ratio:1.2592] rounded-b-[12px] lg:relative lg:bottom-3.25  lg:w-[100%] lg:rounded-r-[12px] lg:rounded-bl-[0px]"
          />
        </div>

        <div className="text-1xl lg:border-box absolute bottom-3 left-[25%] w-44 rounded-3xl bg-black py-3 text-center text-white lg:bottom-[30.25%] lg:left-[-50.6%] lg:flex lg:h-[48px] lg:w-46.75 lg:items-center lg:justify-center">
          <p className="font-w font-[500] lg:inline-block">Shop school</p>
          <p className="font-w font-[500] lg:ml-1 lg:inline-block"> supplies</p>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
 