import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SAT from "./pages/SAT";
import ACT from "./pages/ACT";
import Arena from "./pages/Arena";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sat" element={<SAT />} />
            <Route path="/act" element={<ACT />} />
            <Route path="/arena" element={<Arena />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
