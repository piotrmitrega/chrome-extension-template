import React, { useEffect } from "react";
import { useCurrentUser } from "@src/roots/popup/hooks/useCurrentUser";
import { SignOutButton } from "@src/roots/popup/components/SignOutButton";
import { ContentScriptCommandType, PopupCommandType } from "@src/consts/commands";
import { PickModeCompletedCommand } from "@src/types/commands";
import { PageProductData } from "@src/roots/popup/components/PageProductData";
import { useCheckCurrentPageProductSelectors } from "@src/roots/popup/hooks/useCheckCurrentPageProductSelectors";
// import { htmlToText } from "html-to-text";
//
// function getPageHtml() {
//   console.log("GET PAGE HTML", window);
//
//   return document.documentElement.outerHTML;
// }

export const HomePage = (): JSX.Element => {
  const user = useCurrentUser();

  useCheckCurrentPageProductSelectors();

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      if (message?.type === PopupCommandType.PICK_MODE_COMPLETED) {
        const pickModeCompletedMessage = message as PickModeCompletedCommand;

        alert(`Received command: ${JSON.stringify(pickModeCompletedMessage, null, 2)}`);
      }
    });
  }, []);
  // const getHtmlContent = () => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //     chrome.scripting.executeScript(
  //       {
  //         target: { tabId: tabs[0].id as number },
  //         func: getPageHtml,
  //       },
  //       (injectionResults) => {
  //         console.log(injectionResults);
  //         const stripped = htmlToText(injectionResults[0]?.result);
  //         alert(stripped);
  //       },
  //     );
  //   });
  // };

  const setPickMode = async () => {
    chrome.windows.create(
      {
        url: chrome.runtime.getURL("window.html"),
        type: "popup",
        width: 300,
        height: 200,
      },
      (window) => {
        console.log("siema");
      },
    );
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

    if (!tab?.id) {
      return;
    }
    // await chrome.tabs.sendMessage(tab.id, {
    //   type: ContentScriptCommandType.ENABLE_PICK_MODE,
    // });
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3">
      <PageProductData />
      Signed in as {user?.displayName}
      <SignOutButton />
      <button onClick={setPickMode}>GET HTML</button>
    </div>
  );
};
