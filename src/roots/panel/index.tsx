import React from 'react';
import { createRoot } from 'react-dom/client';
import Panel from '@src/roots/panel/Panel';
import '@src/roots/panel/index.css';
import '@assets/styles/tailwind.css';

function init() {
  const rootContainer = document.querySelector("#__root");
  if (!rootContainer) throw new Error("Can't find Panel root element");
  const root = createRoot(rootContainer);
  root.render(<Panel />);
}

init();
