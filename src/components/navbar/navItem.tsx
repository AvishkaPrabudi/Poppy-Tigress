import { useState } from "react";
import logo from "../../assets/logo.png";
import { X } from "lucide-react";

const NavItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center py-1 sm:py-1 relative z-50 w-full max-w-7xl mx-auto px-6">
        <img src={logo} alt="logo" className="3xl:max-w-[191px]  max-w-[50px]" />

        <div className="flex items-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-1 rounded-lg font-semibold text-base min-w-[200px]">
            Learn About tigress
          </button>
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer relative z-[60] border-2 border-transparent hover:border-red-600"
            type="button"
            aria-label="Toggle navigation menu"
          >
            <span className="text-red-600 text-xl font-bold select-none pointer-events-none">☰</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]" onClick={toggleMenu}>
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-amber-900 via-amber-950 to-stone-900 shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
            >
              <X size={28} className="text-gray-800" strokeWidth={3} />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6 mt-16">
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-red-800 transition-all hover:border-b-2 hover:translate-y-0.5 uppercase text-lg">
                HOME
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-red-800 transition-all hover:border-b-2 hover:translate-y-0.5 text-lg">
                About Us
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-red-800 transition-all hover:border-b-2 hover:translate-y-0.5 uppercase text-lg">
                ROADMAP
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-red-800 transition-all hover:border-b-2 hover:translate-y-0.5 uppercase text-lg">
                HOW TO BUY
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-red-800 transition-all hover:border-b-2 hover:translate-y-0.5 uppercase text-lg">
                TORENOMICS
              </button>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg border-b-4 border-red-800 transition-all hover:border-b-2 hover:translate-y-0.5 uppercase text-lg">
                FAQ
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavItem;