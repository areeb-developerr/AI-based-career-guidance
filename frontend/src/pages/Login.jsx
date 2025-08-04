import AuthForm from "../components/AuthForm";
import { NavLink } from "react-router-dom";

const Login = () => {
  const handleLogin = (form) => {
    newForm = {
      email: form.email,
      password: form.password,
    };
  };
  return (
    <div>
      <AuthForm type="login" handleSubmit={handleLogin} />
      <div className="text-center mt-6">
        <p>
          Not a user ?{" "}
          <NavLink to="/signup" className="text-blue-400 font-semibold">
            Sign up{" "}
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
