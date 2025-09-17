import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white brightness-100 gap-8">
      <div className="flex items-center gap-8 px-2">
        <button className="font-semibold rounded-2xl px-4 py-1 hover:border-2 border-blue-700">
          Home
        </button>
        <button className="font-semibold rounded-2xl px-4 py-1 hover:border-2 border-blue-700">
          About
        </button>
        <button className="font-semibold rounded-2xl px-4 py-1 hover:border-2 border-blue-700">
          Working
        </button>
      </div>
      <div className="flex justify-end items-center gap-8 px-4">
        <NavLink
          to="/login"
          className="bg-blue-700 inline-block px-10 py-2 rounded-xl hover:bg-blue-600"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-blue-700 inline-block px-10 py-2 rounded-xl hover:bg-blue-600"
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
