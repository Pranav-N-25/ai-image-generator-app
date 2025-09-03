import React from "react";
import SuccessAlert1 from "./components/SuccessAlert1";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import { Pages } from "./pages/Index";
import NavBar from "./components/NavBar";
const App = () => {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={Pages.Home} />
        <Route path="/intro" element={Pages.Intro} />
        <Route path="*" element={Pages.Home} />
        <Route path="/ai" element={Pages.DashBoard}>
          <Route path="chat-bot" element={Pages.ChatBot} />
          <Route path="img-generator" element={Pages.ImgGenerator} />
          <Route path="code-generator" element={Pages.CodeGenerator} />
          <Route path="summarizer" element={Pages.Summerizer} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
