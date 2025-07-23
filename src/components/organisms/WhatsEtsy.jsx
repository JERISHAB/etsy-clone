import React from 'react'

import { useState } from 'react';



const WhatsEtsy = () => {

    const [hide, setHide] = useState(false);

    function expand() {
        if (hide)
            setHide(false)
        else
            setHide(true)
    }

  return (
    <div className="mt-10 px-3 bg-amber-100">
      <h2 className="font-g text-gray-700 text-center text-[31.01px] font-[300]">
        What is Etsy India?
      </h2>
      <h4 className="text-gray-600 text-center underline">
        Read our wonderfully weird story.
      </h4>
      <p className={`mt-10 ${ hide? 'line-clamp-3': 'line-clamp-none'}`}>
        Etsy is a global marketplace for creative and one-of-a-kind goods. It’s
        home to a universe of special, extraordinary items, from unique home
        decor pieces to trending fashion finds. Founded in 2005, Etsy began its
        Indian journey in 2018. <br />
        Etsy is a place where creativity lives and thrives because it’s powered
        by people just like you. We help our community of 5.9 million active
        sellers worldwide turn their ideas into successful small businesses. Our
        platform connects them with 89.9 million active buyers looking for
        something special that enables them to express their unique identity.
          </p>
          
          <div className='bg-gray-400  text-4xl rounded-full inline-flex gap-1  p-2' onClick={expand} >
              <div className="h-1 w-1 rounded-full bg-gray-950"></div>
              <div className="h-1 w-1 rounded-full bg-gray-950"></div>
              <div className="h-1 w-1 rounded-full bg-gray-950"></div>
          </div>
    </div>
  ); 
}

export default WhatsEtsy
 
