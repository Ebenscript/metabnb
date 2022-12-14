import NiceModal from "@ebay/nice-modal-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HeadProvider } from "react-head";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeadProvider>
        <NiceModal.Provider>
          <App />
        </NiceModal.Provider>
      </HeadProvider>
    </BrowserRouter>
  </React.StrictMode>
);
