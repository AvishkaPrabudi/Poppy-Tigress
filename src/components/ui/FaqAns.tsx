import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftToLine } from "lucide-react";
import rocketright from "../../assets/rock.right.png";
import tiger from "../../assets/hero-tiger.png";
import roller from "../../assets/roller.png";
import flag from "../../assets/flag.png";

const FaqAns: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-white text-black overflow-hidden px-6 md:px-20">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        aria-label="Go back"
        className="absolute left-6 bottom-32 md:bottom-40 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-105 font-bold z-50"
      >
        <ArrowLeftToLine size={22} strokeWidth={2} />
      </button>

      {/* Background rock */}
        
          <img
            src={rocketright}
            alt="rock"
            className="absolute left-0 bottom-0 w-[250px] md:w-[350px] object-contain transform scale-x-[-1]"
          />

      {/* Flag + Title */}
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-start md:ml-40 mt-10 md:mt-0">
        <div className="relative flex items-center">
          <img src={roller} alt="roller" className="h-[160px]" />
          <div className="absolute left-[42px] bg-gradient-to-r from-[#c3150d] to-[#d0301b] text-white py-4 px-6 text-lg font-semibold rounded-tr-lg rounded-br-lg">
            How do I earn Tigress Tokens?
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="relative max-w-lg text-center md:text-left md:mr-20 mt-8 md:mt-0">
        <p className="text-gray-800 text-base leading-relaxed">
          You can earn Tigress Tokens by actively engaging in various in-game
          activities such as completing daily and special quests, winning
          mini-games, and interacting with your virtual tiger through feeding,
          grooming, and playing. Additionally, you can participate in community
          events, trading, and referral programs to earn extra tokens.
        </p>
      </div>

      {/* Tiger Image */}
      <div className="relative flex justify-end md:mr-20 mt-10 md:mt-0">
        <img src={tiger} alt="tiger" className="w-[220px] md:w-[260px]" />
      </div>

      {/* Optional decorative flag */}
      <img
        src={flag}
        alt="flag"
        className="absolute top-0 left-0 w-[100px] md:w-[120px]"
      />
    </section>
  );
};

export default FaqAns;
