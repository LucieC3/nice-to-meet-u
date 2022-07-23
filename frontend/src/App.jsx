import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Plants from "./components/plants/Plants";
import Plant from "./components/plants/Plant";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />

      <Route path="/plantes" element={<Plants />} />
      <Route path="/plantes/:id" element={<Plant />} />
    </Routes>
  );
}

export default App;
