import { useProductDataSelection } from "@src/roots/content/state/productDataSelection";
import { useUiMode } from "@src/roots/content/state/uiMode";
import { ElementSelector } from "@src/types/selectors";
import { useCallback } from "react";
import { SaveProductDataSelectorBackgroundCommand } from "@src/types/commands/background";

export const useSaveCurrentSelector = () => {
  const activeSelector = useUiMode((state) => state.activeSelector);
  const setActiveSelector = useUiMode((state) => state.setActiveSelector);
  const saveCurrentSelector = useProductDataSelection((state) => state.setValue);

  return useCallback(
    async (readValue: string, selector: ElementSelector) => {
      if (!activeSelector) {
        throw new Error("No selector!");
      }

      saveCurrentSelector(activeSelector, readValue, selector);
      setActiveSelector(null);

      await chrome.runtime.sendMessage(
        new SaveProductDataSelectorBackgroundCommand(activeSelector, selector),
      );
    },
    [activeSelector, saveCurrentSelector, setActiveSelector],
  );
};
