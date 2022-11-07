/* TODO

  X Save the users choices in Local Storage
    X Retrieve their preferences from Local Storage and apply them to the application on startup

  X Extend your context provider to include all of the following features:
      O Create a context for managing application settings and provide this at the application level.
      O Display or Hide completed items (boolean).
      O Number of items to display per screen (number).
      O Default sort field (string).
      O Create a function in your context that saves user preferences (for the above) to local storage.
      X Implement a useEffect() (or componentDidMount()) in your context to read from local storage and set the values for those 2 state properties on application load.
        - Note: You will need to stringify your state prior to saving to local storage, and parse it when you retrieve it.

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
import { useState, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props)
{// props are important, so that we can send our context to children with {props.children}
  let [ pagination, setPagination ] = useState(3);
  let [ sortBy, setSortBy ] = useState('');
  let [ showCompleted, setHide ] = useState(false);
  let [ error, setError ] = useState(null);

  const updateSettings = (event) =>
  {
    // we know that value is an integer if truthy
    if (event.target.pagination > 0 && parseInt(event.target.pagination))
    {
      setPagination(event.target.pagination);
      setError(null); // reset error state
      localStorage.setItem('settings', JSON.stringify({ pagination, showCompleted }));
    }
    else
    {
      setError('Please set pagination to a number > 0');
    }
  }

  const updateSorting = (value) =>
  {
    //
  }

  // when component mounts, load our settings from localStorage
  useEffect(() =>
  {
    let savedSettings = localStorage.getItem('settings');
    // set them back into context values.
    console.log('settings object loaded from local storage: ', savedSettings);
  }, []);


  return (
    <SettingsContext.Provider
      value={ {
        pagination,
        showCompleted,
        sortBy,
        updatePagination,
        settingsError: error,
        setError
      } }
    >
      { props.children }
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
