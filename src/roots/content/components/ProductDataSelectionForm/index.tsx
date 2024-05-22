import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductDataSelectionInput } from "@src/roots/content/components/ProductDataSelectionInput";
import { useProductDataSelection } from "@src/roots/content/state/productDataSelection";
import { useUiMode } from "@src/roots/content/state/uiMode";
import { useToast } from "@/components/ui/use-toast";

export const ProductDataSelectionForm = (): JSX.Element => {
  const { toast } = useToast();

  const selectors = useProductDataSelection((state) => state.values);
  const setSelectionMode = useUiMode((state) => state.setSelectionMode);

  const onCancel = () => {
    setSelectionMode(false);
  };

  const onSubmit = async () => {
    toast({
      title: "Saved!",
      description: "Open the extension again to add your product!",
      variant: "success",
    });

    setSelectionMode(false);
  };

  const hasAllSelectors = selectors["title"] && selectors["unit"] && selectors["price"];

  return (
    <Card className="w-[350px] absolute top-8 right-8">
      <CardHeader>
        <CardTitle>Select product data</CardTitle>
        <CardDescription>Click on appropriate elements on the page to select</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <ProductDataSelectionInput
            readValue={selectors["title"]?.readValue}
            selector={selectors["title"]?.selector}
            selectorKey="title"
          />

          <ProductDataSelectionInput
            readValue={selectors["price"]?.readValue}
            selector={selectors["price"]?.selector}
            selectorKey="price"
          />

          <ProductDataSelectionInput
            readValue={selectors["unit"]?.readValue}
            selector={selectors["unit"]?.selector}
            selectorKey="unit"
          />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>

        <Button disabled={!hasAllSelectors} onClick={onSubmit}>
          Save 🚀
        </Button>
      </CardFooter>
    </Card>
  );
};
