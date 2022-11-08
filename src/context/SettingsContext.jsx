/* TODO

*/
import { useState, createContext, useEffect } from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props)
{// props are important, so that we can send our context to children with {props.children}
  let [ pagination, setPagination ] = useState(3);
  let [ sortBy, setSortBy ] = useState('');
  let [ showCompleted, setShowCompleted ] = useState(false);
  let [ error, setError ] = useState(null);

  const updateShowCompleted = (event) =>
  {
    setShowCompleted(!showCompleted)
    console.log('show completed: ', event.target);
  }
  const updatePagination = (event) =>
  {
    event.preventDefault();
    console.log('event: ', event.target.value);
    // we know that value is an integer if truthy
    if (event.target.value > 0 && parseInt(event.target.value))
    {
      setPagination(event.target.value);
      setError(null); // reset error state
      //localStorage.setItem('settings', JSON.stringify({ pagination, showCompleted }));
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

  const updateLocalStorage = () =>
  {
    localStorage.setItem('settings', JSON.stringify({ pagination, showCompleted }));
    console.log('updated local storage: ', pagination, showCompleted);
  }

  // when component mounts, load our settings from localStorage
  useEffect(() =>
  {
    try
    {
      let savedSettings = localStorage.getItem('settings');
      console.log('settings object loaded from local storage: ', savedSettings);
      let parsedSettings = JSON.parse(savedSettings);
      console.log('parsed settings: ', parsedSettings);

      // set them back into context values.
      setPagination(parsedSettings.pagination);
      setShowCompleted(parsedSettings.showCompleted);
      //setSortBy(parsedSettings.setSortBy);
    }
    catch (error)
    {
      console.log('error loading saved settings: ',error.message);
      setError('no settings to load')
    }
  }, []);


  return (
    <SettingsContext.Provider
      value={ {
        pagination,
        showCompleted,
        sortBy,
        updatePagination,
        updateShowCompleted,
        updateSorting,
        updateLocalStorage,
        settingsError: error,
        setError
      } }
    >
      { props.children }
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
