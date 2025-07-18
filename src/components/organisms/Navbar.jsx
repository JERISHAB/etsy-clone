
import Logo from '../atoms/Logo'
import burgerImg from '../../assets/images/category-burger.svg'
import NavIconBtn from '../atoms/NavIconBtn'
import SearchBox from '../molecules/SearchBox';
import NavTextBtn from '../atoms/NavTextBtn';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between align-middle">
        <Logo />
        <NavIconBtn logo={burgerImg} headName="Categories" />
        <SearchBox />
        <NavTextBtn headName='Sign in'/>
      </div>
    </>
  );
}

export default Navbar