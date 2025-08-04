import { useState } from "react";
const AuthForm = ({ type, handleSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmitAuth(event) {
    event.preventDefault();
    await handleSubmit(form);
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }
  const handleInputChange = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <h2 className="mt-10 text-6xl font-bold text-center">
        {type === "signup" ? "Sign Up" : "Login"}
      </h2>
      <div className="max-w-md mx-auto mt-5 p-6 rounded-lg shadow-md gap-4">
        <form onSubmit={handleSubmitAuth}>
          {type === "signup" && (
            <div className="mb-4 flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                className="mt-4 rounded-md border-1 border-gray-300 p-2 text-gray-700"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <div className="mb-4 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="mt-4 rounded-md border-1 border-gray-300 p-2 text-gray-700"
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="mt-4 rounded-md border-1 border-gray-300 p-2 text-gray-700"
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {type === "signup" && (
            <div className="mb-4 flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="mt-4 rounded-md border-1 border-gray-300 p-2 text-gray-700"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          <button
            className="mt-7 p-3 mx-auto block bg-blue-800 rounded-md hover:bg-blue-700"
            type="submit"
          >
            {type === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
