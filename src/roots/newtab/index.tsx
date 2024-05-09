import React from 'react';
import { createRoot } from 'react-dom/client';
import Newtab from '@src/roots/newtab/Newtab';
import '@src/roots/newtab/index.css';
import '@assets/styles/tailwind.css';

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Newtab root element");
  const root = createRoot(rootContainer);
  root.render(<Newtab />);
}

init();
