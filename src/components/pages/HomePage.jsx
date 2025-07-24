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
import WhatsEtsy from '../organisms/WhatsEtsy';
import MailBox from '../organisms/MailBox';
import Footer from '../organisms/Footer';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar/>
        <Hero />
        <Appreciation />
        <ProductList />
        <Gift />
        <Popular />
        <UniqueFinds />  
        <Standout />
        <Discover />
        <Blogs />
        <WhatsEtsy />
        <MailBox />
        <Footer/>
      </div>  
    </>
  );
}

export default HomePage 
     