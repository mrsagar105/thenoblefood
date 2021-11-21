import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Donate from "./pages/Donate";
import Serve from "./pages/Serve";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element="Profile page" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/serve" element={<Serve />} />
      </Routes>
    </>
  );
}

export default App;
