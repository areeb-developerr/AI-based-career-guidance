import AuthForm from "../components/AuthForm";
import { NavLink } from "react-router-dom";
const Signup = () => {
  const handleSignUp = (form) => {};
  return (
    <div>
      <AuthForm type="signup" handleSubmit={handleSignUp} />
      <div className="text-center mt-6 mb-10">
        <p>
          Already a user ?{" "}
          <NavLink to="/login" className="text-blue-400 font-semibold">
            Login{" "}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
