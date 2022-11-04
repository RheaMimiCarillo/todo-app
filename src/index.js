import React from "react";
import ReactDOM from "react-dom/client";
import '@blueprintjs/core/lib/css/blueprint.css';

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

  <Main />

);
