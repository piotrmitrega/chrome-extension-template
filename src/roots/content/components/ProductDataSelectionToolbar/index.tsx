import React from "react";
import { Button } from "@/components/ui/button";
import { usePerformSelection } from "@src/roots/content/hooks/usePerformSelection";
import { useUiMode } from "@src/roots/content/state/uiMode";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProductDataSelectionToolbar = (): JSX.Element => {
  const activeSelector = useUiMode((state) => state.activeSelector);
  const setActiveSelector = useUiMode((state) => state.setActiveSelector);

  usePerformSelection();

  const onClick = () => {
    setActiveSelector(null);
  };

  return (
    <Card className="w-[350px] flex flex-row items-center outline outline-indigo-500 pointer-events-auto absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <CardHeader>
        <CardTitle>{activeSelector}</CardTitle>
        <CardDescription>Pick the element with {activeSelector}</CardDescription>
      </CardHeader>

      <Button variant="outline" onClick={onClick}>
        Cancel
      </Button>
    </Card>
  );
};
