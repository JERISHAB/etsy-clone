import Navbar from '../organisms/Navbar'
import Hero from '../organisms/Hero';
import Appreciation from '../organisms/Appreciation';
import ProductList from '../organisms/ProductList';
import Gift from '../organisms/Gift';
import Popular from '../organisms/Popular';

const HomePage = () => {
  return (
    <>
      <div className="flex-col">
        <Navbar />
        <Hero />
        <Appreciation />
        <ProductList />
        <Gift />
        <Popular/>
      </div>
    </>
  );
}

export default HomePage 
     