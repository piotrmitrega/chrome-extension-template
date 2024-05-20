import { ContentCommandType } from "@src/consts/commands";
import { useUiMode } from "@src/roots/content/state/uiMode";

export const useListenToContentCommands = () => {
  const setSelectionMode = useUiMode((state) => state.setSelectionMode);

  chrome.runtime.onMessage.addListener((message) => {
    console.log("Message received in content script", message);

    switch (message.type) {
      case ContentCommandType.ENABLE_SELECTION_MODE: {
        setSelectionMode(true);
        break;
      }

      case ContentCommandType.DISABLE_SELECTION_MODE: {
        setSelectionMode(false);
        break;
      }

      default: {
        console.warn("Unknown message received in content script", message);
        return;
      }
    }
  });
};
