console.log('background script loaded');

(async () => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  if(!tab) {
    console.error("No tab?")
    return;
  }

  const response = await chrome.tabs.sendMessage(Number(tab.id), {greeting: "hello"});
  // do something with response here, not outside the function
  console.log(response);
})();

// console.log(chrome.identity.getAccounts())
console.log("Co tam")
