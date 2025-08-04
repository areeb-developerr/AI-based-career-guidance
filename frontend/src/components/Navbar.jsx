import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-end items-center p-4 bg-gray-900 text-white brightness-100 gap-8">
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
