import styled, { css } from 'styled-components'
import React from 'react';

import ToDo from './components/todo/todo.js';

// this is a default import, without deconstruction
import SettingsProvider from './context/SettingsContext';

/* TODO

  X Implement the Context API to make some basic application settings available to components
    X How many To Do Items to show at once
    X Whether or not to show completed items

  X Provide the users with a form where they can change the values for those settings
    X This should be given in the form of a new component, perhaps linked to from the main navigation
    - Hint: Use Browser Router to create the page/route/component for this

  X Save the users choices in Local Storage
    X Retrieve their preferences from Local Storage and apply them to the application on startup

  X In your Context, read the settings in from an object in Local Storage and use that as the initial state
    X https://www.w3schools.com/html/html5_webstorage.asp
    X Before using web storage, check browser support for localStorage and sessionStorage:
      ```
      if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
      } else {
        // Sorry! No Web Storage support..
      }
      ```
      The localStorage object stores the data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

      Example
      ```
      // Store
      localStorage.setItem("lastname", "Smith");

      // Retrieve
      document.getElementById("result").innerHTML = localStorage.getItem("lastname");
      ```
      Local Storage JSON refresher:
        https://stackoverflow.com/a/2010948

      [Extend Local Storage For Easy Setting and Getting](https://stackoverflow.com/a/2010994)
*/

function App()
{
  return (
    <SettingsProvider>
      <ToDo />
    </SettingsProvider>
  );
}

export default App;
