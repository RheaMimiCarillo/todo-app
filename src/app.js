import styled, { css } from 'styled-components'
import './app.scss';
import AuthProvider from './context/Auth/auth.js';
import Login from './context/Auth/Login.jsx';
import IsAuthorized from './context/Auth/IsAuthorized.jsx';

import ToDo from './components/todo/todo.js';

// this is a default import, without deconstruction
import SettingsProvider from './context/SettingsContext';

/* TODO

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
