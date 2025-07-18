
import Logo from '../atoms/Logo'
import burgerImg from '../../assets/images/category-burger.svg'
import NavIconBtn from '../atoms/NavIconBtn'
import SearchBox from '../molecules/SearchBox';
import NavTextBtn from '../atoms/NavTextBtn';
import flag from "../../assets/images/india-flag.svg";
import heart from "../../assets/images/heard-nav.svg";
import gift from "../../assets/images/gift-nav.svg";
import cart from "../../assets/images/cart-nav.svg";


const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-20 py-2 ">
        <Logo />
        <NavTextBtn icon={burgerImg} headName="Categories" />
        <SearchBox />
        <NavTextBtn headName="Sign in" />
        <NavIconBtn icon={flag} />
        <NavIconBtn icon={heart} />
        <NavIconBtn icon={gift} />
        <NavIconBtn icon={cart} />
      </div>
      <div className="flex justify-center py-2 border-b-1 border-gray-200">
        <NavTextBtn headName="Gifts" icon={gift} />
        <NavTextBtn headName="Back to School" />
        <NavTextBtn headName="Home Favourites" />
        <NavTextBtn headName="Fashion Finds" />
        <NavTextBtn headName="Registry" />
      </div>
    </>
  );
}

export default Navbar