import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { DocumentContextProvider } from "./context/DocumentContext";
import {
  PersonsContext,
  PersonsContextProvider,
} from "./context/PersonsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DocumentContextProvider>
        <PersonsContextProvider>
          <App />
        </PersonsContextProvider>
      </DocumentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
