import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Guidance from "./pages/Guidance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/guideinfo" element={<Guidance />} />
    </Routes>
  );
}

export default App;
