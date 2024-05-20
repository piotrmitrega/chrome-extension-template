// src/contentScript.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "@src/roots/content/components/App";

// Create a shadow host
const shadowHost = document.createElement("div");
shadowHost.id = "wtyczex-shadow-host";

document.body.appendChild(shadowHost);

// Attach a shadow root to the shadow host
const shadowRoot = shadowHost.attachShadow({ mode: "open" });

// Create a container for the React app inside the Shadow DOM
const shadowContainer = document.createElement("div");
shadowRoot.appendChild(shadowContainer);
shadowContainer.className = "__wrapper";

const root = createRoot(shadowContainer);

const documentCSS = document.createElement("link");
documentCSS.rel = "stylesheet";
documentCSS.type = "text/css";
documentCSS.href = chrome.runtime.getURL("contentStyle.css");
shadowRoot.appendChild(documentCSS);
//
// fetch(chrome.runtime.getURL("contentStyle.css"))
//   .then((response) => response.text())
//   .then((cssText) => {
//     // Create a style element and add the CSS content to it
//     const styleElement = document.createElement("style");
//     styleElement.textContent = cssText;
//
//     // Append the style element to the shadow root
//     shadowRoot.appendChild(styleElement);
//
//     // Create and append your content to the shadow root
//     const contentElement = document.createElement("div");
//     contentElement.innerHTML = `
//             <div class="custom-class">
//                 This is content inside the Shadow DOM.
//             </div>
//         `;
//     shadowRoot.appendChild(contentElement);
//   });

console.log("Siemano");
root.render(
  <React.StrictMode>
    <App shadowRoot={shadowRoot} />
  </React.StrictMode>,
);
