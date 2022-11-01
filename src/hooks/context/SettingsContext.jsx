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
import { createContext, useState } from 'react';

const SettingsContext = createContext();

function SettingsProvider(props)
{// props are important, so that we can send our context to children with {props.children}
  let [ hideCompleted, setHide ] = useState(false);
  let [ sortBy, setSortBy ] = useState('');
  let [ pagination, setPagination ] = useState(3)

  return (
    <SettingsContext.Provider value={ { hideCompleted, sortBy, pagination } }>
      { props.children }
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
