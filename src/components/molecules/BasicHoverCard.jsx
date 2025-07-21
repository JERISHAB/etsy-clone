import React from 'react'
 import heart from '../../assets/images/card-heart.svg'
 
const BasicHoverCard = ({ image, ogPrice, discountPrice }) => {
     
   return (
     <div className="relative rounded-xl bg-white shadow-sm group">
       <img src={image} alt="Gift" className="rounded-xl w-full " />

       <div className="border-[rgb(148, 148, 148)] absolute bottom-2 left-2 rounded-full border-1 bg-white px-3 py-[2px] text-sm shadow">
         <span className="font-w text-[12.99px] font-[700]">
           <span className="">₹ </span>
           {discountPrice.toLocaleString("en-IN")}
         </span>
         {ogPrice && (
           <span className="font-w ml-1 text-[12.99px] font-[500] line-through">
             ₹ {ogPrice?.toLocaleString("en-IN")}
           </span>
         )}
       </div>

       <div className="absolute hidden top-2 right-2 rounded-full bg-white p-[6px] shadow group-hover:block">
         <img src={heart} className='h-4' alt="" />
       </div>
     </div>
   );
 };
 
export default BasicHoverCard
 
