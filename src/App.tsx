import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SAT from "./pages/SAT";
import ACT from "./pages/ACT";
import About from "./pages/About";
import Tips from "./pages/Tips";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading" element={<SAT />} />
            <Route path="/math" element={<ACT />} />
            <Route path="/about" element={<About />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
