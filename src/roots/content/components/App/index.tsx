import React from "react";
import { useListenToContentCommands } from "@src/roots/content/hooks/useListenToContentCommands";
import { ProductSelectionView } from "@src/roots/content/views/ProductSelectionView"; // Assuming styles.css is in the same directory
import "./style.css";

function App() {
  useListenToContentCommands();

  console.log("app");

  return <ProductSelectionView />;
}

export default App;
