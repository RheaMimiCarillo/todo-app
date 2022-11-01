import React from "react";
import ReactDOM from "react-dom/client";

import App from './app.js';

/* will rendering the entry point like this break anything? */
function Main()
{
  return (
    <App />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
