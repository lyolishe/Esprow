import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "@pages/Main/Main";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);