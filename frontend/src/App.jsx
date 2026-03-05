import React from "react";
import SuccessAlert1 from "./components/SuccessAlert1";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import { Pages } from "./pages/Index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext.jsx";

const App = () => {

  const { drawerOpen } = useAppContext();

  return (
    <div className={` relative w-full  ${drawerOpen ? "overflow-y-hidden" : ""} h-screen bg-white/50 overflow-y-auto backdrop-blur-3xl `}>
      <NavBar />
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

/* navStyle={2}*/