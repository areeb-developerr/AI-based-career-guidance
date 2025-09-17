import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0 overflow-hidden"></div>
      <div className="brightness-150 flex flex-col justify-center h-full text-center p-8 mt-40 overflow-hidden">
        <h1 className="text-white text-5xl font-bold">
          Your Personalized AI Career Guide
        </h1>
        <p className="text-gray-300 text-xl mt-4">
          Discover the best degrees and career paths based on your interests and
          skills.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <NavLink
            to="/signup"
            className="bg-cyan-700 text-white px-6 py-3 rounded-xl hover:bg-cyan-600"
          >
            Get Started
          </NavLink>
          <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-900">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
