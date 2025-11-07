// AboutUsSection.jsx
import swordTigress from "../../assets/tiger with sworn.png";
import blueJungleBg from "../../assets/image blue.png";
import RoadMap from "./RoadMap.tsx";

const AboutUsSection = () => {
  return (
    <>
  <section className="w-full bg-gradient-to-b from-[#0b0d17] via-[#1a1f30] to-[#222] text-white py-8 md:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
        {/* Text Block */}
        <div className="md:w-1/2 text-center md:text-left bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-md">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#F15B50] mb-4">ABOUT US</h3>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            PoppyTigress blends strength and elegance, inspired by the fearless tigress and vibrant poppies.
            It symbolizes power, energy, and growth, bringing bold innovation to the digital world. Whether
            you’re a crypto enthusiast or a newcomer, join a community driven by ambition, creativity, and
            unstoppable progress!
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={swordTigress}
            alt="Sword Tigress"
            className="w-80 sm:w-96 md:w-[30rem] lg:w-[36rem] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Background jungle image */}
      <div className="absolute inset-0 z-0">
        <img
          src={blueJungleBg}
          alt="Jungle Background"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
    {/* Roadmap placed below the About section */}
    <RoadMap />
    </>
  );
};

export default AboutUsSection;

