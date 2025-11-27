import { useNavigate } from "react-router-dom";
import palacePng from "../../assets/hero-palace.png";
import rockleftpng from "../../assets/rock-left.png";
import rocketright from "../../assets/rock.right.png";
import tiger from "../../assets/hero-tiger.png";

import learnFlag from "../../assets/learnFlag.png";
import WhatisFlag from "../../assets/WhatisFlag.png";
import PlayFlag from "../../assets/PlayFlag.png";
import TigressTokensFlag from "../../assets/TigressTokensFlag.png";
import Tiger from "./Tiger";
import Search from "./Search";
const FAQ = () => {
  const navigate = useNavigate();

  return (
    <>

    <Tiger />
      <Search />

      <div className="relative bg-white overflow-hidden text-black font-sans"></div>

      <div className="  h-screen relative mt-12 flex flex-col items-center">

        {/* Background Palace */}
        <img src={palacePng} alt="palace" className=" hidden md:block xl:w-[1020px] z-0 xl:mt-22" />

        {/* Left Rock (hidden on mobile) */}
        <img
          src={rockleftpng}
          alt="rock left"
          className="hidden md:block absolute left-0 top-1/2 xl:h-[780px] -translate-y-1/2"
        />

        {/* Right Rock (hidden on mobile) */}
        <img
          src={rocketright}
          alt="rock right"
          className="hidden md:block absolute right-0 top-1/2 xl:h-[780px] -translate-y-1/2"
        />

        {/* FLAGS */}
        <div className="absolute top-[28%] flex flex-col items-center z-10 w-full">
          {/* Grid: Mobile 1 column, Desktop 2 columns */}
          <div className="grid grid-cols-1 gap-2 -mt-81  md:grid-cols-2 gap-8 place-items-center xl:mt-2">

            {/* FLAG 1 */}
            <div
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate("/faq")}
            >
              <img src={learnFlag} alt="Learn Flag" className="w-[300px] md:w-[400px] xl:w-[500px]" />
            </div>

            {/* FLAG 2 */}
            <img src={WhatisFlag} alt="What is Flag" className="w-[300px] md:w-[400px] xl:w-[500px] " />

            {/* FLAG 3 */}
            <img src={PlayFlag} alt="Play Flag" className="w-[300px] md:w-[400px] xl:w-[500px]" />

            {/* FLAG 4 */}
            <img src={TigressTokensFlag} alt="Tokens Flag" className="w-[300px] md:w-[400px] xl:w-[500px]" />

          </div>
        </div>

        {/* TIGER */}
        <img
          src={tiger}
          alt="Tiger Center"
          className=" hidden md:block absolute w-36 md:w-48 z-20 xl:w-[400px] xl:mt-2
                      left-4 md:top-[48%] md:left-auto md:right-auto"
        />
      </div>
    </>
  );
};

export default FAQ;
