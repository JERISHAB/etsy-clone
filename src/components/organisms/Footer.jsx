   import React from 'react'
import FooterTop from '../molecules/FooterTop'
import FooterLeft from '../molecules/FooterLeft';
import FooterRight from '../molecules/FooterRight';
import FooterBottom from '../molecules/FooterBottom';
   
   const Footer = () => {
     return (
       <div>
         <FooterTop />
         <div className="flex flex-col justify-between gap-10 bg-[#2f3bd6]  text-white md:flex-row">
           <FooterRight />
           <FooterLeft />
         </div>
         <FooterBottom />
       </div>
     );
   }
   
   export default Footer