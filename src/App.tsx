import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SAT from "./pages/SAT";
import ACT from "./pages/ACT";
import Tips from "./pages/Tips";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#FF0000] selection:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<SAT />} />
        <Route path="/math" element={<ACT />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
