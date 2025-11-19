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

      {/* <div className="absolute top-2 left-0 w-full flex flex-col md:flex-row items-start md:items-center md:ml-40 border">
        <div className="relative flex items-center">
          <img src={roller} alt="roller" className="h-[260px]" />

        </div>
      </div> */}



      <div className="max-w-lg mx-auto mt-[80%] md:mt- z-10 text-center border">
        <p className="text-base sm:text-xl xl:text-3xl text-gray-800 leading-relaxed">
          You can earn Tigress Tokens by actively engaging in various in-game
          activities such as completing daily and special quests, winning
          mini-games, and interacting with your virtual tiger through feeding,
          grooming, and playing. Additionally, you can participate in community
          events, trading, and referral programs to earn extra tokens.
        </p>
      </div>




      {/* Tiger Image */}
      <img
        src={tiger}
        alt="tiger"
        className="absolute bottom-0 right-[-100px] w-[700px] md:w-[550px] lg:w-[200px] h-auto transform scale-x-[-1] z-0"
      />




      <div className="relative w-[100px] md:w-[120px]">
        <div className="fixed top-6 left-70 w-[200px] md:w-[250px] lg:w-[400px] z-50 transform scale-x-[-1]">
          {/* <img
            src={flag}
            alt="flag"
            className="w-full"
          /> */}
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm md:text-lg lg:text-2xl font-bold text-center transform scale-x-[-1]">
            How do I earn Tigress Tokens?
          </span>
        </div>


      </div>

    </section>
  );
};

export default FaqAns;
