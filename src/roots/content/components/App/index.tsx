import React from "react";
import { useListenToContentCommands } from "@src/roots/content/hooks/useListenToContentCommands";
import { ProductDataSelectionView } from "@src/roots/content/views/ProductDataSelectionView"; // Assuming styles.css is in the same directory
import "./style.css";

function App() {
  useListenToContentCommands();

  console.log("app");

  return <ProductDataSelectionView />;
}

export default App;
