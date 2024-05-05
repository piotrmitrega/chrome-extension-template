// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIp4IaTaoekoutkM8U-x564DbqHcafPFo",
  authDomain: "piotr-extension.firebaseapp.com",
  projectId: "piotr-extension",
  storageBucket: "piotr-extension.appspot.com",
  messagingSenderId: "722112744821",
  appId: "1:722112744821:web:7b9b07e3a7fcca8cda173c",
  measurementId: "G-WF1C4ZM6DW"
};

export const intializeFirebase = () => {
  return initializeApp(firebaseConfig);
};

console.log("firebase initialized");
