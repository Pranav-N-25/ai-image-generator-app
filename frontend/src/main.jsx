import React, { StrictMode } from "react";
import { AppContextProvider } from "./context/AppContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react';
import { Home } from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Collection from "./pages/Collection.jsx";
import { ImageGen } from "./pages/ImgGenerator.jsx";
import NotFoundPage from "./pages/NotFoundPage";


window.React = React;


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/imagegen",
          element: <ImageGen />
        },
        {
          path: "/collection",
          element: <Collection />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "*",
          element: <NotFoundPage />
        }
      ]
    }
  ]
)

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </ClerkProvider>
  </StrictMode>
);
