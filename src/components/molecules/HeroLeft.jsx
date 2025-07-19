import toSchool from "../../assets/images/back-to-school.png"
import "../../index.css";

const HeroLeft = () => {
  return (
    <div className='flex' >
      <div className="flex items-center  flex-col">
        <span className="text-5xl font-g">Back to school</span>
        <span className="font-w">For the first day and beyond</span>
      </div>
      <div className=""><img src={toSchool} alt="" /></div>
    </div>
  );
}

export default HeroLeft
