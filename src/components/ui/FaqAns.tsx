import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftToLine } from 'lucide-react';
import rocketright from '../../assets/rock.right.png';
import tiger from '../../assets/hero-tiger.png';
import roller from '../../assets/roller.png';
import flag3 from '../../assets/flag3.png';
import place1 from '../../assets/place1.png';

const FaqAns: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white text-black">
      <button
        onClick={() => navigate(-1)}
        aria-label="Go back"
        className="fixed bottom-20 left-4 z-50 rounded-full bg-white/90 p-2 font-bold text-gray-800 shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-white sm:bottom-24 sm:left-6 sm:p-3 md:bottom-32 md:left-8 lg:bottom-40 lg:left-10"
      >
        <ArrowLeftToLine
          size={18}
          className="sm:h-5 sm:w-5 md:h-6 md:w-6"
          strokeWidth={2}
        />
      </button>

      <img
        src={rocketright}
        alt="rock"
        className="absolute bottom-0 left-0 z-0 hidden w-[120px] scale-x-[-1] transform object-contain sm:w-[180px] md:block md:w-[250px] lg:w-[320px] xl:w-[400px]"
      />
      <img
        src={place1}
        alt="rock"
        className="absolute bottom-0 left-0 z-0 w-[50vw] object-contain sm:w-[180px] md:hidden md:w-[250px] lg:w-[320px] xl:w-[400px]"
      />

      <div className=" absolute top-4 left-1/2 z-50 w-[250px] -translate-x-1/2 transform sm:top-6 sm:w-[180px] md:top-8 md:w-[220px] lg:top-10 lg:w-[280px] xl:top-12 xl:w-[320px]">
        <div className="relative">
          <img src={flag3} alt="flag" className="h-auto w-full" />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-[100vw] -mt-20 md:mt-0 px-4 text-center sm:max-w-[65%] sm:px-6 md:max-w-[75%] md:px-8 lg:max-w-[65%] lg:px-12 xl:mt-0 xl:max-w-[55%] xl:px-16 2xl:max-w-[50%]">
        <p className="text-[16px]  leading-relaxed text-gray-800 sm:text-xs sm:leading-relaxed md:text-sm md:leading-loose lg:text-base lg:leading-loose xl:text-lg xl:leading-loose 2xl:text-xl">
          Yes, Tigress is completely free to play, allowing players to adopt and
          interact with virtual tigers without any initial investment. However,
          the product will also include certain premium items, accessories, and
          in-game features that can enhance their experience, certain premium
          items, accessories, and in-game features that players can unlock
          through in-game achievements or purchase them for additional Tigress
          Tokens.
        </p>
      </div>

      <img
        src={tiger}
        alt="tiger"
        className="absolute -right-[19%] bottom-0 z-10 h-auto w-[90vw] scale-x-[-1] transform object-contain sm:w-[250px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]"
      />
    </section>
  );
};

export default FaqAns;
