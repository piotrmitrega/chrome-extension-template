import React from "react";
import { getActiveTab } from "@src/chrome/tabs";
import { EnableSelectionModeContentCommand } from "@src/types/commands/content";

export const PageProductSelectorMissing = (): JSX.Element => {
  const onClick = async () => {
    const tab = await getActiveTab();
    await chrome.tabs.sendMessage(tab.id as number, new EnableSelectionModeContentCommand());
  };

  return (
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      Siema byku. Nie znamy tej strony i musisz wykliknać product data
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        Lecimy
      </button>
    </div>
  );
};
