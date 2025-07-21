import Logo from "../atoms/Logo";
import burgerImg from "../../assets/images/category-burger.svg";
import NavIconBtn from "../atoms/NavIconBtn";
import SearchBox from "../molecules/SearchBox";
import NavTextBtn from "../atoms/NavTextBtn";
import flag from "../../assets/images/india-flag.svg";
import heart from "../../assets/images/heard-nav.svg";
import gift from "../../assets/images/gift-nav.svg";
import cart from "../../assets/images/cart-nav.svg";
import MobSearch from "../molecules/MobSearch";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-2.25 pt-2.5 lg:mt-1 lg:justify-start lg:py-2 lg:pr-11 lg:pl-13.25">
        <div className="flex">
          <Logo />
          <NavTextBtn icon={burgerImg} headName="Categories" view="sm" />
        </div>
        <SearchBox view="sm" />
        <div className="mr-3.75 flex items-center justify-end pb-0.5 lg:mr-0 lg:pb-0">
          <NavTextBtn headName="Sign in" />
          <div className="ml-8.5 flex items-center justify-end gap-5.25 lg:ml-3 lg:gap-0">
            <NavIconBtn icon={flag} border={true} />
            <NavIconBtn icon={heart} />
            <NavIconBtn icon={gift} />
            <NavIconBtn icon={cart} />
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center gap-[3px]  pt-0.5 pb-3 pr-6 tracking-[0.1299px] lg:flex">
        <NavTextBtn headName="Gifts" icon={gift} />
        <NavTextBtn headName="Back to School" />
        <NavTextBtn headName="Home Favourites" />
        <NavTextBtn headName="Fashion Finds" />
        <NavTextBtn headName="Registry" />
      </div>
      <MobSearch />
    </>
  );
};

export default Navbar;
