import React from "react";
import SuccessAlert1 from "./components/SuccessAlert1";
import Button from "./components/Button";
import { ScrollRestoration, Outlet } from "react-router-dom";
import { Pages } from "./pages/Index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext.jsx";

const App = () => {

  const { drawerOpen, stopScrolling } = useAppContext();

  return (
    <div className={` relative w-full  ${(drawerOpen || stopScrolling) ? "overflow-y-hidden" : ""} /h-screen bg-white/35 overflow-y-auto backdrop-blur-3xl `}>

      <ScrollRestoration />

      <NavBar />

      <svg width="0" height="0" className="absolute">
        <linearGradient id="yellow-red-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#ffcc00" offset="0%" /> {/* yellow-400 */}
          <stop stopColor="#ff0000" offset="80%" /> {/* red-600 */}
        </linearGradient>
      </svg>

      <svg width="0" height="0" className="absolute">
        <linearGradient id="violet-pink-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#f20089" offset="0%" /> {/* red-600 */}
          <stop stopColor="#8900f2" offset="80%" /> {/* yellow-400 */}
        </linearGradient>
      </svg>

      <Outlet />

      <Footer />

    </div>
  );
};

export default App;

/* navStyle={2}*/