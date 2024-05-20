import React from "react";
import { useUiMode } from "@src/roots/content/state/uiMode";
import { FullscreenBlur } from "@src/roots/content/components/FullscreenBlur";
import { ProductDataSelectionForm } from "@src/roots/content/components/ProductDataSelectionForm";
import { ProductDataSelectionToolbar } from "@src/roots/content/components/ProductDataSelectionToolbar";

export const ProductDataSelectionView = (): JSX.Element | null => {
  const isSelectionMode = useUiMode((state) => state.isSelectionMode);
  const activeSelector = useUiMode((state) => state.activeSelector);

  const hasActiveSelector = Boolean(activeSelector);

  if (!isSelectionMode) {
    return null;
  }

  if (!hasActiveSelector) {
    return (
      <FullscreenBlur>
        <ProductDataSelectionForm />
      </FullscreenBlur>
    );
  }

  return <ProductDataSelectionToolbar />;
};
