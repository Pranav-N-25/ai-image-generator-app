import React from "react";
import SuccessAlert1 from "./components/SuccessAlert1";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import { Pages } from "./pages/Index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { AIImageGeneratedURL, MyImageGenerator } from "./pages/ImgGenerator";
const App = () => {
  return (
    <div className="w-full h-screen">
      <NavBar navStyle={2} />
      <Routes>
        <Route exact path="/" element={Pages.Home} />
        <Route path="*" element={Pages.NotFoundPage} />
        <Route path="/imagegen" element={Pages.ImgGenerator} />
        <Route path="/collection" element={Pages.Collection} />
        <Route path="/about" element={Pages.About} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
