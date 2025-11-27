import React from 'react';
import botcalmImg from "../../assets/2ndhall.mp4";
import ezgifImg from "../../assets/b72386e8-92af-4102-8669-4d422a-unscreen.gif";

const TigerTwo = () => {
  return (
    <section className="h-screen w-full   pt-36 sm:pt-44 pb-44 sm:pb-56 relative overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={botcalmImg}
          autoPlay
          loop
          muted
          playsInline
          className=" h-screen w-full h-full object-cover "
        ></video>
        <div className="absolute inset-0 " />
      </div>

      {/* Foreground GIF */}
      <div className="relative h-full flex items-center justify-center">
        <img
          src={ezgifImg}
          alt="badge"
          className="absolute left-1/2 top-0 transform -translate-x-1/2 mt-25
                     w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:h-120 xl:w-120 object-contain z-20"
        />
      </div>

    </section>
  );
};

export default TigerTwo;
