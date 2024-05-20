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

export const ProductDataSelectionForm = (): JSX.Element => {
  const selectors = useProductDataSelection((state) => state.values);

  return (
    <Card className="w-[350px] absolute top-8 right-8">
      <CardHeader>
        <CardTitle>Select product data</CardTitle>
        <CardDescription>Click on appropriate elements on the page to select</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <ProductDataSelectionInput
              readValue={selectors["title"]?.readValue}
              selectorKey="title"
              selectors={selectors["title"]?.selectors}
            />

            <ProductDataSelectionInput
              readValue={selectors["price"]?.readValue}
              selectorKey="price"
              selectors={selectors["price"]?.selectors}
            />

            <ProductDataSelectionInput
              readValue={selectors["unit"]?.readValue}
              selectorKey="unit"
              selectors={selectors["unit"]?.selectors}
            />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};
