import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Plants from "./components/plants/Plants";
import "./App.css";
import PlantInfo from "./components/plants/PlantInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />

      <Route path="/plants" element={<Plants />} />
      <Route path="/plants/:id" element={<PlantInfo />} />
    </Routes>
  );
}

export default App;
