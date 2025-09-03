import React from "react";
import DashBoard from "./DashBoard";
import CodeGenerator from "./CodeGenerator";
import Summerizer from "./Summerizer";
import { Home } from "./Home";
import ImgGenerator from "./ImgGenerator";
import ChatBot from "./ChatBot";

export const Pages = {
  Home: <Home />,
  DashBoard: <DashBoard />,
  ChatBot: <ChatBot />,
  ImgGenerator: <ImgGenerator />,
  CodeGenerator: <CodeGenerator />,
  Summerizer: <Summerizer />,
};
