import { useNavigate } from "react-router-dom";
import palacePng from "../../assets/hero-palace.png";
import rockleftpng from "../../assets/rock-left.png";
import rocketright from "../../assets/rock.right.png";
import tiger from "../../assets/hero-tiger.png";

import flag from "../../assets/flag.png";
import Tiger from "./Tiger";
import Search from "./Search";
import Footer from "./footer.tsx";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Tiger Component at the top */}
      <Tiger />

      <Search />

      <div className="relative min-h-screen bg-white overflow-hidden text-black font-sans">
        {/* Ask a Question Ribbon */}
        <div className="flex flex-col items-center -mt-10 relative z-20"></div>

        {/* FAQ Section */}
        <div className="relative mt-12 flex flex-col items-center">
          <img src={palacePng} alt="palace" className="w-[600px] z-0" />
          <img
            src={rockleftpng}
            alt="rock left"
            className="absolute left-0 top-1/2 w-40 -translate-y-1/2"
          />
          <img
            src={rocketright}
            alt="rock right"
            className="absolute right-0 top-1/2 w-40 -translate-y-1/2"
          />

          

          {/* FAQ Questions */}
          <div className="absolute top-[28%] w-full px-10 flex flex-col items-center gap-8 text-white font-semibold z-10">
            <div className="flex flex-wrap justify-center gap-6">
              {/* CLICKABLE FLAG */}
              <div
                className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => navigate("/faq")}
              >
                <img
                  src={flag}
                  alt="flag"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[200px] max-w-[742px] h-auto z-0"
                />
                <div className="relative bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-md shadow-lg text-center min-w-[230px]">
                  How do I earn Tigress Tokens?
                </div>
              </div>

              <div className="relative">
                <img
                  src={flag}
                  alt="flag"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[200px] z-0"
                />
                <div className="relative bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-md shadow-lg text-center min-w-[230px]">
                  What is PoppyTigress?
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="relative">
                <img
                  src={flag}
                  alt="flag"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[200px] z-0"
                />
                <div className="relative bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-md shadow-lg text-center min-w-[230px]">
                  Is Tigress free to play?
                </div>
              </div>

              <div className="relative">
                <img
                  src={flag}
                  alt="flag"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-[200px] z-0"
                />
                <div className="relative bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-md shadow-lg text-center min-w-[230px]">
                  What are Tigress Tokens?
                </div>
              </div>
            </div>
          </div>

          <img src={tiger} alt="Tiger Center" className="absolute top-[48%] w-48" />
        </div>

        
      </div>
               <Footer />
    </>
  );
};

export default FAQ;
