import { authenticateFromCache } from "@src/auth/authenticateFromCache";

console.log("background script loaded", new Date().toString());

authenticateFromCache();

chrome.runtime.onMessage.addListener((message) => {
  console.log("Message received in background", message);
});
