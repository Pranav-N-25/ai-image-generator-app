import React from "react";
import DashBoard from "./DashBoard";
import CodeGenerator from "./CodeGenerator";
import Summerizer from "./Summerizer";
import { Home } from "./Home";
import {ImageGen} from "./ImgGenerator";
import ChatBot from "./ChatBot";
import NotFoundPage from "./NotFoundPage";
export const Pages = {
  Home: <Home />,
  DashBoard: <DashBoard />,
  ChatBot: <ChatBot />,
  ImgGenerator: <ImageGen />,
  CodeGenerator: <CodeGenerator />,
  Summerizer: <Summerizer />,
  NotFoundPage : <NotFoundPage />
};
