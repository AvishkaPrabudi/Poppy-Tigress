import ellipsePng from "../../assets/Ellipse 2.png";
import downwordFlag from "../../assets/downwordFlag.png";
import { Search as SearchIcon, Send } from "lucide-react";

const Search = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white overflow-hidden text-black font-sans">
        {/* Ask a Question Ribbon with centered search bar */}
        <div className="flex flex-col items-center mt-12 relative">
          <div className="relative flex flex-col items-center">
            {/* Flag Background - increased size */}
            <img src={downwordFlag} alt="flag" className="w-[500px] h-[380px] md:w-[600px] md:h-[460px] lg:w-[700px] lg:h-[540px] object-contain" />
            
            {/* Content over flag */}
            <div className="absolute top-[75px] md:top-[95px] lg:top-[115px] flex flex-col items-center w-full px-4">
              
              {/* Search Bar - at the top */}
              <div className="relative flex items-center w-[120%] md:w-[130%] lg:w-[140%] max-w-5xl mb-4 md:mb-6">
                <div className="absolute left-4 text-gray-500 z-10">
                  <SearchIcon size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-full border-2 border-black rounded-full px-12 py-3 md:py-4 focus:outline-none focus:border-gray-600 text-gray-700 placeholder-gray-400 shadow-md bg-white"
                />
                <button className="absolute right-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full p-2 z-10">
                  <Send size={18} />
                </button>
              </div>

              <p className="text-white font-semibold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">Ask a question</p>

              {/* Avatar - at the bottom with increased size */}
              <img src={ellipsePng} alt="Tiger Avatar" className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;