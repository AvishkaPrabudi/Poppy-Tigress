import { useState } from "react";
import whitehall from "../../assets/whitehall.png";
import roller from "../../assets/roller.png";
import mat01 from "../../assets/mat01.png";
import Services from "./Services.jsx";

const RoadMap = () => {
  const items = ["Click 01", "Click 02", "Click 03", "Click 04", "Click 05"];
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    console.log("Clicked index:", idx);
    setSelected(idx);
  };

  return (
    <>
      {/* Background Image Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={whitehall}
          alt="whitehall"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Content over background */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <div className="w-full max-w-7xl px-6 lg:px-16">
            <div className="flex items-end justify-center gap-6 md:gap-10">
              {items.map((label, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleClick(idx)}
                >
                  <img
                    src={roller}
                    alt={`pillar-${idx}`}
                    className="w-20 md:w-24 lg:w-32 transform hover:scale-105 transition"
                  />
                  <div className="mt-1 text-sm md:text-base text-black font-semibold">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-widest text-black text-center">
              ROADMAP
            </h2>
          </div>
        </div>
      </section>

      {/* Conditional image block */}
      {selected === 0 && (
        <div className="flex justify-center my-12 bg-yellow-100 py-10">
          <img
            src={mat01}
            alt="Mat 01"
            className="w-96 h-auto border-4 border-blue-500"
          />
        </div>
      )}

      {/* Services Section */}
      <Services />
    </>
  );
};

export default RoadMap;
