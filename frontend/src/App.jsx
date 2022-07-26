import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Plants from "./pages/Plants";
import PlantInfo from "./components/plants/PlantInfo";
import PlantAdd from "./components/plants/PlantAdd";
import Websites from "./pages/Websites";
import Wishlist from "./pages/Wishlist";
import "./App.css";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />

        <Route path="/plantes" element={<Plants />} />
        <Route path="/plantes/:id" element={<PlantInfo />} />
        <Route path="/ajouter-une-plante" element={<PlantAdd />} />

        <Route path="/calendrier" element={<Calendar />} />
        <Route path="/sites-utiles" element={<Websites />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
