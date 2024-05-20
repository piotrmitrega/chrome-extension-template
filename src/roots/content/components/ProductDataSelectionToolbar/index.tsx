import React from "react";
import { Button } from "@/components/ui/button";
import { useHighlightSelectedElement } from "@src/roots/content/hooks/useHighlightSelectedElement";

export const ProductDataSelectionToolbar = (): JSX.Element => {
  useHighlightSelectedElement();

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded shadow-lg">
      <Button variant="outline">Cancel</Button>
    </div>
  );
};
