import React from 'react'
import botcalmImg from "../../assets/hero2.png";
import ezgifImg from "../../assets/ezgif-68296679e76f95 1 (1).png";

const TigerTwo = () => {
  return (
    <div>
     <section className="w-full bg-gradient-to-b from-[#07080b] via-[#151823] to-[#2b2b2b] text-white pt-36 sm:pt-44 pb-44 sm:pb-56 relative overflow-hidden"> 
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={botcalmImg}
          alt="hall-of-warriors background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Content: single background image is used; place centered badge over it */}
      <div className="relative max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="w-full relative flex items-center justify-center py-12"> 
          {/* Centered badge over the background image */}
        <img
            src={ezgifImg}
            alt="badge"
            className="absolute left-1/2 top-0 sm:top-2 md:top-6 transform -translate-x-1/2 -translate-y-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain shadow-xl z-20"
          />
        </div>
      </div>
   </section>
   
    </div>
  )
}

export default TigerTwo
