import React, { useEffect } from "react";
import { signIn } from "@src/auth/signIn";

export default function Popup(): JSX.Element {
  useEffect(() => {
    chrome.storage.sync.get("user").then(console.log);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3">
      Siemano
      <button onClick={signIn}>Sign in with googiel</button>
    </div>
  );
}
