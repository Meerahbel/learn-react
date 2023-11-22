import { Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
    </Routes>
  );
}

export default App;
