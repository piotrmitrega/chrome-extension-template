import React from "react";
import { useListenToContentCommands } from "@src/roots/content/hooks/useListenToContentCommands";
import { ProductDataSelectionView } from "@src/roots/content/views/ProductDataSelectionView"; // Assuming styles.css is in the same directory
import { Toaster } from "@/components/ui/toaster";
import "./style.css";

function App() {
  useListenToContentCommands();

  return (
    <>
      <Toaster />
      <ProductDataSelectionView />
    </>
  );
}

export default App;
