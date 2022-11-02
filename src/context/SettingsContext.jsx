/* TODO

  X Implement the React `context` API for defining `settings` across the entire application.
    X Create a `context` for managing application display settings and provide this at the application level.
    X Display or Hide completed items (boolean).
    X Number of items to display per screen (number).
    X Default sort field (string).
    X Manually set (hard code) those state settings in the context provider's state, they should not be changeable.

  X Consume and utilize `context` values throughout your components
   X Show a maximum of a certain number of items per screen in the `<List />` component
     X Provide "next" and "previous" links to let the users navigate a long list of items
   X Hide or show completed items in the list
   X Optional: Sort the items based on any of the keys (i.e. difficulty)
*/
import { useState, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props)
{// props are important, so that we can send our context to children with {props.children}
  let [ pagination, setPagination ] = useState(3);
  let [ sortBy, setSortBy ] = useState('');
  let [ showCompleted, setHide ] = useState(false);
  let [ error, setError ] = useState(null);

  const updatePagination = (value) =>
  {
    if (parseInt(value))
    { // we know that value is an integer if truthy
      setPagination(value);
      setError(null);
      localStorage.setItem('settings', JSON.stringify({ pagination, sort, display }));
    } else
    {
      // alert('Please set pagination to a number');
      setError('Please set pagination to a number');
    }
  }

  // when component mounts, load our settings from localStorage
  useEffect(() =>
  {
    let savedSettings = localStorage.getItem('settings');
    // set them back into context values.
  }, []);

  return (
    <SettingsContext.Provider value={ { pagination, showCompleted, sortBy, updatePagination, settingsError: error, setError } }>
      { props.children }
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
