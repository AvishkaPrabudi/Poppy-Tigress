// AboutUsSection.jsx
import swordTigress from "../../assets/swordTiger.gif";
import blueJungleBg from "../../assets/BlueImg.mp4";
import RoadMap from "./RoadMap.tsx";

const AboutUsSection = () => {
  return (
    <>
  <section className="w-full  h-screen   text-white py-8 md:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        
     {/* Text Block */}
<div className="md:w-1/2 text-center md:text-left 
     bg-white/64 backdrop-blur-xl 
     p-6 rounded-xl border border-white/60 shadow-lg">
  
  <h3 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
    ABOUT US
  </h3>

  <p className="text-black leading-relaxed text-sm sm:text-base xl:text-lg">
    PoppyTigress blends strength and elegance, inspired by the fearless tigress and vibrant poppies.
    It symbolizes power, energy, and growth, bringing bold innovation to the digital world. Whether
    you’re a crypto enthusiast or a newcomer, join a community driven by ambition, creativity, and
    unstoppable progress!
  </p>
</div>



        {/* Image */}
        <div className="relative w-full h-full">
    <img
    src={swordTigress} 
    className="w-full h-full object-contain"
    alt="Sword Tigress"
  />
    
  
</div>

      </div>


     {/* Background jungle image */}
<div className="absolute inset-0 z-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    src={blueJungleBg}
    className="w-full h-full object-cover"
  />
</div>
    </section>
    {/* Roadmap placed below the About section */}
    <RoadMap />
    </>
  );
};

export default AboutUsSection;

