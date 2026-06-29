import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// 1. We have to import the router here!
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 2. Wrap your entire app inside the router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
