import palacePng from "../../assets/hero-palace.png";
import rockleftpng from "../../assets/rock-left.png";
import rocketright from "../../assets/rock.right.png";
import ellipsePng from "../../assets/Ellipse 2.png";
import decorative_chinese_scroll from "../../assets/decorative_chinese_scroll.png";

import Faq from "./Faq.js";
import Marquee from "react-fast-marquee";

const Services = () => {
  return (
    <>
      <section
        className="relative min-h-screen w-full bg-white overflow-hidden border-b-[26px]"
        style={{ borderBottomColor: "#5B3232" }}
      >
        {/* Decorative Chinese Scrolls - Top positioned */}
        {/* Left Scroll with Text */}
        <div className="absolute left-2 top-2 w-48 md:w-56 lg:w-64 z-10">
          <img
            src={decorative_chinese_scroll}
            alt="decorative-scroll-left"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6">
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-2">Buy Same Ttx</h3>
            <p className="text-xs md:text-sm lg:text-base text-white leading-tight">
              Short explanation here.<br />
              Keep students attentive.
            </p>
          </div>
        </div>

        {/* Center Scroll with Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-2 w-48 md:w-56 lg:w-64 z-10">
          <img
            src={decorative_chinese_scroll}
            alt="decorative-scroll-center"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6">
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-2">Type The Amount</h3>
            <p className="text-xs md:text-sm lg:text-base text-white leading-tight">
              Short explanation here.<br />
              Keep students attentive.
            </p>
          </div>
        </div>

        {/* Right Scroll with Text */}
        <div className="absolute right-2 top-2 w-48 md:w-56 lg:w-64 z-10">
          <img
            src={decorative_chinese_scroll}
            alt="decorative-scroll-right"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6">
            <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-2">Get PoppyTigress</h3>
            <p className="text-xs md:text-sm lg:text-base text-white leading-tight">
              Short explanation here.<br />
              Keep students attentive.
            </p>
          </div>
        </div>

        {/* Bottom ribbon with repeating ellipse and marquee text */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-[#5B3232] z-30 overflow-hidden"
          style={{ boxShadow: "inset 0 6px 0 rgba(0,0,0,0.15)" }}
        >
          <Marquee gradient={false} speed={30} className="relative z-40 flex items-center h-full">
            <div className="flex items-center px-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 pr-8">
                  <img
                    src={ellipsePng}
                    alt={`logo-${i}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-red-600 font-extrabold tracking-wider text-xl sm:text-2xl">
                    #POPPYTIGRESS
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Rocks */}
        <img
          src={rockleftpng}
          alt="rock-left"
          className="absolute left-0 top-1/2 hidden sm:block w-48 md:w-80 lg:w-[520px] lg:h-[1040px] xl:w-[580px] xl:h-[1160px]"
        />
        <img
          src={rocketright}
          alt="rock-right"
          className="absolute right-0 top-1/2 hidden sm:block sm:w-48 md:w-80 lg:w-84 xl:w-96"
        />

        {/* Palace background */}
        <img
          src={palacePng}
          alt="palace"
          className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[65%] mx-auto mt-24 md:mt-32 lg:mt-40"
        />
      </section>

      {/* FAQ Section */}
      <Faq />
    </>
  );
};

export default Services;
