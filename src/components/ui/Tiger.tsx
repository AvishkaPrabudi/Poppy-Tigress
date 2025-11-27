import MartialTiger from "../../assets/martial-tiger.gif";

const Tiger = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden text-black font-sans">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center pt-20 pb-10">
        <div className="relative flex flex-col items-center">
          {/* Text positioned at top of image */}
          <div className="relative w-80 md:w-96 lg:w-[450px] xl:w-[500px] mb-8">
            <img
              src={MartialTiger}
              alt="Tiger"
              className="w-full"
            />
            {/* TOKEN text - left side */}
            <h1 className="absolute -top-2 md:-top-4 lg:-top-6 -left-8 md:-left-12 lg:-left-16 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest">
              TOKEN
            </h1>
            {/* MICS text - right side */}
            <h1 className="absolute -top-2 md:-top-4 lg:-top-6 -right-8 md:-right-12 lg:-right-16 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest">
              MICS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiger;