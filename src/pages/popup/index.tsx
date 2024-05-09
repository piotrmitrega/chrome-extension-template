import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import "@assets/styles/tailwind.css";
import PopupApp from "@pages/popup/PopupApp";

function init() {
  chrome.runtime.sendMessage("Popup opened");

  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Popup root element");

  const root = createRoot(rootContainer);
  root.render(<PopupApp />);

  chrome.runtime.onMessage.addListener((message) => {
    console.log("Message received in popup", message);
  });
}

init();
