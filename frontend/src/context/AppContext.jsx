import React from "react";
import { useMediaQuery } from "react-responsive";
import { createContext, useContext } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";

// Create a context for the application
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// Custom hook to use the AppContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {  // for providing
  return useContext(AppContext);
};

// AppContextProvider component to provide the context to its children
export const AppContextProvider = ({ children }) => { //for wrapping the app
  const { user, isSignedIn } = useUser();
  const [chat, setChats] = React.useState([]);
  const [messages, setMessages] = React.useState([]);
  const { getToken } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // Accessing user parameters

  const id = user ? user.id : null;
  const email = user ? user.primaryEmailAddress?.emailAddress : null; // safest way
  const firstName = user ? user.firstName : null;
  const lastName = user ? user.lastName : null;
  const fullName = user ? user.fullName : null;
  const imageUrl = user ? user.imageUrl : null;
  const username = user ? user.username : null;
  const createdAt = user ? user.createdAt : null;
  const updatedAt = user ? user.updatedAt : null;

  const value = {
    id,
    email,
    firstName,
    lastName,
    fullName,
    username,
    imageUrl,
    createdAt,
    updatedAt,
    user,
    isSignedIn,
    chat,
    setChats,
    messages,
    setMessages,
    getToken,
    isMobile,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
