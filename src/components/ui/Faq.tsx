import { useNavigate } from "react-router-dom";
import palacePng from "../../assets/hero-palace.png";
import rockleftpng from "../../assets/rock-left.png";
import rocketright from "../../assets/rock.right.png";
import tiger from "../../assets/hero-tiger.png";
import roller from "../../assets/roller.png";
import flag from "../../assets/flag.png";
import Tiger from "./Tiger";
import Search from "./Search";

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

          <img
            src={roller}
            alt="roller"
            className="absolute top-[33%] w-[500px] h-[70px] object-cover z-0"
          />
          <img
            src={roller}
            alt="roller"
            className="absolute top-[52%] w-[500px] h-[70px] object-cover z-0"
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

        {/* Footer */}
        <footer className="mt-20 py-10 px-4">
          <div className="max-w-7xl mx-auto border-4 border-red-600 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              {/* Left Section - Follow Us */}
              <div className="flex flex-col items-center md:items-start border-r-0 md:border-r-4 md:border-red-600 pr-0 md:pr-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  {/* Telegram */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Discord */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                  {/* Share */}
                  <a
                    href="#"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Section - Navigation Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["HOME", "ABOUT US", "ROADMAP", "HOW TO BUY", "TOKENOMICS", "FAQ"].map(
                  (label) => (
                    <button
                      key={label}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-xl border-b-4 border-red-800 shadow-lg transition-all hover:border-b-2 hover:translate-y-0.5 uppercase text-sm md:text-base"
                    >
                      {label}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-amber-900 text-center mt-6 py-3 rounded-lg">
            <p className="text-sm text-white">
              © Copyright 2025 — All rights reserved by PoppyTigress
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FAQ;
