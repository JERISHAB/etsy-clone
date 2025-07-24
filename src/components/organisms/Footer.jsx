   import React from 'react'
import FooterTop from '../molecules/FooterTop'
import FooterLeft from '../molecules/FooterLeft';
import FooterRight from '../molecules/FooterRight';
import FooterBottom from '../molecules/FooterBottom';
   
   const Footer = () => {
     return (
       <div>
         <FooterTop />
         <div className="flex flex-col justify-between gap-4 md:gap-7 bg-[#2638c0] text-white md:flex-row">
           <FooterRight />
           <FooterLeft />
         </div>
         <FooterBottom />
       </div>
     );
   }
   
   export default Footer