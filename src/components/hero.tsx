import palacePng from "../assets/hero-palace.png";
import rockleftpng from "../assets/rock-left.png";
import rocketright from "../assets/rock.right.png";
import tiger from "../assets/3c4c55d1-c59d-4175-8ae6-f246fb-unscreen.gif";
import NavItem from "./navbar/navItem";
import ellipsePng from "../assets/Ellipse 2.png";
import PalacePng2 from "../assets/palace2.png"


import AboutUsSection from "./ui/AboutUsSection";
import Marquee from "react-fast-marquee";
import { Mic } from "lucide-react"; 
import TigerTwo from "./customUi/TigerTwo";

const HomePage = () => {
  return (
    <>
  <div className="relative min-h-screen max-w-[1920px] mx-auto w-full bg-white overflow-hidden border-b-26 pt-4 sm:pt-6" style={{borderBottomColor: '#5B3232'}}>

      {/* ...top ribbon removed per request... */}

      {/* Rocks */}
      <img
        src={rockleftpng}
        alt="rock-left"
        className="absolute left-o  hidden sm:block w-[444px] h-auto top-[100px]  "
      />
      <img
        src={rocketright}
        alt="rock-right"
        className="absolute right-0 top-[127px] hidden sm:block max-w-[526px] h-auto  "
      />

  {/* Header (extracted to NavItem) */}
  <NavItem />

      {/* Title overlayed at the top of the palace image */}
      <div className="absolute 3xl:top-[214px] top-[110px]  w-full flex justify-center z-30 pointer-events-none text-center">
        <h1 className="text-[48px]  sm:text-3xl md:text-5xl  xl:text-[90px] 3xl:text-[128px]  font-extrabold tracking-wide leading-tight drop-shadow-lg pointer-events-auto">
          WELC<span className="text-black">OME POPPY</span>{" "}
          <span className="text-[#F15B50]">TIGRESS</span>
        </h1>
      </div>

      {/* Palace background */}
      <div className="    mt-[20px] px-4 3xl:mt-[200px] xl:mt-[25px] relative flex justify-center md:mt-[100px] ">
  <img src={palacePng} alt="palace" className=" w-[503px] h-[760px]  3xl: w-[1131px] xl:w-[900px] md:block   object-contain" />

        {/* Tiger in front */}
        <img
          src={tiger}
          alt="tiger"
          className=" mt-[200px] absolute 3xl:w-[724px] max-w-[600px]  3xl:top-[97px] top-[80px] xl:mt-[60px] h-auto object-contain"
        />
      </div>

      {/* Center Content */}
  <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 lg:px-4 md:mb-30 z-30">

        {/* Search / Input box */}
  <div className="flex items-center  w-full max-w-sm sm:max-w-md md:max-w-md lg:px-7 -md bg-white rounded-xl border border-gray-400 px-3 sm:px-4 py-2 shadow-md ">
          <input
            type="text"
            placeholder="Type here or Click Tiger to Speak"
            className="flex-1 outline-none text-gray-700  placeholder-gray-400 bg-transparent text-sm sm:text-base"
          />
          <button className="ml-2 text-gray-600 hover:text-black">
            <Mic size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-row md:flex-row gap-3 sm:gap-6 w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-md mt-5">
          <button className="flex-1 bg-[#F15B50]  hover:bg-red-600 text-white px-4 sm:px-6 lg:px-0 py-2 rounded-lg font-bold text-sm sm:text-base text-center">
            BUY NOW
          </button>
          <button className="flex-1 bg-[#F15B50] hover:bg-red-600 text-white px-4 sm:px-6 lg:px-0 py-4 rounded-lg font-bold text-sm sm:text-base text-center">
            Tools
          </button>
        </div>
      </div>
    </div>



{/* mobile screen hero  */}
 



            {/* Bottom ribbon with repeating ellipse and marquee text (matches screenshot) */}
  <div className="absolute   left-0 w-full h-16 bg-[#5B3232] z-30 overflow-hidden " style={{boxShadow: 'inset 0 6px 0 rgba(0,0,0,0.15)'}}>
    <Marquee gradient={false} speed={30} className="relative z-20 flex items-center h-full">
          <div className="flex items-center px-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 pr-8">
                <img src={ellipsePng} alt={`logo-${i}`} className="w-12 h-12 rounded-full object-cover" />
                <span className="text-red-600 font-extrabold tracking-wider text-xl sm:text-2xl">#POPPYTIGRESS</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div> 


      <TigerTwo/>
  {/* About Us shared section */}
  <AboutUsSection />

  </>
  );
};

export default HomePage;
