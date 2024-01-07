import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { MobileMenuProvider } from "./context/MobileMenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MobileMenuProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MobileMenuProvider>
  </React.StrictMode>
);
