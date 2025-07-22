import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero';
import Appreciation from '../organisms/Appreciation';
import ProductList from '../organisms/ProductList';
import Gift from '../organisms/Gift';
import Popular from '../organisms/Popular';
import UniqueFinds from '../organisms/UniqueFinds';
import Standout from '../organisms/Standout';
import Discover from '../organisms/Discover';
import Blogs from '../organisms/Blogs';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Appreciation />
        <ProductList />
        <Gift />
        <Popular />
        <UniqueFinds />
        <Standout />
        <Discover />
        <Blogs/>
      </div>
    </>
  );
}

export default HomePage 
     