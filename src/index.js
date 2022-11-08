import React from "react";
import ReactDOM from "react-dom/client";
import '@blueprintjs/core/lib/css/blueprint.css';

import AuthProvider from './context/Auth/auth.js';

import App from './app.js';

/* will rendering the entry point like this break anything? */
function Main()
{
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <Main />

);
