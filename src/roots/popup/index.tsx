import React from "react";
import { createRoot } from "react-dom/client";
import "@src/roots/popup/index.css";
import "@assets/styles/tailwind.css";
import PopupApp from "@src/roots/popup/PopupApp";

function init() {
  chrome.runtime.sendMessage("Popup opened");

  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Popup root element");

  const root = createRoot(rootContainer);
  root.render(<PopupApp />);
}

init();
