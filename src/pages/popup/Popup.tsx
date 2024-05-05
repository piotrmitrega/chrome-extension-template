import React, { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { intializeFirebase } from "@src/firebase/init";

  const firebaseApp = intializeFirebase();

export default function Popup(): JSX.Element {

  const signIn = async () => {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError);
        return;
      }

      console.log('Obtained token:', token);
      // Use this token to authenticate with Firebase

      var credential = GoogleAuthProvider.credential(null, token);
      const auth = getAuth(firebaseApp)
      signInWithCredential(auth, credential).then(userCredential => {
        console.log('firebase sign in success', userCredential);
      }).catch((error) => {
        console.log('firebase sign in error', error);
      });
    });
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3">
      Siemano
      <button onClick={signIn}>Sign in with googiel</button>
    </div>
  );
}
